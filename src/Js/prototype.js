function Person(name='John') {
  this.name = name
}

Person.prototype.say=function(){
  console.log(`Hello my name is ${this.name}`)
}

const person=new Person()
person.say();

console.log(Person.prototype) // Person {}
console.log(Person.prototype.constructor) // true
console.log(Person.prototype.__proto__) // {}
console.log(Person.prototype.__proto__ === Object.prototype) // true
