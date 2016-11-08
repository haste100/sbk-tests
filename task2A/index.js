"use strict";
var express = require('express');
var cors = require('cors');
var app = express();
function summaNumbers(req, res) {
    var a = req.query.a;
    var b = req.query.b;
    console.log("a=" + a + " b=" + b);
    var aNum = +a;
    var bNum = +b;
    if (isNaN(aNum)) {
        aNum = 0;
    }
    if (isNaN(bNum)) {
        bNum = 0;
    }
    console.log("aNum=" + aNum + " bNum=" + bNum);
    var sum = aNum + bNum;
    res.send('' + sum);
}
app.use(cors());
app.get('/task2A', summaNumbers);
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
