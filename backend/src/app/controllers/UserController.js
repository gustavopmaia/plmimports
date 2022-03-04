import * as Yup from 'yup'
import * as argon2 from 'argon2'
import User from '../models/User';

class UserController {
  async store(req, res) {
    // Verificar se o email existe
    const emailExiste = await User.findOne({email: req.body.email})
    if(emailExiste){
      return res.status(400).json({
        error: true,
        code: 102,
        message: 'Error: Email ja existe3',
      });
    }

    // Yup validacao

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({
        error: true,
        code: 103,
        message: 'Error: Dados invalidos',
      });
    }

    // Criptografar senha
    var dados = req.body
    dados.password = await argon2.hash(dados.password)

    // Criar usuario
    const user = await User.create(dados, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          code: 101,
          message: 'Error: Usuário não cadastrado' + err,
        });
      return res.status(200).json({
        error: false,
        message: 'Usuário cadastrado com sucesso',
      });
    });
  }
}

export default new UserController();
