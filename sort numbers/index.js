// const fs = require('fs')
// const path = require('path')

// function getData(filename){
//     return new Promise((resolve, reject)=>{
//         const loc = path.join(__dirname, "data",  filename)
//         fs.readFile(loc, {encoding: 'utf-8'}, (err, data)=>{
//             if(err){
//                 console.log(err)
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getData('file1.txt')
// .then((data)=>{
//     // console.log(data)
//     const arr1 = data.split('\r\n')
//     // console.log(arr1)

//     getData('file2.txt')
//     .then((data)=>{
//         const arr2 = data.split('\r\n')
//         // console.log(arr2)
//         let arr = [...arr1, ...arr2]
//         // console.log(arr)
//         arr.sort((a, b)=>{
//             return a - b
//         })
//         let sorted_array = arr.join('\n')
        
//        const finalPath = path.join(__dirname, 'data', 'output.txt')
//        fs.writeFile(finalPath, sorted_array, (err)=>{
//               if(err){
//                 console.log(err)
//               }
//               else[
//                 console.log('File written Successfully')
//               ]
//        }) 
        
//     })
// })