import express from 'express'
import cors from 'cors'
import { users } from './users.js'

const PORT = 5501

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (_req, res, _next) => {
  res.send(users)
})

app.listen(PORT, () => {
  console.log(`Running: localhost:${PORT}`)
})