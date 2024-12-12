
// function outerFun(){
//     let money = 150;

//     function innerFun(){
//         money++;
        
//         function innerMostFun(){
//             money++;
//             console.log(money)
//         }

//              return innerMostFun;
    
//     }
//          return innerFun ;
     
// }

// let fun = outerFun();
// let fun1 = fun()

// let fun2 = fun()

// fun1()

// fun1()

// fun1()

// fun2()

// fun2()

// fun1()

// fun1()


  const promise  =   new Promise((resolve) =>{
          
    setTimeout(() =>{
            resolve(1)
    }, 3000)
    
  }) 


  promise.then((result) =>{
       console.log(result)
       return 2
  }).then((result)=>{
      console.log(result)

  })
                 

   

async function call(){
      
}
