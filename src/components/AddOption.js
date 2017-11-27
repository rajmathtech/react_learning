import React from 'react';
export default class AddOption extends React.Component {
    constructor(props){
      super(props);
      this.onAddOptionHandle=this.onAddOptionHandle.bind(this);
      this.state={
        error:undefined
      };
    }
    onAddOptionHandle(e){
      e.preventDefault();
      let option = e.target.elements.option.value.trim();//to get rid of all spece
      //leading and trailling space
      // if (option){
      const error = this.props.onAddedOptionHandle(option);
       this.setState(()=>{
        //  return {error:error} similar
        return {error}
       });
       if (!error){
        e.target.elements.option.value='';
       }
       
        // this.props.options.push(option);
        // console.log(this.props.options);
      // }
    }
    render () {
      return (<div>
        {this.state.error&&<p className="add-option-error">{this.state.error}</p>}
        <form 
          className="add-option"
          onSubmit={this.onAddOptionHandle}>
          <input 
          className="add-option__input"
          name='option' /> 
          <button className="small-button"> Add option </button>
        </form>
      </div>);
    }
  }
