//define template: 
const user = {
    title:'My details',
    name: 'Raj',
    address: {street:'5 Kipling place', city:'Stanmore', postcode:'HA7 3NG'}
  };
   var template=
   <div>
   <h1> {user.title} </h1>
   <ol>
       <li>{user.name.toUpperCase()}</li>
       <li>{user.address.street}</li>
       <li>{user.address.city}</li>
   </ol>
   {<h1> {('jsx inside:'+ user.title).toUpperCase()}</h1> }
  </div>;
  //conver using babeljs.io site
  //get element to render
    const appEle = document.getElementById('app');
  //   render
  ReactDOM.render (template, appEle);
  // conditionally displaying items
  const user2 = {
    title:'My details',
    name: 'Raj',
    address: {street:'5 Kipling place', city:'Stanmore', postcode:'HA7 3NG'},
    
    getCondition (stri) {
      const res= (stri === "display" ? true : false);
      return res;
      
    }
  };
  let embed =<div>
  <h1> {user.title} </h1>
  <ol>
      <li>{user.name.toUpperCase()}</li>
      <li>{user.address.street}</li>
      <li>{user.address.city}</li>
  </ol></div>;
  const condTemp =  <div>
  <p>{user2.getCondition('displa') ?  'first part' : embed}</p>
  </div>; 
  //get element to render
  const temp2Ele = document.getElementById('temp2');
  //   render
  ReactDOM.render (condTemp, temp2Ele);