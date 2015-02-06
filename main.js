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
        var willBeAQuote = {"quote": tempQuote, "author": tempAuthor, "stars": 0};        quoteList.push(willBeAQuote);
        var pQuote = $('<p class="quote-list-text">"' + tempQuote + '"</p>');
        var pAuthor = $('<p class="quote-list-author">- ' + tempAuthor + '</p>');
        var closeButton = $('<button class="rem-quote"> x </button>');

        var star = ('<li class="star"></li>');

        var starDiv = $('<div class="stars"><ul>' + star + star + star + star + star + '</ul></div>');

        var thisQuote = $('<div class="live-quote">')
            .append(pQuote)
            .append(pAuthor)
            .append(closeButton)
            .append(starDiv)
            .data('item', willBeAQuote);


        $('.quote-list')
            .append(thisQuote);

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
//


    $(document).on('click', '.star', function() {
        var index = $(this).index();
        $(this).parent().children().removeClass('clicked-star');
        $(this).parent().children(":lt(" + index + ")").addClass('clicked-star');
        $(this).addClass('clicked-star');
        var actualQuote = $(this).closest('.live-quote').data('item');
        actualQuote.stars = index;

    });

    $(document).on('mouseover', '.star', function() {
        var index = $(this).index();
        $(this).parent().children().removeClass('clicked-star');
        $(this).parent().children(":lt(" + index + ")").addClass('clicked-star');
        $(this).addClass('clicked-star');
        console.log(index);
        console.log($(this).parent());
    }).on('mouseout', '.star', function(){
            var actualQuote = $(this).closest('.live-quote').data('item');
            $(this).parent().children().removeClass('clicked-star');
            $(this).parent().children(":lt(" + actualQuote.stars + ")").addClass('clicked-star');
            $(this).addClass('clicked-star');
    };


});