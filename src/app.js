const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const nconf = require('nconf')
const compression = require('compression')
const helmet = require('helmet')
const chalk = require('chalk')

nconf.argv().env()
nconf.defaults({
  HOST: 'localhost',
  PORT: 3000
})

const app = express()

app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(nconf.get('PORT'), () => {
  console.log(
    chalk.green('Server listening'),
    chalk.white('@'),
    chalk.underline.magenta(`http://${nconf.get('HOST')}:${nconf.get('PORT')}`)
  )
})
