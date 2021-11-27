import React,{Component} from 'react'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      newTask:"",
      tasks: []
    };
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.agregar = this.agregar.bind(this);
  }

  handleTaskChange(evt){
    this.setState({newTask: evt.target.value});
  }
  agregar(evt){
    evt.preventDefault();
    //console.log('Hola');
    let newT = this.state.tasks
    newT.push(this.state.newTask)
    this.setState({newTask:"", tasks: newT})
  }  
  render(){
    return (
      <div className="container bg-dark">
        <div className="row">
          <h1 className="text-center text-white">Hola Mundo!</h1>
          <span></span>
          <div className="d-flex justify-content-center">
            <form className=" d-flex justify-content-center" onSubmit={this.agregar}>
              <input onChange={this.handleTaskChange } type="text" className="w-25"></input>
              <input className="btn btn-primary" type="submit" value="Agregar"></input>
            </form>
          </div>
          <h2 className="text-white text-center ">{this.state.newTask}</h2>
          <ul>
            {this.state.tasks.map((t, i) => <li className="text-black list-group-item list-group-item-light" key={i}>{t}</li> )}
          </ul>
        </div> 
      </div>
    );
  }
}

export default App;
