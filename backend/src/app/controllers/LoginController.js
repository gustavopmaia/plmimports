import * as argon2 from 'argon2'
import User from '../models/User'

class LoginController{
  async store(req, res){
    const { email, password } = req.body

    const userExiste = await User.findOne({email: email})
    if(!userExiste){
      return res.status(401).json({
        error: true,
        code: 110,
        message: "Error: Usuário ou senha inválido"
      })
    }

    if(!(await argon2.verify(userExiste.password, password))){
      return res.status(401).json({
        error: true,
        code: 111,
        message: "Error: Usuário ou senha inválido"
      })
    }

    return res.status(200).json({
      user: {
        id: userExiste._id,
        name: userExiste.name,
        email
      }
    })
  }
}

export default new LoginController