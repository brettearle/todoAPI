const express = require('express')
const router = express.Router()

//connect and set db
const DB = require('../../db/dbConn')
const db = DB

//routes
router.delete('/:id', async (req,res)=>{
    const id = req.params.id
    await db.collection('todo').doc(id).delete();
    res.send(`${id} deleted`)
})

router.put('/:id', async (req,res)=>{
    const id = req.params.id
    const data = {
        todoItem: req.body.todoItem ,
        completed: req.body.completed,
        todo: req.body.todo,
        todoDoing: req.body.todoDoing, 
    }
    await db.collection('todo').doc(id).set(data);
    res.send(`updated ${id}`)
})

router.get('/', async (req, res)=>{
    const snapshot = await db.collection('todo').get();
    const todos = []
    snapshot.forEach((doc) => {
        let docID = doc.id
        let docData = doc.data()
        let idData = { 
            ID : docID,
            Data : docData,
        }
        todos.push(idData);
    });
    res.json(todos)
})

router.post('/', async (req, res)=>{
    const data = {
        todoItem: req.body.todoItem,
        completed: req.body.completed,
        todo: req.body.todo,
        todoDoing: req.body.todoDoing, 
    }
    console.log(req.body)
    const snapshot = await db.collection('todo').add(data);
    res.send(`${snapshot.id} added`)
})

module.exports = router