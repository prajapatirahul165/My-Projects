
$('.btn').on('click', function(){
    const newItem = $('<div>')
    newItem.attr('class' , 'item')
    console.log(newItem) 

    let str = ` <div class="section-A">
                    <input class="checkbox" type="checkbox">
                  <li class="text">${$('.inp').val()}</li>
                </div>
                <div class="section-B">
                    <span class="up-arrow">🔼</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">🔽</span>
                </div>
                </div>`

         $('.inp').val('')

        newItem.html(str)
        // console.log(newItem)
        $('.task-list').append(newItem)
})


$('.task-list').on('click', function(e){

    const element = $(e.target).attr('class')
    // console.log(element)
    if(element === 'bin'){
     $(e.target).parent().parent().remove()
    }else if(element === 'up-arrow'){
        $(e.target).parent().parent().prev().before($(e.target).parent().parent())
    }else if(element === 'down-arrow'){
        $(e.target).parent().parent().next().after($(e.target).parent().parent())
    }else if(element === 'checkbox'){
       const rah =  $(e.target).next().toggleClass('cchecked')
        console.log(rah)
    }

})

