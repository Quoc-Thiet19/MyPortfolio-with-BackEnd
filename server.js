import config from './config/config.js'
import app from './server/express.js'
import mongoose from 'mongoose'

mongoose.connect(config.mongoUri)
  .then(() => {
    console.log('Connected to the database!')
  })

mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MyPortfolio application.' })
})

app.listen(config.port, (err) => {
  if (err) console.log(err)
  console.info('Server started on port %s.', config.port)
})
