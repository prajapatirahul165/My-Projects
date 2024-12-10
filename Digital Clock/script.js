const clock = document.querySelector('.clock')

// let date = new Date();
// console.log(date.toLocaleTimeString())


setInterval(function(){
   let date = new Date();
//    console.log(date.toLocaleTimeString());   
       clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//   function a (){
//     let a = 10;
//     let b = 20;
//     return (a + b)
// }

// console.log(a());



// npx create-react-app       App-name