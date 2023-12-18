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
const userRoutes = require('./src/routes/userRoutes')
const estilosRoutes = require('./src/routes/routeEstilos')
const recetasRoutes = require('./src/routes/recetasRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/ingredientes', ingredientesRoutes)
app.use('/users', userRoutes)
app.use('/estilos', estilosRoutes)
app.use('/recetas', recetasRoutes)

// TEST ______________________________________________________________________________
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de Brewer\'s cookbook.')
})

app.post('/img', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    res.status(200).json(result)
    // cuando guardemos en el modelo : result.url
  } catch (error) {
    console.log({ errorMessage: error.message })
    return res.status(500).json({ message: error.message })
  }
})

// app.get('/styles', async (req, res) => {
//   try {
//     const styles = await Estilos.findAll()
//     if (!styles) {
//       return res.status(404).json({ message: 'not found' })
//     }
//     return res.status(200).json(styles)
//   } catch (error) {
//     console.log({ errorMessage: error.message })
//     return res.status(500).json({ message: error.message })
//   }
// })
// app.get('/malts', async (req, res) => {
//   try {
//     const malts = await Maltas.findAll()
//     if (!malts) {
//       return res.status(404).json({ message: 'not found' })
//     }
//     return res.status(200).json(malts)
//   } catch (error) {
//     console.log({ errorMessage: error.message })
//     return res.status(500).json({ message: error.message })
//   }
// })
// END TEST ______________________________________________________________________________
// conn.sync({ force: false })
conn.sync({ alter: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server raised in port ${PORT} `)
    })
  })

connectDB()
