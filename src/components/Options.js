import React from 'react';
import Option from './Option'; 
const Options = (props) =>(<div>
  <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button 
      className="small-button small-button--link"
      disabled={!props.hasOptions>0} 
      onClick={props.onDelete}> Remove All </button>
  </div>
      {!props.options.length&&<h1 className="widget__message">Please add an option to get started!</h1>}
      {props.options.map((option, index) => <Option 
        index={index+1}
        key={option} 
        option={option}
        onRemoveOption={props.onRemoveOption}
        />)} 
</div>);
export default Options;