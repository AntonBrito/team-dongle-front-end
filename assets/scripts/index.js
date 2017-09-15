'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events.js')
require('./handlebars-data')
$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#allposts').on('click', events.onGetAllPosts)
  $('#myposts').on('click', events.onGetMyPosts)
})
// use require without a reference to ensure a file is bundled
// require('./example')
