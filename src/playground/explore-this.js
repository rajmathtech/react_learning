const func= function () {
    console.log(this);
}
// reference 
func();// in strict mode, this referrs to undefinde
func.call({});//new empty object
func.bind({a:10})();//object with key a