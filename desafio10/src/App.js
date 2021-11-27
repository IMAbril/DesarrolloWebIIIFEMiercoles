import logo from './logo.svg';
import './App.css';

function hacerPedido(a){
  alert(`mesa ${a+1} pedida`);
}

function App() {
  let cantMesas = 10;
  let liberada = true;
  let mesasDispo= [];
  for (let i = 0; i < cantMesas; i++) {
    mesasDispo.push(`Mesa ${i + 1} `)
    
  }
  
  return (
    <div className="container">
      <h1 className="text-center">Lo de Pepe</h1>
      <div className="row">
        <div className="col-6">
          {
            mesasDispo.map((e, i) =>{ 
              return <div id={i} className="text-center bg-success text-white" onClick={()=>hacerPedido(i)}>
                 <h3>{e}</h3>
              </div>
            })
          }
        </div>
        <div className="col-6">
          
        </div>
      </div>
    
    </div>
  );
}

export default App;
