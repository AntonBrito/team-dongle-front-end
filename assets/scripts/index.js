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
  $('#sign-out').on('click', events.onSignOut)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#allposts').on('click', events.onGetAllPosts)
  $('#get-every-post').on('click', events.onGetAllPosts)
  $('#get-all-my-posts').on('click', events.onGetAllMyPosts)
  $('#post_title').on('submit', events.onCreatePost)
  $('#pages_title').on('submit', events.onCreatePage)
  $('#random').on('click', events.onGetAllMyPages)
  $('#update_posts_form').on('submit', events.onUpdatePost)
  $('#update_pages_form').on('submit', events.onUpdatePage)
  $('form').on('submit', function () {
    $('input').val('')
    $('#message').empty()
  })
  // ///////////////////
  // Views /////////////
  // ///////////////////
  $('#posts_page, #pages_page, #create_posts, #create_pages, #update_posts, #update_pages').hide()
  $('#get-every-post').on('click', function () {
    $('#posts_page').show()
  })
  $('#get-all-my-posts').on('click', function () {
    $('#posts_page').show()
  })
})

$(document).on('click', '.postsEditButton', events.onUpdatePostSaveId)
$(document).on('click', '#pages-dropdown-page-title', events.onGetOnePage)
$(document).on('click', '.pagesDeleteButton', events.onDeletePage)
$(document).on('click', '.postsDeleteButton', events.onDeletePost)

// const pageList = document.getElementById('pages-dropdown-page-list')
// $(pageList).on('click', events.onGetOnePage)
// use require without a reference to ensure a file is bundled
// require('./example')
