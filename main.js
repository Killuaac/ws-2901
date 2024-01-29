// let obj1 = {}
// let obj2 = new Object()
// let key = prompt('Enter key', 'adress')
// const user = {
//     name: "Vasya",
//     age: 15,
//     'like dogs': true,
//     [key+user]: val 
// }
// user.key = 'lololol'
// user.name = 'User1'
// user.surname = 'Lol'
// delete user.age
// console.log(user[key+'_user'])

// function makeUser(name, age){
//     return {name, age}
// }
// let user = makeUser('Vasya', 20)
// console.log('name' in user)

// let user = {
//     name: 'Vasya',
//     age: 15,
//     'real norm boy': true,
//     'is admin': false,

//     say_hello(){
//         console.log('Hello')
//     }
// }
// user.say_hello
// let adress = {
//     'street': 'Shishkino'
// }
// let admin = Object.assign({}, user, adress)

// // for (let key in user){
// //     admin[key] = user[key]
// // }
// admin.name = 'admin'
// admin["is admin"] = true
// console.log(admin)
// console.log(user)

// let user = {
//     name: 'vasya',
//     age: 15,
//     is_admin: false,

//     say_hello(){
//         console.log('Hello,', this.name, this.age + 100)
//     }
// }
// user.say_hello()
// let admin = Object.assign({}, user)
// admin.name = 'admin'
// console.log(admin)
// admin.say_hello()

// let user = {
//     name: 'vasya',
//     age: 15,
//     is_admin: false,

//     say_hello(){
//         console.log('Hello,', this.name, this.age + 100)
//     }
// }

// let arrow = () => {}

// function newUser(name, age){
//     return {name, age}
// }

// function hello(){
//     return (`Hello ${this.name}, ${this.age + 100}`)
// }

// let manager = new newUser('manager', 20)
// manager.is_admin = false
// console.log(manager)
// console.log(manager.hello())

// let user = {
//     name: 'vasya',
//     age: 15,
//     adress: {
//         street: 'Shishkino',
//         house: 15,
//         flat: 10,
//     },
//     // admin(){
//     //     alert('лол')
//     // }
// }

// console.log(user?.adress?.street)   

// let array = []
// let array2 = new Array()

// let array3 = [1, 2, 3, 4, 5]
// console.log(array3[0])
// array3[0] = 100
// console.log(array3[0])
// delete array3[1]
// array3[array3.length] = 500
// array3[array3.length] = 600
// console.log(array3)

// let arr = [1, 2, 3, 'loool', [5, 6, 3], {name: 'lol', age: 15}]
// console.log(arr)

// let arr = [
//     {name: 'Vasya', age: 20},
//     {name: 'admin', age: 20},
//     {name: 'manager', age: 20},
// ]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let item in arr){
//     console.log(item)
// }

// for(let i in arr){
//     console.log(arr[i])
// }

// console.log('added elem:', arr.push(21141412231))
// console.log('shifted elem:', arr.shift())
// console.log('unshifted elem:', arr.unshift(42))
// console.log('deleted elem', arr.pop())
// console.log('left', arr)

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// matrix[1] = 'kflds'
// console.log(matrix[0][2])
// console.log(matrix)
// matrix.splice(matrix.length-2,0, arr)
// console.log(matrix)
// let m = matrix.splice(0)
// console.log(m.contact(arr, lol))

// let arr = [
//     {name: 'Vasya', age: 20},
//     {name: 'admin', age: 20},
//     {name: 'manager', age: 20},
// ]

// arr.forEach(function(elem){
//     console.log(elem)
// })

// let arrow = () => {}

// arr.forEach((elem) => console.log(elem))
// console.log(arr.indexOf.Of(15))

// console.log(arr.includes('age'))

// let el = arr.find(item => item == 15)
// console.log(el)

// let arr = [13, 1, 32, 132]

// let res = arr.map(function(item, index, arr){
//     return item*2
// })
// console.log(res)

// function compareNum(a, b){
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// console.log(arr
//     .sort(compareNum)
//     .reverse()
//     .filter(item => item > 5
//         ))

// let str = 'fldspfs'
// let arr2 = str.split(',')
// console.log(arr.join('!   '))

// let arr = [12, 213, 1233, 12, 2, 1]
// let sum = 0

// let res = arr.reduce((acc, item) => sum+item, 1)
// console.log(res)


{/* <           task 2          > */}

// let arr = ['Привет,', 'мир', '!']
// console.log(arr[0], arr[1], arr[2]);

// let arr = ['Привет,', 'мир', '!'],
//     text = arr[0] + arr[1] + arr[2]
// console.log(text);

// let arr = ['Привет,', 'мир', '!']
// arr[0] = 'Пока,'
// console.log(arr[0], arr[1], arr[2]);

// let obj = {
//     Petia: 500,
//     Kolia: 0
// }
// console.log(Зп Питониста Пети ${obj.Petia}, и зп алди Коли ${obj.Kolia} );

// var arr = {
//     'ru':['голубой', 'крассный ', 'зеленый'],
//     'en':['blue', 'red ', 'green']
// }
// console.log(arr.ru[1]);

// let arr = ['a', 'b', 'c']
// alert(arr)

// console.log(arr[0]+ arr[1]+ arr[2])

// let arr = ['a', 'b', 'c', 'd']
// console.log(arr[0]+arr[1], arr[2]+arr[3]);


// let arr = [2, 5, 3, 9]
//     result = arr[0]*arr[1] + arr[2]*arr[3]
// console.log(result);

// var obj = { a: 1, b: 2, c: 3,}
// console.log(obj['c']);
// console.log(obj.c);

// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(Зп Коли ${obj.Коля}, зп Пети ${obj.Петя});

// let obj = {
//     1:'Понедельник',
//     2:'Вторник',
//     3:'Среда',
//     4:'Четверг',
//     5:'Пятница',
//     6:'Суббота',
//     7:'Воскресенье'
// }
// console.log(obj[1]);

// let obj = {
//     1:'Понедельник',
//     2:'Вторник',
//     3:'Среда',
//     4:'Четверг',
//     5:'Пятница',
//     6:'Суббота',
//     7:'Воскресенье'
// }, day = 3

// console.log(obj[day]);




// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(matrix[1][0])


// let matrix2 = {
//     js:['jQuery', 'Angular'],
//     php: 'hello', css: 'world',
// }

// console.log(matrix2.js[0])


// let calendar = [
//     {en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
//     {ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']},
// ]
// console.log(calendar[0]['en'][2])    
// console.log(calendar[1].ru[0])   

// let calendar = {
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//     ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
// }

// let lang = 'en',
//     day = 1


// console.log(calendar[lang][day]);



{/* <           lesson 2          > */}

// alert(window.innerHeight <= 768)
// console.log(navigator.userAgent)
// document.body.style.backgroundColor = 'red';

// setTimeout(() => document.body.style.backgroundColor = 'yellow', 1000)

// console.log(document.getElementById('lol'))
// console.log(document.body.childNodes)

// for (let i=0; i< document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }

// for (let item of document.body.childNodes){
//     console.log(item)
// }