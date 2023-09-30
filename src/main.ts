import express from 'express'
import botRouter from './routes/BotRoutes.js'

const app = express()

app.use('/api/bots', botRouter)

app.use(express.json())

app.listen(3001, () => {
  // eslint-disable-next-line
  console.log('Server is running on port 3001')
})

export default app
