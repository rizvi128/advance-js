const students = [
    {id:21, name: 'sakil'},
    {id:22, name: 'sakili'},
    {id:23, name: 'sakila'},
    {id:21, name: 'sakilb'}
]
// const name =[]

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const sName = element.name
    
//     name.push(sName);

// }
// console.log(name);

const names = students.map(s => s.name)
const ids = students.map(s => s.id)
const bigger =  students.filter(s => s.id > 21)
const bigger1 = students.find(s => s.id > 21)
console.log(bigger1);