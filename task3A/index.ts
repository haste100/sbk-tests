import * as express from 'express';
import * as cors from 'cors';

const app = express();
import * as fetch from 'node-fetch';
import * as url from 'url';

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};

async function fetcher(res){
    pc = await res.json();
    // console.log(pc);
}

fetch(pcUrl)
    .then(fetcher)
    .catch(err => {
        console.log('Что-то пошло не так:', err);
    });

function getValue(obj, words) {
    let result = obj;
    words.forEach(word =>{
        result = result[word];
    });
    return result;
}

function getPCParam(req, res){
    let path =url.parse(req.url).path;
    if (path.length-1 === path.lastIndexOf('/')) {
        path=path.substring(0, path.length-1)
    }
    const words = path.split('/').slice(2);
    const value = getValue(pc, words);
    if (value === undefined){
        value='Not found';
    }
    console.log(path+'='+value);
    res.json(value);
}

app.use(cors());
app.get('/task3A/*', getPCParam);
app.listen(3000, () =>{
    console.log('Example app listening on port 3000');
});
