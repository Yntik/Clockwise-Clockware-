let express = require('express');
let router = express.Router();


let masters = [] ;
let city = ['Dnepr', 'Yjgorod'] ;
var id = 0 ;
router.post('/masters', (req, res) => {
    var master = {
        id : ++id ,
        name : req.body.name ,
        surname : req.body.surname ,
        rating : req.body.rating
    };
    if (city.indexOf(req.body.city) != -1) {
        master.city = req.body.city ;
        masters.push(master) ;
        res.json(master) ;
    }
    else {
        res.status(404) ;
        res.json({status:"City not found"}) ;
    }

});

router.post('/city',(req,res) =>{
   let newcity = String(req.body.newcity) ;
   city.push(newcity);
   res.json(city) ;
});

router.get('/city',(req,res) =>{
    res.json(city) ;
});

router.get('/masters', (req, res) => {
    res.json(masters) ;
});

module.exports = router;