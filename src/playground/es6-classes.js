class Person {
    constructor(name='Anonymous', age=0){
        this.name=name;
        this.age=age;
    }
    getIntroduced(){
        return `Hi, I am ${this.name}.`;
    }
    getDetails(){
        return `Hi, ${this.name} is ${this.age} year(s) old.`;
    }
}
class Student extends Person {
    constructor(name, age, majore){
        super(name, age);
        this.majore=majore;
    }
    hasMajore(){
        return !!this.majore;//true or false 
    }
    getDetails(){
        let description =super.getDetails();
        if (this.hasMajore()){
            return description+= `he or she is ${this.majore}.`
        } 
        return description;
    }
}
const me = new Person('Raj', 37);
console.log(me.getDetails());
const others = new Person();
console.log(others.getDetails());
//----
const stu1 = new Student('Raj', 37, 'computer science');
console.log(stu1.getDetails());
const stu2 = new Student();
console.log(stu2.getDetails());