function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

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

window.processQuote = function(response) {
  console.log(response)
}

function getQuote() {
  var url =
    'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=processQuote'
  var script = document.createElement('script')
  script.setAttribute('src', url)
  document.body.appendChild(script)
}

// function getQuote() {
//   $.ajax({
//     headers: {
//       'X-Mashape-Key': '1x5ZG6L8Z9mshWMZS92wfBuoAKIJp1VBhHqjsnIidiTOyzsKSz',
//       Accept: 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
//     success: function(response) {
//       // console.log(response)
//       // var r = JSON.parse(response);
//       var r = response
//       currentQuote = r.quote
//       currentAuthor = r.author
//       var color = Math.floor(Math.random() * colors.length)
//       var tweetUrl =
//         'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='

//       $('.quote-text').animate(
//         {
//           opacity: 0
//         },
//         500,
//         function() {
//           $(this).animate(
//             {
//               opacity: 1
//             },
//             500
//           )
//           $('#text').text(currentQuote)
//         }
//       )

//       $('.quote-author').animate(
//         {
//           opacity: 0
//         },
//         500,
//         function() {
//           $(this).animate(
//             {
//               opacity: 1
//             },
//             500
//           )
//           $('#author').text(currentAuthor)
//         }
//       )

//       $('html body').animate(
//         {
//           backgroundColor: colors[color],
//           color: colors[color]
//         },
//         1000
//       )
//       $('.button').animate(
//         {
//           backgroundColor: colors[color]
//         },
//         1000
//       )

//       $('#tweet-quote').attr(
//         'href',
//         tweetUrl + '"' + currentQuote + '" - ' + currentAuthor
//       )
//     } //end of success
//   }) //end of ajax
// } //end of getQuote

ready(function() {
  getQuote()

  document.getElementById('new-quote').onclick = function() {
    getQuote()
  }
})
