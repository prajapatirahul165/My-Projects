// $('.div').on('click', function(e){
//     console.log(this)
//     $(this).hide()
    
// })

$('p').on('click', function(e){
    //   $(e.target).siblings().show()

    $(e.target).siblings().toggle()
})