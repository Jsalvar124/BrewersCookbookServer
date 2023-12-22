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

const getUserBySessionToken = async (req, res) => {
  try {
    const token = req.cookies.jwt;

    console.log('Token recibido:', token);

    const decodedToken = verifyTokenSession(token);
    const user = { userId: decodedToken.userId, email: decodedToken.email };

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  loginFunction,
  getUserBySessionToken
}
