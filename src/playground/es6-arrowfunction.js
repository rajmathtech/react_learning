// arguments object - no longer bound with arrow functions
// const add = (a, b) => {
//     // console.log(arguments);
//     return a + b;
//   };
//   console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
//   const user = {
//     name: 'Andrew',
//     cities: ['Philadelphia', 'New York', 'Dublin'],
//     printPlacesLived() {
//       return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
//   };
//   console.log(user.printPlacesLived());
  
//   // Challenge area
  
//   const multiplier = {
//     numbers: [10, 20, 30],
//     multiplyBy: 3,
//     multiply() {
//       return this.numbers.map((number) => number * this.multiplyBy);
//     }
//   };
  
//   console.log(multiplier.multiply());
//------------------------------------------------
// my try for this
// both normal functions:ES5
    // const user= {
    //     name:'raj',
    //     beenCities:['jaffna', 'colombo', 'kandy'],
    //     methodNormal: function (){
    //         this.beenCities.forEach(function (city) {
    //             console.log(this);//-> window is invorking
    //         });
    //         console.log(this);//->points to user
    //     }
    // }
    // user.methodNormal();
// const user= {
// name:'raj',
// beenCities:['jaffna', 'colombo', 'kandy'],
// // methodArrow: 
// arrowNew() {//user
//     // function(){//user
//     // () => { //-> points to window: parant of user 
//         console.log(this);
//         // user.beenCities.forEach(function() and () =>->window both;
//         this.beenCities.forEach(
//             // function() {//window for all
//             () => {//takes as above functions this value
//             console.log('in loop');
//             console.log(this);
//         });
//         // return this; -> points to window: parant
//     },
// };
// // part one
// user.arrowNew();
// user.methodArrow();
//------------------------------------------------------------
// part 2
// const user2= {
//     name:'raj',
//     beenCities:['jaffna', 'colombo', 'kandy'],
//     embedObj: {
//         key:'value', 
//         methodNormal:function() {
//             console.log(this);//->embedObj
//         },
//         methodArrow1:() => {
//             console.log(this);//->window
//         },
//         methodArrow() {
//             console.log(this);//->embedObj
//         }
//     }
// };
// user2.embedObj.methodNormal();
// user2.embedObj.methodArrow1();
// user2.embedObj.methodArrow();
// console.log('---------------');
// function Outer() {
//     console.log(this);//window
//     function Inner() {
//         console.log(this);//window
//     }
//     Inner();
// }
// Outer();
// console.log('---------------');
// function OuterA() {
//     console.log(this);//window
//     () => {
//         console.log(this);
//     }//no use without reference!
//     // InnerA();
// }
// OuterA();
//-------------
// function Apple(val){
//     this.key=val;
// }
// Apple.prototype.eat=function(){
//     console.log(this);
// }
// Apple.prototype.throw=()=>{
//     console.log(this);
// }
// Apple.prototype={
//     eat:function() {
//         console.log(this);
//     },
//     throw:function() {
//         console.log(this);
//     }
// }
// let apple1=new Apple('hi');
// apple1.eat();
// apple1.throw();//parent
//------challange one---------
    // Challenge - Use arrow functions
    // getFirstName('Mike Smith') -> "Mike"
    // Create regular arrow function
    // Create arrow function using shorthand syntax
const fullName = 'Rasadurai Rajavaheinthan';
// function getFirstName(str) {
//     const fName = () => str.split(' ')[0];
//    return  fName();
// }
//implicit return
const getFirstName = (str) => str.split(' ')[0]; 
console.log(getFirstName(fullName));
// challenge two
const object = {
    nums: [2, 4, 6],
    multi:4,
    methodMultiply() {
        //this will referring to the multiplier
        // console.log(this.nums);
        // return this.numbers
        // .map((number) => number * this.multiplyBy); implicit return
        return this.nums.map((num) =>  {
            console.log(num);
            return num * this.multi});
    }
};
console.log(object.methodMultiply());
console.log(object.nums);
// const multiplier = {
//     numbers: [10, 20, 30],
//     multiplyBy: 3,
//     multiply() {
//       return this.numbers.map((number) => number * this.multiplyBy);
//     }
//   };
  
//   console.log(multiplier.multiply());
a={k1:2, k2:4};
b=a;
b.k1=10;
console.log(a.k1);
