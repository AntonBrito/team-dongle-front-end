// ///////////////////////////
// template context for posts/
// ///////////////////////////
const postsHandlebars = function (title, body) {
  const postHandlebarsTemplate = require('./templates/posts-template.handlebars')
  const context = {
    'title': title,
    'body': body
  }
  const postTemplate = postHandlebarsTemplate(context)
  $('#post-div').append(postTemplate)
}
// ///////////////////////////
// template context for pages/
// ///////////////////////////
const pagesHandlebars = function () {
  const pageHandlebarsTemplate = require('./templates/pages-template.handlebars')
  const context = {
    'title': "I'm a Title!",
    'heading': 'Look! I am a Header',
    'body': 'I have body',
    'footer': 'FEET'
  }
  const html = pageHandlebarsTemplate(context)
  $('#pages-div').append(html)
}
// ////////////////////////////
// template context for drpdwn/
// ////////////////////////////
const dropdownHandlebars = function () {
  const pageHandlebarsTemplate = require('./templates/pages-dropdown-list.handlebars')
  const context = {
    'title': "I'm a Title!"
  }
  const html = pageHandlebarsTemplate(context)
  $('#pages-div').append(html)
}

module.exports = {
  postsHandlebars,
  pagesHandlebars,
  dropdownHandlebars
}
