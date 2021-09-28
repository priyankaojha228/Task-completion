const express = require('express')
const router = express.Router()
const UserDetails = require('../models/dat')

router.get('/', async(req,res) =>{
    try{
        const value = await UserDetails.find()
        res.json(value)
 }catch(err){
     res.send('Error ' + err)
 }
})
router.get('/:id', async(req,res) =>{
    try{
        const dat = await UserDetails.findById(req.params.id)
        res.json(dat)
 }catch(err){
     res.send('Error ' + err)
 }
})

router.put('/:id', async(req,res) =>{
    const value = Joi.object({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        id: req.body.id
    });
    const {error} = value.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).send ("Todo not found...");
    const {name, age, location, id} = req.body;
    try{
        const updatetodo = await Todo.findByIdAndUpdate(req.params.id, {name, age, location, id}, {new: true} );
    res.send(updatetodo);
    }catch (error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
    
})


router.patch('/:id',async(req,res)=> {
    try{
        const dat = await UserDetails.findById(req.params.id) 
        dat.age = req.body.age
        const a1 = await dat.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})



router.post('/', async(req,res) => {
    const value = new UserDetails({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        id: req.body.id
    })

    try{
        const a1 =  await value.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res)=> {
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

module.exports = router