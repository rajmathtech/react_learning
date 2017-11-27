import React from 'react';
const Option = (props) =>
        <div className="option">
        <p className="option__text">{props.index}. {props.option}</p>
        <button 
        className="small-button small-button--link"
        onClick={
          ()=>{
            props.onRemoveOption(props.option);
          }
        }>Remove</button>
        </div>;
export default Option;