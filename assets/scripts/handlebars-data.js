// const Handlebars = require('handlebars')
//
// Retrieve the template data from the HTML .
const postTemplate = $('#handlebars-posts').html()
const postsContext = { 'title': "I'm a Title!", 'body': 'I HAVE BODY' }
// Compile the template data into a function
const templateScriptPosts = Handlebars.compile(postTemplate)

const postsHtml = templateScriptPosts(postsContext)

$('#posts-content').append(postsHtml)

// ///////////////////////////

// Retrieve the template data from the HTML .
const pagesTemplate = $('#handlebars-pages').html()
const pagesContext = {
  'title': "I'm a Title!",
  'heading': 'Look! I am a Header',
  'body': 'I have body',
  'footer': 'FEET'
}
// Compile the template data into a function
const templateScriptPages = Handlebars.compile(pagesTemplate)

const html = templateScriptPages(pagesContext)

$('#pages-content').append(html)
