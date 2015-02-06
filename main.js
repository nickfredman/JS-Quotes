var testQuotes = [
    {quote: "Once a fool, always a fool",
    author: "Some guy"},
    {quote: "An apple a day keeps the doctor away",
    author: "Proverb"},
    {quote: "Looks like someone has a case of the Mondays",
    author: "Dick in Office Space"}
];

var quoteList = [];




$(document).on('ready', function() {

// Functionality to add a quote

  $('.add-quote-button').on('click', function(e) {
    var tempQuote = $('.quote-text').val();
    var tempAuthor = $('.quote-author').val();
    quoteList.push({"quote": tempQuote, "author": tempAuthor, "stars": 0});
    var pQuote = $('<p class="quote-list-text">"' + tempQuote + '"</p>');
    var pAuthor = $('<p class="quote-list-author">- ' + tempAuthor + '</p>');
    var closeButton = $('<button class="rem-quote"> x </button>');

    var starLi1 = ('<li class="star" id="1"></li>');
    var starLi2 = ('<li class="star" id="2"></li>');
    var starLi3 = ('<li class="star" id="3"></li>');
    var starLi4 = ('<li class="star" id="4"></li>');
    var starLi5 = ('<li class="star" id="5"></li>');

    var starDiv = $('<div class="stars"><ul>' + starLi1 + starLi2 + starLi3 + starLi4 + starLi5 + '</ul></div>');

    var thisQuote = $('<div class="live-quote">')
        .append(pQuote)
        .append(pAuthor)
        .append(closeButton)
        .append(starDiv)
        .append('</div>');

    $('.quote-list')
        .append(thisQuote)

    e.preventDefault();

    console.log(quoteList);
  });

  $(document).on('click', '.rem-quote', function() {
    $(this).parent().remove();
  });


//star function needs to know how many stars in were clicked, can you check stars from top or bottom?
//Then it needs to update the total list based on the number of stars
//maybe this can be done with an array of stars...per div? I dunno this is super tough now, not sure how to sort them by this....
//Added items to the object to do this
  $(document).on('click', '.star', function() {
    if($(this).attr("id", "1") {
    }







  });

});