import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";
export default class IndecitionApp extends React.Component {
  //no need this as using the babel-plugin-transform-class-properties
  state = {
    options: [],
    modalOpenSelected: undefined
  };
  pickedOption = undefined;
  onRemoveOption = optionRemove => {
    this.setState(preState => {
      return {
        options: preState.options.filter(option => {
          // console.log(option);
          return option !== optionRemove;
        })
      };
    });
  };
  componentDidMount() {
    try {
      //if json not valid throw an error
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        //if anything in there, and not empty
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //no need to do anything
      //keep the old options
    }
  }
  //
  onResetAllHandle = () => {
    this.setState(() => ({ options: [] }));
  };
  //
  handlePick = () => {
    let options = this.state.options;
    let picked = Math.floor(Math.random() * options.length);
    this.setState(preState => ({ modalOpenSelected: "open" }));
    this.pickedOption = options[picked];
    // console.log('some value',this.pickedOption);
    // return options[picked];
  };
  //
  onResetHandlePick = () => {
    this.setState(() => ({ modalOpenSelected: undefined }));
  };
  //
  onAddedOptionHandle = option => {
    if (!option) {
      return "Invalid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "The option already exists!";
    }
    //implicit return is undefined if anything wrong
    this.state.options.push(option);
    this.setState(preState => {
      return {
        options: this.state.options
      };
    });
  };
  //
  // expThis = () => {
  //   console.log(this);
  // };
  //

  componentDidUpdate(preProps, preState) {
    if (preState.options.length !== this.state.options.lenghth) {
      //same arry and empty no need to store
      //not sure about updating data
      const options = JSON.stringify(this.state.options);
      //as we can store only strings in local store
      localStorage.setItem("options", options);
    }
  }
  render() {
    let title = "Indecision App changed!";
    let subtitle = "Put your hands on computer?";
    // let options = ['option one', 'option two', 'option three'];
    // <button onClick={this.expThis}> This key Test! </button>
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length}
          />
          <div className="widget">
          <Options
            onRemoveOption={this.onRemoveOption}
            hasOptions={this.state.options.length}
            onDelete={this.onResetAllHandle}
            options={this.state.options}
          />
          <AddOption onAddedOptionHandle={this.onAddedOptionHandle} />
          </div>
        </div>
        <OptionModal
          onResetHandlePick={this.onResetHandlePick}
          pickedOption={this.pickedOption}
          modalOpenSelected={this.state.modalOpenSelected}
        />
      </div>
    );
  }
}
