const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
require('./api/curtiDemais/getDataBase')