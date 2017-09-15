const Handlebars = require('handlebars')
// Retrieve the template data from the HTML .
const template = $('#handlebars-demo').html()

const pagesContext = { 'header': "I'm a Title!", 'body': 'I HAVE BODY' }

// Compile the template data into a function
const templateScript = Handlebars.compile(template)

const html = templateScript(pagesContext)
// html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html)
