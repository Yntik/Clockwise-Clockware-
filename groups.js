let express = require('express');
let router = express.Router();
let groups = [
    {id: 1, name: "5381", students: 15, rating: 4.7},
    {id: 2, name: "2334", students: 12, rating: 2.1},
    {id: 3, name: "4156", students: 11, rating: 1.1},
    {id: 4, name: "9457", students: 17, rating: 2.1},
    {id: 5, name: "3415", students: 10, rating: 4.3}
];
router.get('/group', (req,res)=> {
    res.json(groups);
});


router.get('/group/:id([0-9]{1,})', (req,res)=> {
    var group = groups.filter((g)=> {
        if(g.id == req.params.id) return true ;
    });
    if (group.length == 1) res.json(group[0]);
    else {
        res.status(404);
        res.json({message: "Not found"});
    }
});
module.exports = router;