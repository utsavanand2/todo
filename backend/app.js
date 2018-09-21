var express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send();
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});