// // // class user{
// // //     constructor(username, email, password){
// // //         this.username = username;
// // //         this.email = email;
// // //         this.password = password;
// // //     }

// // //     function(){
// // //         return `${this.password}abc`

// // //     }
// // // }

// // // const chai = new user("chai", "chai1@gmail.com", "123")

// // // console.log(chai.function())
// // console.log(this)

// // function rahul(name, age, username){
// //     this.name = name;
// //     this.age = age;
// //     this.username = username;
// //     console.log(name + age + username)
// //     // console.log(this)
// // }

// //     // const rah = new  rahul("rahul", 18, "rahul@gmail.com")
// //     // console.log(rah)
// //     // const vah = rahul("raman", 20, "raman@gmail.com")
// //     (rahul("rahul", 18, "rahul@gmail.com"))


// // console.log(this)

// function sadmaan(){
//     console.log(this)
// }

// let sd= {
//     name: "rahul",
//     age: "23",
//     fun: function(){
//         console.log(`${this.name} is good boy and age is ${this.age}`)
//     }
// }

// sd.fun()


let arr1 =  [1, 2, 3, 4, 5, 6, 7]
let arr2 =  [12, 23, 45, 56, 67, 78]
let arr3 =  [22, 25, 27, 77, 34]

let newarr = [...arr1, ...arr2, ...arr3]

console.log(newarr)

