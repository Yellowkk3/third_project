var express = require('express');
var router = express.Router();
const db = require('../modules/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Car' });
});

router.get('/detail', function(req, res, next){
    res.json({ success: true, cars : [1,2,3,4,5]});
})
router.get('/detail/:id', async function(req,res,next){ //:변수명 밑에서 똑같이 쓸 수 있음
    const id = parseInt(req.params.id, 10); //정수만 받고 싶을떄 
    const s = 'select * from geonho where pk_id =' +id;
    const result = await db.getQueryResult(s);
    res.json(result);
    // res.json({ success: true, car_id : id });
});

router.post('/ddd', function(req,res,next){
    const {p1, p2, p3} =req.body;
    console.log('p1 - '+p1);
    console.log('p2 - '+p2);
    console.log('p3 - '+p3);
    res.json({ success: true, reslut : p1 + p2 + p3}); //post로 p1, p2, p3을 받고 true, reslut를 반환

});
module.exports = router;
