class IndecitionApp extends React.Component {
    constructor(props){
      super(props);
      this.onResetAllHandle=this.onResetAllHandle.bind(this);
      this.handlePick=this.handlePick.bind(this);
      this.onAddedOptionHandle=this.onAddedOptionHandle.bind(this);
      this.state={
        options:['option 1', 'option 2', 'option 3']
      };
    }
    onResetAllHandle(){
      this.setState(()=>{
        return {
          options:[]
        };
      }
    );
    }
    // 
    handlePick() {
        let options = this.state.options;
        let picked = Math.floor(Math.random()*options.length);
        return options[picked]; 
    }
    //
    onAddedOptionHandle(option){
      if (!option) {
        return 'Invalid option'
      } else if ( this.state.options.indexOf(option)> -1) {
        return 'The option already exists!'
      }
      //implicit return is undefined if anything wrong
      this.state.options.push(option);
      this.setState(()=>{
        return {
          options:this.state.options
        };
      });
    }
    //
    expThis(){
      console.log(this);
    }
    // ----------
    render () {
      let title = 'Indecition App';
      let subtitle= 'Put your hands on computer?';
      // let options = ['option one', 'option two', 'option three'];
      return (<div>
        <button onClick={this.expThis.bind(this)}> This key Test! </button>
        <Header title={title} subtitle={subtitle} />
        <Action 
        handlePick={this.handlePick}
        hasOptions={this.state.options.length} />
        <Options 
        hasOptions={this.state.options.length}
        onDelete={this.onResetAllHandle}
        options={this.state.options} />
        <AddOption 
        onAddedOptionHandle={this.onAddedOptionHandle} />
      </div>);
    }
  }
  class Header extends React.Component {
    render () {
      // console.log(this.props);
      return (<div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>);
    }
  }
  class Action extends React.Component { 
    constructor(props){
      super(props);
      this.handlePickMe=this.handlePickMe.bind(this);
      this.state={
        picked:undefined
      };
    }
    handlePickMe(){
      const picked = this.props.handlePick();
      this.setState(() =>{
        return {picked}
      });
    }
    render () {
      return (<div>
        {<p>{this.state.picked}</p>}
        <button disabled={!this.props.hasOptions>0}
        onClick={this.handlePickMe}>What Should I Do for You?</button>
      </div>);
    }
  }
  class Options extends React.Component {
   
    render () {
      return (<div>
        <button disabled={!this.props.hasOptions>0} onClick={this.props.onDelete}> Remove All </button>
        <ol>
        {this.props.options.map(option => <Option key={option} option={option}/>)} 
        </ol>
      </div>);
    }
  }
  class Option extends React.Component {
    render () {
      return (
        <li>{this.props.option}</li>);
    }
  }
  class AddOption extends React.Component {
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
        return {error}
       });
       e.target.elements.option.value='';
        // this.props.options.push(option);
        // console.log(this.props.options);
      // }
    }
    render () {
      return (<div>
        <h1>Add option</h1>
        {this.state.error}
        <form onSubmit={this.onAddOptionHandle}>
          <input name='option' /> 
          <button> Add option </button>
        </form>
      </div>);
    }
  }
  ReactDOM.render(<IndecitionApp />, document.getElementById('appRoot'));