const { User, Recetas, Favoritos } = require('../db')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')
// jwt y SK pueden ir en el .env mas adelante.
const jwt = require('jsonwebtoken')
const secretKey = 'cervezaNC'
require('dotenv').config()

const UserServices = {

  getAllUsers: async () => {
    try {
      const users = await User.findAll()

      if (users.length === 0) {
        return 'There are not users in the Data Base'
      }
      return users
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching users')
    }
  },
  getUserById: async (id) => {
    try {
      const response = await User.findByPk(id, { include: { all: true, nested: true } })

      if (!response) {
        return 'Cannot find the User ID'
      }
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching users')
    }
  },
  getUserByEmail: async (email) => {
    try {
      const response = await User.findAll({
        where: {
          email: {
            [Op.iLike]: `%${email}%`
          }
        }
      })
      if (!response) {
        throw new Error('User email not Found')
      }
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching user email')
    }
  },
  updateUser: async (id, updateData) => {
    try {
      const user = await User.findByPk(id)

      if (!user) {
        throw new Error(`Cannot update User with id: ${id} `)
      }

      const updatedUser = await user.update(updateData)

      return updatedUser
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching user')
    }
  },
  deleteUser: async (id) => {
    try {
      const response = await User.findByPk(id)
      if (!response) {
        throw new Error('User not found')
      }
      await response.update({ isActive: false })

      return 'User offline mode'
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching user')
    }
  },
  // register: async (name, email, password, street, zipCode, roleid)
  register: async (usuario, email, password, confirmpass, googlePass) => {
    try {
      let passCript
      if (password !== confirmpass) {
        throw new Error('password and confirm password do not match.')
      } else if (password.length >= 6) {
        passCript = bcrypt.hashSync(password, 10)
        console.log('PassCript Created', passCript)
      } else {
        // passCript = password
        throw new Error('password must be at least 6 characters long')
      }

      const user = await User.create({
        usuario,
        email,
        password: passCript,
        confirmpass: passCript,
        googlePass
      })

      console.log(user)

      if (user) {
        const token = jwt.sign({ user }, secretKey, {
          expiresIn: '24h'
        })
        return {
          user,
          token
        }
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error at creating user')
    }
  },
  addFavorite: async (userId, recetaId) => {
    try {
    // Check if the user and recipe exist
      const user = await User.findByPk(userId)
      const recipe = await Recetas.findByPk(recetaId)

      if (!user || !recipe) {
        throw new Error('User or recipe not found.')
      }
      // Check if the favorite already exists
      const existingFavorite = await Favoritos.findOne({
        where: { UserId: userId, RecetaId: recetaId }
      })
      if (existingFavorite) {
        throw new Error('Recipe already in favorites.')
      }
      // Add a new favorite
      await Favoritos.create({ UserId: userId, RecetaId: recetaId })
      console.log('Favorite recepie added')
    } catch (error) {
      console.log(error)
      throw new Error('Error adding favorite')
    }
  },
  deleteFavorite: async (userId, recetaId) => {
    try {
    // Check if the user and recipe exist
      const user = await User.findByPk(userId)
      const recipe = await Recetas.findByPk(recetaId)

      if (!user || !recipe) {
        throw new Error('User or recipe not found.')
      }
      // Delete the favorite
      const deletedCount = await Favoritos.destroy({
        where: { UserId: userId, RecetaId: recetaId }
      })

      if (deletedCount === 0) {
        throw new Error('Favorite not found.')
      }
      console.log('Favorite recipe deleted')
    } catch (error) {
      console.log(error)
      throw new Error('Error deleting favorite')
    }
  }
}

module.exports = UserServices
