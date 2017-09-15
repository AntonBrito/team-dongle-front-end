// Retrieve the template data from the HTML .
const postHandlebarsTemplate = require('./templates/posts-template.handlebars')
$(() => {
  const postsContext = {
    'title': "I'm a Title!",
    'body': 'I HAVE BODY'
  }
  const postTemplate = postHandlebarsTemplate(postsContext)
  console.log(postTemplate)

  $('#post-div').append(postTemplate)
})
// ///////////////////////////

// Retrieve the template data from the HTML .
// const pagesTemplate = $('#handlebars-pages').html()
// const pagesContext = {
//   'title': "I'm a Title!",
//   'heading': 'Look! I am a Header',
//   'body': 'I have body',
//   'footer': 'FEET'
// }
//
// const html = templateScriptPages(pagesContext)
//
// $('#pages-content').append(html)
