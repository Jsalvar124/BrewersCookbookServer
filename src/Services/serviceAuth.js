const { User } = require('../db');
const jwt = require("jsonwebtoken");
const secretKey = 'cervezaNC'


const findUser = async (email) => {
  try {
    const user = await User.findOne({
      where: {
        email: email
      }
    });

    if (user) {
      return user.dataValues;
    } else {
      throw new Error('No existe el usuario');
    }
  } catch (error) {
    throw new Error("Error de autenticacion " + error.message);
  }
};
//!------------------ todavia en mantenimiento el token
const token = async (token) => {
    try {
      if (!token) {
        throw new Error('Acceso no autorizado');
      }
  
      const decoded = await jwt.verify(token, secretKey);
      //extraigo la info del token
      const user = {
        email: decoded.email,
        password: decoded.password,
        googlePass: decoded.googlePass
      }
      if (!user) {
        throw new Error('No existe el usuario');
      }
      return user;
    } catch (error) {
      throw new Error('No autorizado');
    }
  };

  module.exports = {
    findUser,
    token
  }