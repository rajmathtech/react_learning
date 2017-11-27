class Toggle extends React.Component {
    constructor(props){
      super(props);
      this.toggleHandle = this.toggleHandle.bind(this);
      this.state= {
        display: false
      }
    }
    toggleHandle(){
      this.setState((preState)=> {
        return {
          display: !preState.display
        };
      });
    }
    render(){
      return (
        <div>
        <h1>Welcome to Invisible App</h1>
        <button onClick={this.toggleHandle}>
        {this.state.display ? 'show' : 'hide'}
        </button>
        {!this.state.display&&<p>hi, showing up</p>}
      </div>
      );
    }
  }
  ReactDOM.render(<Toggle />, document.getElementById('appRoot'));