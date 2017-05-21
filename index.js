const express = require("express");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
const port = process.env.PORT || 8080;
const time = require("moment");

app.get("/:time", (request, response)=> {

    if (isNaN(request.params.time)) {
        let jsDate = new Date(request.params.time);
        let date = time(jsDate).format("MMMM D YYYY");
        response.send({
            "naturalDate": date,
            "unix": +jsDate
        });
    } else {
        response.send({
            "unix": request.params.time,
            "naturalDate": time(parseInt(request.params.time)).format("MMMM D YYYY")
        })
    }
});

app.listen(port, () => console.log(`listening on ${port}`));