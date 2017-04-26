let request = require('request')
let rp = require('request-promise')
let parser = require('body-parser')
let options = require('./apiControllerOptions/controllerOptions').options

const apiController = {
  getAll: () => {
    return rp(options.oauthOptions)
      .then(resp => {
        options.getAllSurveys.headers.Authorization = 'Bearer ' + JSON.parse(resp).access_token
        return rp(options.getAllSurveys)
      })
      .catch(error => {
        return error
      })
  },

  getOneSurvey: (surveyId) => {
    return rp(options.oauthOptions)
      .then(resp => {
        options.getOneSurvey.headers.Authorization = 'Bearer ' + JSON.parse(resp).access_token
        options.getOneSurvey.uri = options.getOneSurvey.uri + '/' + surveyId
        return rp(options.getOneSurvey)
      })
      .catch(error => {
        return JSON.stringify(error)
      })
  },

  addSurvey: () => {
    rp(options.oauthOptions)
      .then(resp => {
        options.questions.headers.Authorization = 'Bearer ' + JSON.parse(resp).access_token
        return rp(options.questions)
      })
      .then((data) => {
        console.log(JSON.stringify(data))
      })
  },

  deleteSurvey: (surveyId) => {
    return rp(options.oauthOptions)
      .then(resp => {
        options.removeSurvey.headers.Authorization = 'Bearer ' + JSON.parse(resp).access_token
        options.removeSurvey.uri = options.removeSurvey.uri + '/' + surveyId
        return rp(options.removeSurvey)
      })
  },

  update: (surveyId, email) => {
    rp(options.oauthOptions)
      .then(resp => {
        options.updateOwner.uri = options.updateOwner.uri + '/' + surveyId
        options.updateOwner.body.owners.push(email)
        options.updateOwner.headers.Authorization = 'Bearer ' + JSON.parse(resp).access_token
        return rp(options.updateOwner)
      })
      .then(console.log)
  }
}

// apiController.getAll()
// apiController.addSurvey()
// apiController.deleteSurvey('iyka6rz4pvsi4dddopjw5zgfoa')
// apiController.getOneSurvey('iyka6rz4pvsi4dddopjw5zgfoa')
// apiController.update('iyka6rz4pvsi4dddopjw5zgfoa', 'ben@gmail.com')
module.exports = apiController