require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/db')
const app = express ()
const PORT = process.env.PORT || 5001
const { conn } = require('./src/db')

app.use(express.json())

conn.sync({ force: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server raised in port ${PORT} `)
        })
    })

connectDB()