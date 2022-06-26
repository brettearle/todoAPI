const express = require('express')
const app = express()
const env = require('dotenv')
env.config()
const cors = require('cors')
const PORT = process.env.PORT || 8000
const DB = require('./db/dbConn')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router imports
const todoRouter = require('./routers/todo/todoRouter')
const indexRouter = require('./routers/index/indexRouter')
//routes
app.use('/', indexRouter)
app.use('/api/v1/todos', todoRouter)

//listen
app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`)
})