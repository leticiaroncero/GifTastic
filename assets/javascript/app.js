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
    if (gifInput.length !== 0) {
        topics.push(gifInput);
        newButton(gifInput);
        $("#gif-search").val("")
    }
});

function newButton(input) {
    var gifButton = $("<button>")
    gifButton.text(input);
    gifButton.attr("id", input).addClass("gifButton");
    buttonContainer.append(gifButton);
};


$(document).on("click", ".gifButton", function () {
    console.log($(this).text())
})