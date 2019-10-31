var topics = ["halloween", "pumpkin", "candy", "ghost"];

var buttonContainer = $("#button-container");

for (var i = 0; i < topics.length; i++) {
    var gifButton = $("<button>").text(topics[i]);
    buttonContainer.append(gifButton);
}