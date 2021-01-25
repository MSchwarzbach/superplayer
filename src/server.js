import express from 'express'
import router from './routes/index.js'

const app = express()

app.use('', router)

app.listen(5555, () => {
    console.log('Servidor rodando')
})