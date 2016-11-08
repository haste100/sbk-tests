import * as express from 'express';
import * as cors from 'cors';

const app = express();

function summaNumbers(req, res){
    const a = req.query.a;
    const b = req.query.b;
    console.log(`a=${a} b=${b}`);
    let aNum = +a;
    let bNum = +b;
    if (isNaN(aNum)) {
        aNum = 0;
    }
    if (isNaN(bNum)) {
        bNum=0;
    }
    console.log(`aNum=${aNum} bNum=${bNum}`);
    const sum=aNum+bNum;
    res.send(''+sum);
}
app.use(cors());
app.get('/task2A', summaNumbers);
app.listen(3000, () =>{
    console.log('Example app listening on port 3000');
});
