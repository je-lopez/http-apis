let options = {
  oauthOptions: {
    method: 'POST',
    uri: 'https://www.googleapis.com/oauth2/v4/token',
    body: "client_secret=jSrjgy2KaKSNIQcCTdcF3ODx&grant_type=refresh_token&refresh_token=1%2FKgZJxvXFStTjiZjJvzccppBMl1bB5nusttxAOYhrmG4&client_id=927807271432-803ccgbu7dpgvpg9kffggfqou15q7al2.apps.googleusercontent.com",
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB',
      'content-type': 'application/x-www-form-urlencoded'
    }
  },

  getAllSurveys: {
    uri: 'https://www.googleapis.com/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB'
    },
    json: true
  },

  questions: {
    method: 'POST',
    uri: 'https://www.googleapis.com/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Content-type': 'application/json',
      'Authorization': 'Bearer ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB'
    },
    body: {
      'owners': ['jelopez0005@gmail.com'],
      'wantedResponseCount': 100,
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
    method: 'DE',
    uri: 'https://www.googleapis.com/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB'
    }
  },

  getOneSurvey: {
    uri: 'https://www.googleapis.com/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB'
    }
  },

  updateOwner: {
    method: 'PUT',
    uri: 'https://www.googleapis.com/surveys/v2/surveys',
    headers: {
      'User-Agent': 'Request-Promise',
      'Authorization': 'Bearer ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB',
      'content-type': 'application/json'
    },
    body: {
      'owners': ['jelopez0005@gmail.com']
    },
    json: true
  }
}


module.exports = { options }