const CreateNewPerson = (name, age) => {
    let person = Object.create({});
    person.name = name;
    person.age = age;

    return person;
}

const person1 = CreateNewPerson("Edgar", 28)
const person2 = CreateNewPerson("Diego", 26)

//console.log(person1,person2);

person1.weight = '55kg';
person1.height = '175cm';
person1.gender = 'Male';

for(const key in person1){
    if(key=== 'weight'){
        person1.weight = Number(person1.weight.replace('kg','')) ;
    }
    if(key=== 'height'){
        person1.height = Number(person1.height.replace('cm',''));
    }
}

//console.log(Object.keys(person1))

Object.keys(person1).forEach(key => {
    if(key=== 'height'){
        person1.height = person1.height/100;
    }
})



//person1.name = '';
Object.values(person1).forEach(value => {
    if(value===''){
        console.error('Hay información vacia')
    }
})
/**
 * 
 */
const setID =(obj , str)=>{
    obj[str] = Math.random();

}
setID(person1, 'id')
console.log(person1)


