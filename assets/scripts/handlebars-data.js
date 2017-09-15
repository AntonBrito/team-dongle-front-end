// ///////////////////////////
// template context for posts/
// ///////////////////////////
$(() => {
  const postHandlebarsTemplate = require('./templates/posts-template.handlebars')
  const context = {
    'title': "I'm a Title!",
    'body': 'I HAVE BODY'
  }
  const postTemplate = postHandlebarsTemplate(context)
  $('#post-div').append(postTemplate)
})
// ///////////////////////////
// template context for pages/
// ///////////////////////////
$(() => {
  const pageHandlebarsTemplate = require('./templates/pages-template.handlebars')
  const context = {
    'title': "I'm a Title!",
    'heading': 'Look! I am a Header',
    'body': 'I have body',
    'footer': 'FEET'
  }
  const html = pageHandlebarsTemplate(context)
  $('#pages-div').append(html)
})
// ////////////////////////////
// template context for drpdwn/
// ////////////////////////////
$(() => {
  const pageHandlebarsTemplate = require('./templates/pages-dropdown-list.handlebars')
  const context = {
    'title': "I'm a Title!"
  }
  const html = pageHandlebarsTemplate(context)
  $('#pages-div').append(html)
})
