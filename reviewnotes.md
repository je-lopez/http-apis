keep secure data (tokens, etc.) in env variables
consider using the dotenv library
example .env file
```
GOOGLE_API_BEARER_TOKEN=ya29.Gls2BOhmJGsI9W_wY3lhaaSXkKvUHKN7fCNKiqJUjHPdVtBzEkGndl1ifkpbd0YYrUTYwK9ueeypgAHcxJcw_BEskYY8wn5ocUSfUXjtiTHQGjTmj406D7CZbwmB
```

```js
// then in node..
require('dotenv').config()
process.env.GOOGLE_API_BEARER_TOKEN
```