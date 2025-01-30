const express = require('express')
const app = express()
const path = require('path')

const Todos = ["Gaming", "Watching Movies", "Coding", "Dancing"]

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.send('Working Fine!!!')
})

app.get('/todos', (req, res)=>[
    res.render('todos', {Todos})
])

app.post('/todos', (req, res)=>{
    const{Todo} = req.body
    Todos.push(Todo)
    res.redirect('/todos')
})

app.listen(5000, (req, res)=>{
    console.log('Server is up to date', 5000)
})