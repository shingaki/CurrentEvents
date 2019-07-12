$(function () {
    $(".saved").on("click", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            console.log("saved");


            // Send the GET request.
            $.ajax("/saved", {
            }).then (function(article) {
                console.log("saved completed");
                var textme =  JSON.stringify(article);
                console.log("article " + textme);
                $("#message").text("Saved is Completed");
                // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
            })
        }
    );
});




