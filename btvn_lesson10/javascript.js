//  Q1. Create an object called person with name = John, age = 50.Then, access the object to alert("John is 50").
const person1 ={
  name: 'John',
  age: 50
}
alert(`${person1.name} is ${person1.age}`)

// we have a object:
let person={
    name: "Jame",
    age: 19,
    address: "London",

}

// Q2.  add at least one property of the person object.
person.city='Ha Noi';
console.log(person)
// Q3. Please update value of address into "English"
person.address='English'
console.log(person)

// Q4. remove at least one property of the person object.
delete person.city;
// q5 Let's create an object containing the function inside and then call the function via object
const person2={
  fisrtName: 'michael',
  lastName: 'Jackson',
  fullName: function(){
    console.log(this.fisrtName +' '+this.lastName);
  }
}

person2.fullName()
//  we have a object:
const  teacher = {
    firstName : "Nam",
    lastName: "Nguyen",
    subject: ['Math', 'English','Music']
}
// Q6 Use a for of loop and console the value of the subject attribute to the screen.
for(let subject of teacher.subject){
  console.log(subject);
}



//  we have a:
 const arrays = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 22,
      },
      {
        id: 2,
        name: "Nguyễn Lan Anh",
        age: 21,
      },
      {
        id: 3,
        name: "Hồ Văn Trí",
        age: 23,
      },
      {
        id: 4,
        name: "Cao Văn La",
        age: 24,
      },
    ];
    
    // Combine the attributes learned in the previous lesson .
    // Q 7: Add a new user to the beginning of the array (using unshift())
    arrays.unshift({id:0,name: "Dinh Van Tan",age: 25});
    console.log(arrays)

  
   
    // Q8: Add a new user at the end of the array (using push())
    arrays.push({id:5,name:"Tran Thi Tuoi",age:33})
    

    
    // Q9: add multiple users to the array  (using push())
    arrays.push({id:6,name:"Chu Van An",age:32},{id:7,name:"Truong Van Thai",age:45})
    console.log(arrays)


    
    // Q10: remove 1 user from the array (using(pop))
    arrays.pop()
    

    
    // Q11: filter out users with age >= 22;( using(filter())
    function checkAge(info){
        if(info.age>=22){
          return true
        }
      }
    
    console.log(arrays.filter(checkAge))

   
    // extend part:
    // Q12: use for loop to get users with age >= 23
    for(let info of arrays){
      if(info.age>=23){
        console.log(info)
      }
    }
      

    
    // Q13: write an object using setter & getter to add new value and get value. key word (Getter, setter)
    const student = {
      firstName: 'Monica',
      
      set changeName(newName) {
          this.firstName = newName;
      }
  }

  const student1 = {

    firstName: 'Monica',
    get getName() {
        return this.firstName;
    }
}

  

