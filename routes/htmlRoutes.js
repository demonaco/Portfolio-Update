var path = require('path');

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index"))
});


app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact"))
});

app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/portfolio"))
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about"))
});

}