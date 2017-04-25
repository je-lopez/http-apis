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

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/survey', (req, res) => {
  apiController.getAll()
    .then(data => {
      res.send(JSON.stringify(data))
  })
})

app.get('/survey/:id', (req, res) => {
  let id = req.params.id
  apiController.getOneSurvey(id)
    .then(data => {
      res.send(JSON.parse(data))
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