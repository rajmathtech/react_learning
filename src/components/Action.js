import React from "react";
 const Action = (props) => 
      <div>
        <button
          className="big-button"
          disabled={!props.hasOptions > 0}
          onClick={props.handlePick}
        >
          What Should I Do for You?
        </button>
      </div>
    ;
export default Action;