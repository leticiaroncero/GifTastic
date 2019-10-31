var topics = ["halloween", "pumpkin", "candy", "ghost"];

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
    // console.log($(this).text())
    var q = $(this).text();
    queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ScYdYSjTsxqB7o2YM5iaWEabmeeUq815&q=" + q + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.data)
        var myGifs = response.data;
        // console.log(myGifs)
        for(var i = 0; i < myGifs.length; i++){
           var stillURL = myGifs[i].images.fixed_height_still.url;
        // console.log(stillURL)
           var gifArea = $("#gif-container");
           var newGif = $("<img src= " + stillURL+ ">");
           gifArea.append(newGif);
        }
    })
})