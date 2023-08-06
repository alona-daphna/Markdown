import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import blogRouter from './routes/blogRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use('/blogs', blogRouter)

app.listen(PORT, () => {
    console.log(`server is up: port ${PORT}`)
})