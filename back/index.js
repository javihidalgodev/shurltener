const config = require('./utils/config')
const app = require('./app')
const http = require('http')

const server = http.createServer(app)

const PORT = config.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`)
})