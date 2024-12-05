const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const tasklist = document.querySelector('.task-list'); 
// console.log(tasklist)

btn.addEventListener('click', (e)=>{
        //   console.log(input.value)
          const newItem = document.createElement('div')
          newItem.setAttribute('class', 'item')

          let str = ` <div class="section-A">
                    <input class="checkbox" type="checkbox">
                  <li class="text">${input.value}</li>
                </div>
                <div class="section-B">
                    <span class="up-arrow">🔼</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">🔽</span>
                </div>`
        newItem.innerHTML = str;
        input.value = ''
        tasklist.append(newItem)

        // console.log(newItem)       
})

tasklist.addEventListener('click', (e)=>{
    const element =  e.target.getAttribute('class')

    if(element === 'bin'){
        const item = e.target.parentElement.parentElement
        item.remove()
    }else if(element === 'up-arrow'){
        const currItem  = e.target.parentElement.parentElement
        const prev = currItem.previousElementSibling
        prev.before(currItem)
    }else if(element === 'down-arrow'){
        const currItem = e.target.parentElement.parentElement
        const next = currItem.nextElementSibling
        next.after(currItem)
    }else if(element === 'checkbox'){
        const textItem = e.target.nextElementSibling
        textItem.classList.toggle('cchecked')
        console.log(textItem)
    }
    
})  