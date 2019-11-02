var topics = ["halloween", "pumpkin", "candy", "ghost", "skeleton", "bat", "mummy", "zombie"];

var buttonContainer = $("#button-container");


for (var i = 0; i < topics.length; i++) {
    var gifButton = $("<button>");
    gifButton.text(topics[i]);
    gifButton.attr("id", topics[i]).addClass("gifButton");
    buttonContainer.append(gifButton);
};


$("#gif-submit").on("click", function (event) {
    event.preventDefault();
    var gifInput = $("#gif-search").val().trim();
    if (gifInput.length !== 0 && !topics.includes(gifInput)) {
        topics.push(gifInput);
        newButton(gifInput);
    }
    $("#gif-search").val("")
});

function newButton(input) {
    var gifButton = $("<button>")
    gifButton.text(input);
    gifButton.attr("id", input).addClass("gifButton");
    buttonContainer.append(gifButton);
};


$(document).on("click", ".gifButton", function () {
    var q = $(this).text();
    queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ScYdYSjTsxqB7o2YM5iaWEabmeeUq815&q=" + q + "&limit=10&rating=pg";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var myGifs = response.data;
        var gifArea = $("#gif-container");
        gifArea.empty();
        for (var i = 0; i < myGifs.length; i++) {
            var stillURL = myGifs[i].images.fixed_height_still.url;
            var animateURL = myGifs[i].images.fixed_height_downsampled.url;
            var rating = myGifs[i].rating;

            var displayRating = $("<div>").text("Rating: " + rating).addClass("rating");
            var newGif = $("<img src= " + stillURL + ">");
            newGif.attr("data-still", stillURL).attr("data-animate", animateURL).attr("data-state", "still");
            newGif.addClass("img");

            var imageBlock = $("<div>").addClass("gif-block").append(newGif).append(displayRating);

            gifArea.append(imageBlock);
        }
    })
})

$(document).on("click", ".img", function (response) {
    var imageClicked = $(this);

    var dataState = imageClicked.attr('data-state');
    var dataStill = imageClicked.attr('data-still');
    var dataAnimate = imageClicked.attr('data-animate');

    if (dataState === "still") {
        imageClicked.attr('data-state', "animate");
        imageClicked.attr("src", dataAnimate);
    } else {
        imageClicked.attr('data-state', "still");
        imageClicked.attr("src", dataStill);
    };
});
