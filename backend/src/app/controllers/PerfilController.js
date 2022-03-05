import * as Yup from 'yup';
import * as argon2 from 'argon2';
import User from '../models/User';

class PerfilController {
  async show(req, res) {
    await User.findOne(
      { _id: req.userId },
      '_id name email createdAt updatedAt'
    )
      .then((user) => {
        return res.json({
          error: false,
          user,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: true,
          code: 112,
          message: 'Error: Perfil não encontrado',
        });
      });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        code: 113,
        message: 'Error: Dados do formulario invalidos',
      });
    }

    const { email } = req.body;

    const userExiste = await User.findOne({ _id: req.userId });
    if (!userExiste) {
      return res.status(400).json({
        error: true,
        code: 114,
        message: 'Error: Perfil não encontrado',
      });
    }

    if (email != userExiste.email) {
      const emailExiste = await User.findOne({ email });
      if (emailExiste) {
        return res.status(401).json({
          error: true,
          code: 115,
          message: 'Error: Este e-mail ja esta cadastrado',
        });
      }
    }

    var dados = req.body;
    if (dados.password) {
      dados.password = await argon2.hash(dados.password);
    }

    await User.updateOne({ _id: req.userId }, dados)
      .then((user) => {
        return res.json({
          error: false,
          message: 'Perfil editado com sucesso',
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: true,
          code: 116,
          message: 'Error: Perfil não editado',
        });
      });
  }
}

export default new PerfilController();
