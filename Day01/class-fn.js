class Person{
    constructor(){
        this.name = "Vu Khanh Linh";
        this.age = 37;
    }
    getName(){
        return this.name;
    }

    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;

    }
}
var person = new Person();
person.setAge(38);
console.log("Ten nguoi: "+person.getName());
console.log("Tuoi: "+person.getAge());


// student 
class Person{
    constructor(){
        this.name = "Vu Khanh Linh";
        this.age = 37;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;

    }
}
class Student extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId="SV001";
    }
    getStudentInfo(){
        return "Ten: "+this.getName()+"-Tuoi: "+this.getAge()+"- Ma SV: "+this.studentId;
    }
}
var student = new Student();
console.log(student.getStudentInfo());