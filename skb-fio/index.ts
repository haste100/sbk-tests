import * as express from 'express';
import * as cors from 'cors';

const app = express();
const ERROR = 'Invalid fullname';
const WORD_SEPARATOR = ' ';

function defaultView(req, res){
    const fullname = req.query.fullname;
    console.log(`fullname=${fullname}`);
    if (fullname === undefined) {
        res.send(ERROR);
        return false;
    }
    const aName = fullname.split(WORD_SEPARATOR);
    console.log(`aName=${aName}`);
    let result=ERROR;
    if (fullname === '') {
        result=ERROR
    } else if (aName.length === 3) {
        result = `${aName[2]} ${aName[0].substring(0,1)}. ${aName[1].substring(0,1)}.`;
    } else if (aName.length === 2) {
        result = `${aName[1]} ${aName[0].substring(0,1)}.`;
    } else if (aName.length === 1) {
        result = `${aName[0]}`;
    }
    res.send(result);
}

app.use(cors());
app.get('/task2B', defaultView);
app.listen(3000, () =>{
    console.log('Example app listening on port 3000');
});
