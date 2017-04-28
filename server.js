let express = require('express')
let request = require('request')
require('dotenv').config()
let rp = require('request-promise')
let bodyParser = require('body-parser')
let logger = require('morgan')
let path = require('path')
let app = express()
let apiController = require('./apiController/controller')
// require('./public/javascripts/formatSurvey')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index.pug')
})

app.get('/survey', (req, res) => {
  apiController.getAll()
    .then(data => {
      res.render('surveys.pug', { data: data.resources } )
    })
})

app.get('/survey/add', (req, res) => {
  // if (req.query) {
  //   formatQuestions(req.query)
  //   res.render('/survey')
  // }
  // else {
  //   res.render('addSurvey.pug')
  // }
    res.render('addSurvey.pug')
})

app.get('/survey/:id', (req, res) => {
  let id = req.params.id
  apiController.getOneSurvey(id)
    .then(data => {
      res.render('single.pug', { data: JSON.parse(data) } )
    })
    .catch(error => {
      console.error(error)
      res.render('error.pug', { error: error } )
    })
})

app.get('/survey/remove/:id', (req, res) => {
  let id = req.params.id
  apiController.deleteSurvey(id)
  .then(data => {
    res.redirect('/')
  })
  .catch(error => {
    res.render('error.pug', { error: error } )
  })
})

app.use(function(req, res, next) {
  let err = new Error('Survey Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message

  res.status(err.status || 500)
  res.render('error.pug', {error: err})
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
