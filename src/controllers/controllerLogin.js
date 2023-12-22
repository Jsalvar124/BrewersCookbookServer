const { User } = require('../db')
const jwt = require('jsonwebtoken')
const secretKey = 'cervezaNC'
const { AddGooglePass, verifyLocalPassword, generateSessionToken, createCookie } = require('../Services/serviceLogin')



const loginFunction = async (req, res) => {
  const { email, password, googlePass } = req.body
  console.log('Received login request:', { email, password, googlePass })

  try {
    const user = await verifyLocalPassword(email, password)
    console.log(user)

    // if (googlePass) {
    //   // Si es un inicio de sesión con Google
    //   user = await findUser(email)
    //   if (!user.email) {
    //     throw new Error('Credenciales inválidas, no existe usuario')
    //   }

    //   if (!user.googlePass) {
    //     await AddGooglePass(user.email, googlePass)
    //   }
    // } else {
    //   // Si es un inicio de sesión local
    //   user = await verifyLocalPassword(email, password)
    // }

    // Generar token de sesión
    const token = generateSessionToken(user)

    createCookie(res, token)

    res.status(200).json({ user: user, token: token });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(401).json({ error: error.message })
  }
}

const getUserByToken = async (req, res) => {
  const token = req.params.token || req.query.token;

  try {
    if (!token) {
      throw new Error('Token no proporcionado');
    }

    const decodedToken = jwt.verify(token, secretKey);
    const user = await User.findByPk(decodedToken.userId);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    res.status(200).json({ usuario: user.usuario, email: user.email, id: user.id });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = {
  loginFunction,
  getUserByToken
}
