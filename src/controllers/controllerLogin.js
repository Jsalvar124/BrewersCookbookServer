const { AddGooglePass, verifyLocalPassword, generateSessionToken } = require('../Services/serviceLogin')



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

    res.status(200).json({ user: user, token: token });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(401).json({ error: error.message })
  }
}

module.exports = {
  loginFunction
}
