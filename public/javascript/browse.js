$(function () {
    $(".browse").on("click", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            console.log("browse");


            // Send the GET request.
            $.ajax("/browse", {
            }).then (function(article) {
            console.log("browse completed");
            var textme =  JSON.stringify(article);
            console.log("article " + textme);
            $("#message").text("Browse is Completed");
            // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        })
        }
    );
});




