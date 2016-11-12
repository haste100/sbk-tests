"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var express = require('express');
var cors = require('cors');
var app = express();
var fetch = require('node-fetch');
var url = require('url');
var pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
var pc = {};
function fetcher(res) {
    return __awaiter(this, void 0, void 0, function* () {
        pc = yield res.json();
        // console.log(pc);
    });
}
fetch(pcUrl)
    .then(fetcher)
    .catch(function (err) {
    console.log('Что-то пошло не так:', err);
});
function getValue(obj, words) {
    var result = obj;
    words.forEach(function (word) {
        result = result[word];
    });
    return result;
}
function getPCParam(req, res) {
    var path = url.parse(req.url).path;
    if (path.length - 1 === path.lastIndexOf('/')) {
        path = path.substring(0, path.length - 1);
    }
    var words = path.split('/').slice(2);
    var value = getValue(pc, words);
    if (value === undefined) {
        value = 'Not found';
    }
    console.log(path + '=' + value);
    res.json(value);
}
app.use(cors());
app.get('/task3A/*', getPCParam);
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
