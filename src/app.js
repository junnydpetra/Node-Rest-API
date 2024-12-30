import express from 'express'
import router from './routes.js'

const app = express()

app.use(router)

/* Telling Express to read JSON format */
app.use(express.json())

export default app