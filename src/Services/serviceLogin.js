const { User } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = 'cervezaNC'
const AddGooglePass = async (email, googlePass) => {
  console.log(googlePass)
  try {
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (!user) {
      throw new Error('Usuario no autorizado')
    }

    if (googlePass && !user.googlePass) {
      const cryptGooglePass = await bcrypt.hash(googlePass, 10)
      user.googlePass = cryptGooglePass
      await user.save()
    }
    console.log(user.dataValues)
    return user.dataValues
  } catch (error) {
    throw new Error(error.message)
  }
}
//! ---------------Para implementar login de manera local-------------------------------------
const verifyLocalPassword = async (email, password) => {
  const user = await User.findOne({
    where: { email }
  })
  console.log(user)

  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
    throw new Error('Contraseña incorrecta')
  }

  return user.dataValues
}

const generateSessionToken = (user) => {
  const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '24h' })
  return token
}

const verifySessionToken = (token) => {
  return jwt.verify(token, secretKey)
}

module.exports = {
  AddGooglePass,
  verifyLocalPassword,
  generateSessionToken,
  verifySessionToken
}
