let express = require('express')
let request = require('request')
let rp = require('request-promise')
let bodyParser = require('body-parser')
let logger = require('morgan')
let path = require('path')
let app = express()
let apiController = require('./apiController/controller')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index.pug')
})

app.get('/survey', (req, res) => {
  apiController.getAll()
    .then(data => {
      res.render('index.pug', { data: data.resources } )
  })
})

app.get('/survey/:id', (req, res) => {
  let id = req.params.id
  apiController.getOneSurvey(id)
    .then(data => {
      res.render('single.pug', { data: JSON.parse(data) } )
    })
})

app.get('/survey/remove/:id', (req, res) => {
  let id = req.params.id
  apiController.deleteSurvey(id)
  .then(data => {
    res.redirect('/')
  })
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})