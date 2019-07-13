
module.exports = function(app) {

    app.get("/browse", function (req, res) {
        res.render("browse.handlebars");
    });

    app.get("/index", function (req, res) {
        res.render("index.handlebars");
    });

    app.get("/", function (req, res) {
        res.render("index.handlebars");
    });

    app.get("/saved", function (req, res) {
        res.render("saved.handlebars");
    });
}