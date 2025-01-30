const fs = require('fs')
const path = require('path')

function getData(fileName){
    return new Promise((resolve, reject)=>{
        const loc = path.join(__dirname,'data', fileName )
        fs.readFile(loc, {encoding: 'utf-8'}, (err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

getData('file1.txt')
.then((data)=>{
    const arr1 = data.split('\r\n')

    getData('file2.txt')
    .then((data)=>{
        const arr2 = data.split('\r\n')

        let arr = [...arr1, ...arr2]
        // console.log(arr)
        arr.sort((a, b)=>{
            return a-b
        })
        // console.log(arr)
        let sorted = arr.join('\n')
        // console.log(sorted)

        const final_path = path.join(__dirname, 'data', 'output.txt')
        fs.writeFile(final_path, sorted, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("File Written Successfully")
            }
        })
    })
})