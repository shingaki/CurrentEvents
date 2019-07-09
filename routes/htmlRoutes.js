app.get("/articles", function(req, res) {
    res.render("articles.handlebars");
});

app.get("/", function(req, res) {
    res.render("index.handlebars.handlebars");
});