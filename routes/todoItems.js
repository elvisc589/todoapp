const router = require('express').Router();
let todo = require('../models/todoItems');
//import todo model
const todoItemsModel = require('../models/todoItems');

//post data to database
router.post('/api/item', async (req, res)=>{
   try {
        const item = req.body.item
        const newItem = new todo({item}); 
         //save item in database
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);

    } catch(error){
         res.status(400).json('Error: ' + err);   
    }       
});

//get data from database
router.get('/api/items', async (req, res)=>{
    await todo.find({})
    .then(todos=>res.json(todos))
    .catch(err=> res.status(400).json('Error: ' + err));
   });

//update data
router.put('/api/item/:id', async (req, res) =>{
        try{
           const id = req.params.id 
           const updates = req.body
           const result = await todo.findByIdAndUpdate(id, {$set: updates})
        //const updateItem = await todo.findbyIdandUpdate(req.params.id, {$set: req.body});
        res.status(200).json(result);
        }catch(err){
        (err=> res.status(400).json('Error: ' + err));
        }
});

//delete from database
router.delete('/api/item/:id', async (req, res)=>{
try{
        const id = req.params.id
        const deleteItem = await todo.findByIdAndDelete(id);
        res.status(200).json(deleteItem);
}catch(err){
        res.json(err);
}
})
//export router
module.exports = router;
