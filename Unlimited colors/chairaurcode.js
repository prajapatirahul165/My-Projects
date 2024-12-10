const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i < 6; i++){
        color += hex[(parseInt(Math.random()*16))]
    }
       return color;
}

// console.log(randomColor())
 
 let intervalstop;

document.querySelector('#start').addEventListener('click', function(e){
   intervalstop = setInterval(function(){
        const mybody = document.querySelector('body')
        mybody.style.backgroundColor = randomColor()
    }, 500)
})

document.querySelector('#stop').addEventListener('click',function(e){
    clearInterval(intervalstop)
})

