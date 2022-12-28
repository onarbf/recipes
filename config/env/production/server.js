module.exports = ({ env }) => ({
    url: env('https://limitless-dawn-09573.herokuapp.com/heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)'),
  });