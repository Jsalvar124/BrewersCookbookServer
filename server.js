require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/db')
const app = express()
const PORT = process.env.PORT || 5001
const { conn } = require('./src/db')
const cors = require('cors')

const cloudinary = require('cloudinary').v2
const multer = require('multer')
const upload = multer({ dest: 'uploads' })

const ingredientesRoutes = require('./src/routes/routeIngredientes')
const userRoutes = require('./src/routes/user.routes')
const estilosRoutes = require('./src/routes/routeEstilos')
const recetasRoutes = require('./src/routes/recetasRoutes')
const loginRoutes = require('./src/routes/login.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/ingredientes', ingredientesRoutes)
app.use('/users', userRoutes)
app.use('/estilos', estilosRoutes)
app.use('/recetas', recetasRoutes)
app.use('/login', loginRoutes)

// TEST ______________________________________________________________________________
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de Brewer\'s cookbook.')
})

// conn.sync({ force: false })
conn.sync({ alter: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server raised in port ${PORT} `)
    })
  })

connectDB()
