var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
]
var currentQuote = ''
var currentAuthor = ''

function success(response) {
  // console.log('Response', response)
  var r = response
  currentQuote = $(r[0].content).text()
  currentAuthor = r[0].title
  // console.log('Current Quote', currentQuote)
  // console.log('Current Author', currentAuthor)
  var color = Math.floor(Math.random() * colors.length)
  var tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&text='
  $('.quote-text').animate(
    {
      opacity: 0
    },
    500,
    function() {
      $(this).animate(
        {
          opacity: 1
        },
        500
      )
      $('#text').text(currentQuote)
    }
  )
  $('.quote-author').animate(
    {
      opacity: 0
    },
    500,
    function() {
      $(this).animate(
        {
          opacity: 1
        },
        500
      )
      $('#author').text(currentAuthor)
    }
  )
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  )
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  )
  $('#tweet-quote').attr(
    'href',
    tweetUrl + '"' + currentQuote + '" - ' + currentAuthor
  )
}

function getQuote() {
  $.ajax({
    url:
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    dataType: 'jsonp',
    jsonpCallback: 'success'
  })
}

$(document).ready(function() {
  getQuote()

  $('#new-quote').click(function() {
    getQuote()
  })
})
