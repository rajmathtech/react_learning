import React from 'react';
import ReactDOM from 'react-dom';
const temp = <p>hi there, how are you, excited to you running man!</p>;
const Layout= (props)=>{
    return (
        <div>
        {props.tempProps}
        {props.children}
        </div>
    );
};
//we can pass jsx via props.property and props.children
const tempProps = (<h1> I am the header from children! </h1>);
const tempChild = (<Layout tempProps= {tempProps}>
                        <h1> I am the header from children! </h1>
                  </Layout>);
ReactDOM.render(tempChild, document.getElementById('appRoot'));
