let options = {
  oauthOptions: {
    method: 'POST',
    // uri: 'https://www.googleapis.com/oauth2/v4/token'
    uri: process.env.GOOGLE_API_URI + '/oauth2/v4/token'
    ,
    body: process.env.GOOGLE_SECRETS,
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': process.env.GOOGLE_BEARER_TOKEN,
      'content-type': 'application/x-www-form-urlencoded'
    }
  },

  getAllSurveys: {
    uri: process.env.GOOGLE_API_URI + '/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': process.env.GOOGLE_BEARER_TOKEN
    },
    json: true
  },

  questions: {
    method: 'POST',
    uri: process.env.GOOGLE_API_URI + '/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Content-type': 'application/json',
      'Authorization': process.env.GOOGLE_BEARER_TOKEN
    },
    body: {
      'owners': ['jelopez0005@gmail.com'],
      'wantedResponseCount': 100,
      // 'title': 'The Last Learners Guild Survey',
      'audience': {
        'country': 'US',
        'languages': ['en-US']
      },
      'questions': [
        {
          'question': 'What is your favorite programming language?',
          'type': 'singleAnswer',
          'answers': [
            'Python',
            'Ruby',
            'JavaScript',
            'Swift'
          ]
        },
        {
          'question': 'How many hours do you code each day?',
          'type': 'singleAnswer',
          'answers': [
            '4',
            '6',
            '8',
            'More than 8'
          ]
        },
        {
          'question': 'What is your favorite API?',
          'type': 'singleAnswer',
          'answers': [
            'Google Surveys API',
            'Facebook Live API',
            'Amazon Web Services API',
            'Twitter API'
          ]
        },
        {
          'question': 'What is your favorite taco spot?',
          'type': 'singleAnswer',
          'answers': [
            '29th St and Fruitvale Ave',
            'Tacos Mi Rancho',
            'Cholita Linda',
            'Taco Bell'
          ]
        },
        {
          'question': 'What is your favorite type of coffee?',
          'type': 'singleAnswer',
          'answers': [
            'Drip',
            'French Press',
            'Espresso',
            'Iced'
          ]
        }
      ]
    },
    json: true
  },

  removeSurvey: {
    method: 'DELETE',
    uri: process.env.GOOGLE_API_URI + '/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': process.env.GOOGLE_BEARER_TOKEN
    }
  },

  getOneSurvey: {
    uri: process.env.GOOGLE_API_URI + '/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': process.env.GOOGLE_BEARER_TOKEN
    }
  },

  updateOwner: {
    method: 'PUT',
    uri: process.env.GOOGLE_API_URI + '/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': process.env.GOOGLE_BEARER_TOKEN,
      'content-type': 'application/json'
    },
    body: {
      'owners': [process.env.OWNER_EMAIL]
    },
    json: true
  }
}

module.exports = { options }
