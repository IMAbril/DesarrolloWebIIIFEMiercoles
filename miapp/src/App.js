import React,{Component} from 'react'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      newTask:"",
      task: ["Avisar"]
    };
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleTaskChange(evt){
    this.setState({newTask: evt.target.value});
  }
  
  render(){
    return (
      <div className="container bg-dark">
        <div className="row">
          <h1 className="text-center text-white">Hola Mundo!</h1>
          <span></span>
          <div className="d-flex justify-content-center">
            <input onChange={this.handleTaskChange } type="text" className="w-25"></input>
          </div>
          <h2 className="text-white text-center">{this.state.newTask}</h2>
          <ul>
            {this.state.task.map((t, i) => <li className="text-white" key={i}>{t}</li> )}
          </ul>
        </div> 
      </div>
    );
  }
}

export default App;
