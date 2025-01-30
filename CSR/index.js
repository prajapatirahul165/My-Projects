const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

let Todos = ['Go to Gym', 'Coding', 'Gaming', 'Buy Groceries']

app.get('/', (req, res)=>{
    res.send('Working Fine!!!')
})

app.get('/todos', (req, res)=>{
    res.json(Todos)
})

app.post('/todos', (req, res)=>{
    const {todo} = req.body
    Todos.push(todo)
    res.json({message: "Todo Added Successfully"} )
})



app.listen('5000', (req, res)=>{
    console.log('Server is up to date', 5000)
})