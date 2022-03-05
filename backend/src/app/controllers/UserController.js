import * as Yup from 'yup';
import * as argon2 from 'argon2';
import mongoose from 'mongoose';

import User from '../models/User';

class UserController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { limit = 10 } = req.query;

    await User.paginate({}, { select: '_id name email', page, limit })
      .then((users) => {
        return res.json({
          error: false,
          users,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: true,
          code: 106,
          message: 'Error: Não foi possivel executar a solicitação',
        });
      });
  }

  async show(req, res) {
    User.findOne({ _id: req.params.id }, '-password -__v')
      .then((user) => {
        return res.json({
          error: false,
          user,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: true,
          code: 107,
          message: 'Error: Usuário não encontrado',
        });
      });
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

  async update(req, res){
    const schema = Yup.object().shape({
      _id: Yup.string().required(),
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6)
    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({
        error: true,
        code: 108,
        message: "Error: Dados do formulario invalidos"
      })
    }

    const { _id, email } = req.body

    const userExiste = await User.findOne({_id})
    if(!userExiste){
      return res.status(400).json({
        error: true,
        code: 109,
        message: "Error: Usuário não encontrado"
      })
    }

    if(email != userExiste.email){
      const emailExiste = await User.findOne({email})
      if(emailExiste){
        return res.status(401).json({
          error: true,
          code: 110,
          message: "Error: Este e-mail ja esta cadastrado"
        })
      }
    }

    var dados = req.body
    if(dados.password){
      dados.password = await argon2.hash(dados.password)
    }

    await User.updateOne({_id: dados._id}, dados).then((user) => {
      return res.json({
        error: false,
        message: "Usuário editado com sucesso"
      })
    }).catch((err) => {
      return res.status(400).json({
        error: true,
        code: 111,
        message: "Error: Usuário não editado"
      })
    })
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
