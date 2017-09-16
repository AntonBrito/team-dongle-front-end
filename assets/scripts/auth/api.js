'use strict'
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// Not sure this require is necessary here
// const config = require('../config')

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllPosts = () => {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET'
  })
}

const getAllMyPosts = () => {
  return $.ajax({
    url: app.host + '/posts/' + app.user.id + '/my_posts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createPost = (data) => {
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    data: {
      'post': {
        'title': data.title,
        'body': data.body
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// TODO get ID of post to be updated
// TODO finish this ajax request
const editPost = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + 'posts/'
  })
}

const getAllPages = () => {
  return $.ajax({
    url: app.host + '/pages',
    method: 'GET'
  })
}

const getAllMyPages = () => {
  return $.ajax({
    url: app.host + '/pages/' + app.user.id + '/my_pages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getOnePage = (data) => {
  console.log(data)
  return $.ajax({
    url: app.host + '/pages/' + data.pages.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createPage = (data) => {
  return $.ajax({
    url: app.host + '/pages',
    method: 'POST',
    data: {
      'page': {
        'title': data.title,
        'sections': {
          'heading': data.heading,
          'body': data.body,
          'footer': data.footer
        }
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut,
  getFormFields,
  getAllPosts,
  getAllMyPosts,
  createPost,
  editPost,
  getAllPages,
  getAllMyPages,
  createPage,
  getOnePage

}
