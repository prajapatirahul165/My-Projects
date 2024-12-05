const Buttons = document.querySelectorAll('button')
// console.log(Buttons)
const screen = document.getElementById('screen')

// for(let buttons of Buttons){
    Buttons.addEventListener('click', (e)=>{
       const buttonText = e.target.innerText

    //    screen.value += buttonText;
       if(buttonText === 'C'){
        screen.value = "";
       }

       else if(buttonText === '='){
        // screen.value = eval(screen.value);
        try{
            screen.value = eval(screen.value);
        }
        catch(error){
            screen.value = "Invalid Operator!";
            // console.log(error) 
        }
       }       
       else{
        screen.value += buttonText;
       } 
                   
    })
// }
   