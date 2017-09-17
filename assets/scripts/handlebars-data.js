// ///////////////////////////
// template context for posts/
// ///////////////////////////
const postsHandlebars = function (title, body, dataId) {
  const postHandlebarsTemplate = require('./templates/posts-template.handlebars')
  const context = {
    'title': title,
    'body': body,
    'dataId': dataId
  }
  const postTemplate = postHandlebarsTemplate(context)
  $('#post-div').append(postTemplate)
}
// ///////////////////////////
// template context for pages/
// ///////////////////////////
const pagesHandlebars = function (title, heading, body, footer, dataId) {
  const pageHandlebarsTemplate = require('./templates/pages-template.handlebars')
  const context = {
    'title': title,
    'heading': heading,
    'body': body,
    'footer': footer,
    'dataId': dataId
  }
  console.log('info from handlebars' + title + heading + body + footer + dataId)
  const html = pageHandlebarsTemplate(context)
  $('#pages-div').append(html)
}
// ////////////////////////////
// template context for drpdwn/
// ////////////////////////////
const dropdownHandlebars = function (title, dataId) {
  const pageHandlebarsTemplate = require('./templates/pages-dropdown-list.handlebars')
  const context = {

    'title': title,
    'dataId': dataId
  }
  const html = pageHandlebarsTemplate(context)
  $('#listOfPages').append(html)
}

module.exports = {
  postsHandlebars,
  pagesHandlebars,
  dropdownHandlebars
}
