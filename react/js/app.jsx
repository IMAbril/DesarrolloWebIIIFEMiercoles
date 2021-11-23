let alumnos = {
    nombre:"Abril",
    edad: "17",
    mostrar: ()=>{
        return `Soy ${alumnos.nombre} y tengo ${alumnos.edad}`
    }
}
let saludo = "Hola, cómo estás?"
ReactDOM.render(
    <div className="row">
        <div className="col-6 bg-primary text-white p-4">
        {alumnos.mostrar()}
        </div>
        
    </div>,
    document.getElementById('root')
)