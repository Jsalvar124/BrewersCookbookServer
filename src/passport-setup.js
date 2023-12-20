const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('./db')

passport.use(new GoogleStrategy({
  clientID: '779460091956-h37dd9i7m5kstrj6sm08139lvr6q4d38.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Aquí debes implementar la lógica para almacenar el usuario en tu base de datos
  // y llamar a done(err, user) cuando hayas terminado.
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  // Aquí debes implementar la lógica para serializar al usuario
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
    try {
      // Aquí debes realizar una operación de búsqueda en tu base de datos para obtener el usuario
      const user = await User.findByPk(id);
  
      if (!user) {
        // Si no se encuentra el usuario, se pasa un error a done
        return done(new Error('Usuario no encontrado'));
      }
  
      // Si se encuentra el usuario, se pasa el usuario a done
      done(null, user);
    } catch (error) {
      // Manejo de errores
      done(error);
    }
  });
  
