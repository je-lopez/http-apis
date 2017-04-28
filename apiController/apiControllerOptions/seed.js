const seedQuestions = {
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
    }

rp(options.oauthOptions)
  .then(resp => {
    options.questions.headers.Authorization = 'Bearer ' + JSON.parse(resp).access_token
    options.questions.body = seedQuestions
    return rp(options.questions)
  })