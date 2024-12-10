const grandParent = document.querySelector('.Grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


child.addEventListener('click', (e)=>{
    // e.stopPropagation()
    console.log('child div triggered')
})


parent.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('parent div triggered')
})

grandParent.addEventListener('click', (e)=>{
    console.log('grand-parent div triggered')
} )