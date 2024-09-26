class ClassRoom{
  constructor(address,name,students){
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudent){
    this.students.push(newStudent)
  }
  [Symbol.iterator](){
    let index = 0
    return {
      next:()=>{
        if(index < this.students.length){
          return {value:this.students[index++],done:false}
        }else{
          return {value:undefined,done:true}
        }
      },
      return:()=>{
        console.log('提前终止')
        return {value:undefined,done:true}
      }
    }
  }
  // *[Symbol.iterator](){
  //   yield *this.students
  // }
}

const classRoom=new ClassRoom('beijing','class1',['a','b','c'])
classRoom.entry('d')

for(const student of classRoom){
  console.log(student)
  if(student === 'b'){
    break
  }
}
