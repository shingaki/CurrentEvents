$(function () {
    $(".scrape").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("scrape");


        // Send the GET request.
        $.ajax("/scrape", {
        }).then
                console.log("scrape completed");
                $("#message").text("Scrape is Completed");

            }
        );
    });