const inp = document.querySelector('#inp')
const button = document.querySelector('#btn')
const list = document.querySelector('#list')

function refreshList(){
    list.innerText = ""
    axios.get('/todos')
    .then((res)=>{
        console.log(res.data) 
        return res.data;
    })
    .then((data)=>{
        for(let todo of data){
            console.log(todo)
            const newTodo = document.createElement('li')
            newTodo.innerText = todo; 
            list.append(newTodo)
        }
    })

} 
refreshList()

button.addEventListener('click', ()=>{
    const todo = inp.value
    console.log(todo)
    inp.value = ""

    axios.post('/todos', {todo})
    .then((res)=>{
        console.log(res)
        refreshList() 
    })
})
