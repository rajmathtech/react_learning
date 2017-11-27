class Counter extends React.Component {
    constructor(props){
      super(props);
      this.plusHandle=this.plusHandle.bind(this);
      this.minusHandle=this.minusHandle.bind(this);
      this.zeroHandle=this.zeroHandle.bind(this);
      this.state={
        count:0
      }
    }
    componentDidMount(){
      const countStr = localStorage.getItem('count');
      console.log('Did mount');
      if (countStr) {//not null
      const countObj = JSON.parse(countStr);//js object
      const count = parseInt(countObj);
      console.log(count);
      console.log(this.state.count);
      if (count!== this.state.count){
        this.setState(()=> {
          console.log('Did mount');      
            return { count };
          });//called once
      }
    
      }
      
    }
    componentDidUpdate(preProps, preState){
      // if (isNaN(preState.count)){

      // }
      console.log('DidUpdate');
      console.log(this.state.count);
      const count = JSON.stringify(this.state.count);
      localStorage.setItem('count', count);
    }
    plusHandle(){
      this.setState((preState)=>{
        return {
          count: preState.count+1
        }
      });
      // console.log('plus handle');
    }
    minusHandle(){
      this.setState((prvState)=>{
        return {
          count: prvState.count-1
        }
      });
      // console.log('minus handle');
    }
    zeroHandle(){
      this.setState(()=>{
        return {
          count: 0
        }
      });
      // console.log('zero handle');
    }
    render () {
      let title = 'Welcome to Counter App';
      const jsx = (
        <div> 
          <h1> {title} </h1>
          <h3>Count: {this.state.count}</h3>
          <button onClick = {this.plusHandle}>+</button>
          <button onClick = {this.minusHandle}>-</button>
          <button onClick = {this.zeroHandle}>0</button>
        </div>
      );
      return jsx;
    }
  }
  ReactDOM.render(<Counter />, document.getElementById('appRoot'));