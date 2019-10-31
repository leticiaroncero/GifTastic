var topics = ["halloween", "pumpkin", "candy", "ghost"];

var buttonContainer = $("#button-container");


for (var i = 0; i < topics.length; i++) {
    var gifButton = $("<button>").text(topics[i]);
    buttonContainer.append(gifButton)
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
    var gifButton = $("<button>").text(input);
    buttonContainer.append(gifButton);
};


