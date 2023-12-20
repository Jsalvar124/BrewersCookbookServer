const { token } = require('../Services/serviceAuth')

//! ---------------------------------------------------------------
const authenticateUser = async (req, res, next) => {
  try {
    const authtoken = req.headers.authorization.split(' ')[1];
    const user = await token(authtoken);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  authenticateUser
};