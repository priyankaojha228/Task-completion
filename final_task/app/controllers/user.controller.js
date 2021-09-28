//const app = express()
const express = require('express')
const router = express.Router()
const UserDetails = require('../models/dat')
const dataRouter = require('../routes/data')
//app.use('/data',dataRouter)
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    console.log("done");
    var res1 = router.get('/api/test/user', async(req,res) =>{
      try{
          const value = await UserDetails.find()
          res.json(value)
   }catch(err){
       res.send('Error ' + err)
   }
  });
    res.status(200).send(res1);
   // res.status(200).send("User Content.");
   // app.use('/data',dataRouter)
  /* router.get('/api/test/user', async(req,res) =>{
    try{
        const value = await UserDetails.find()
        res.json(value)
 }catch(err){
     res.send('Error ' + err)
 }
})
router.get('/api/test/user/:id', async(req,res) =>{
    try{
        const dat = await UserDetails.findById(req.params.id)
        res.json(dat)
 }catch(err){
     res.send('Error ' + err)
 }
})


router.patch('/api/test/user/:id',async(req,res)=> {
    try{
        const dat = await UserDetails.findById(req.params.id) 
        dat.id = req.body.id
        const a1 = await dat.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})



router.post('/api/test/user', async(req,res) => {
    const value = new UserDetails({
        id: req.body.id,
        name: req.body.name,
        company: req.body.company
    })

    try{
        const a1 =  await value.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/api/test/user/:id', async(req, res)=> {
	console.log(req.params.id);
    let id = req.params.id;
	UserDetails.remove({
		_id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Successfully! Deleted.');	
	});
});

module.exports = router*/
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };