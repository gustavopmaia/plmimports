import * as Yup from 'yup';
import * as argon2 from 'argon2';
import mongoose from 'mongoose';

import User from '../models/User';

class UserController {

  async index(req, res){
    await User.find({}).select('-password').then((users) => {
      return res.json({
        error: false,
        users
      })
    }).catch((err) => {
      return res.status(400).json({
        error: true,
        code: 106,
        message: "Error: Não foi possivel executar a solicitação"
      })
    })
  }

  async store(req, res) {
    // Verificar se o email existe
    const emailExiste = await User.findOne({ email: req.body.email });
    if (emailExiste) {
      return res.status(400).json({
        error: true,
        code: 102,
        message: 'Error: Email ja existe',
      });
    }

    // Yup validacao

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        code: 103,
        message: 'Error: Dados invalidos',
      });
    }

    // Criptografar senha
    var dados = req.body;
    dados.password = await argon2.hash(dados.password);

    // Criar usuario
    const user = await User.create(dados)
      .then(() => {
        return res.status(200).json({
          error: false,
          message: 'Usuário cadastrado com sucesso',
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: true,
          code: 101,
          message: 'Error: Usuário não cadastrado' + err,
        });
      });
  }

  async delete(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        error: true,
        code: 121,
        message: 'Erro: Usuário não encontrado',
      });
    }

    const usuarioExiste = await User.findOne({ _id: req.params.id });

    if (!usuarioExiste) {
      return res.status(400).json({
        error: true,
        code: 121,
        message: 'Error: Usuário não encontrado',
      });
    }

    const user = await User.deleteOne({ _id: req.params.id })
      .then(() => {
        return res.json({
          error: false,
          message: 'Usuário apagado com sucesso!',
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: true,
          code: 122,
          message: 'Error: Usuário não foi apagado' + err,
        });
      });
  }
}

export default new UserController();
