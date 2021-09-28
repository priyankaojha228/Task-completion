const { authJwt } = require("../middlewares");
const express = require('express')
const controller = require("../controllers/user.controller");
const router = express.Router()
const UserDetails = require('../models/dat')
const User = require('../models/user.model')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  //**********************FOR USERS************************

  app.get("/api/test/user", [authJwt.verifyToken], router.get('/api/test/user/:id', async(req,res) =>{
    try{
        const value = await UserDetails.find()
        res.json(value)
 }catch(err){
     res.send('Error ' + err)
 }
}));

app.get("/api/test/user/:id", [authJwt.verifyToken], router.get('/api/test/user/:id', async(req,res) =>{
    try{
        const dat = await UserDetails.findById(req.params.id)
        res.json(dat)
 }catch(err){
     res.send('Error ' + err)
 }
}));


app.post("/api/test/user", [authJwt.verifyToken], router.post('/api/test/user', async(req,res) =>{
    try{
        var query = { username: req.body.username };
       const dat = await UserDetails.find(query);
        res.json(dat)
 }catch(err){
     res.send('Error ' + err)
 }
}));

app.patch("/api/test/user/:id", [authJwt.verifyToken], router.patch('/api/test/user/:id',async(req,res)=> {
    try{
        const dat = await UserDetails.findById(req.params.id) 
        dat.company = req.body.company
        const a1 = await dat.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

}));

app.delete("/api/test/user/:id", [authJwt.verifyToken], router.delete('/api/test/user/:id', async(req, res)=> {
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
}));


app.post("/api/test/user/post",[authJwt.verifyToken], async(req,res)=>{
    const value = new UserDetails({
        username: req.body.username,
        userid: req.body.userid,
        id: req.body.id,
        name: req.body.name,
        company: req.body.company,
        cost: req.body.cost
    })

    try{
        const a1 =  await value.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }

});

//*************************** */ FOR ADMIN (USER PRODUCTS)V***********************************************

app.post("/api/test/admin", [authJwt.verifyToken], router.post('/api/test/admin', async(req,res) =>{
    try{
        var query = { username: req.body.username };
       const dat = await UserDetails.find(query);
        res.json(dat)
 }catch(err){
     res.send('Error ' + err)
 }
}));

app.patch("/api/test/admin/:id", [authJwt.verifyToken], router.patch('/api/test/admin/:id',async(req,res)=> {
    try{
        const dat = await UserDetails.findById(req.params.id) 
        dat.company = req.body.company
        const a1 = await dat.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

}));

app.delete("/api/test/admin/:id", [authJwt.verifyToken], router.delete('/api/test/admin/:id', async(req, res)=> {
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
}));


app.post("/api/test/admin/post",[authJwt.verifyToken], async(req,res)=>{
    const value = new UserDetails({
        username: req.body.username,
        userid: req.body.userid,
        id: req.body.id,
        name: req.body.name,
        company: req.body.company,
        cost: req.body.cost
    })

    try{
        const a1 =  await value.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }

});

//*************************************************FOR ADMIN (USER'S DATABASE)*********************************** */

app.get("/api/test/admin/users", [authJwt.verifyToken], router.get('/api/test/admin/users', async(req,res) =>{
    try{
        const value = await User.find()
        res.json(value)
 }catch(err){
     res.send('Error ' + err)
 }
}));

app.post("/api/test/admin/users",[authJwt.verifyToken], async(req,res)=>{
    const value = new User({
        username: req.body.username,
        userid: req.body.userid,
        email: req.body.email,
        password: req.body.password
       // roles: [{req.body.roles}]
    })

    try{
        const a1 =  await value.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }

});

app.patch("/api/test/admin/users/:id", [authJwt.verifyToken], router.patch('/api/test/admin/users/:id',async(req,res)=> {
    try{
        const dat = await User.findById(req.params.id) 
        dat.email = req.body.email
        const a1 = await dat.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

}));

app.delete("/api/test/admin/users/:id", [authJwt.verifyToken], router.delete('/api/test/admin/users/:id', async(req, res)=> {
	console.log(req.params.id);
    let id = req.params.id;
	User.remove({
		_id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Successfully! Deleted.');	
	});
}));


  /*app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );*/
};

    