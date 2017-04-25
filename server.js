let express = require('express')
let request = require('request')
let rp = require('request-promise')
let parser = require('body-parser')
let path = require('path')
let app = express()

// app.use('/db', )
app.use(express.static(path.join(__dirname, 'public')))
app.use(parser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})