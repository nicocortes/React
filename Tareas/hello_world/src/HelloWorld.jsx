import React,{useState} from 'react'

const HelloWorld = ({saludo}) => {
    const [msj, setMsj] = useState(saludo)

    const mostrarMensaje = () => {
        setMsj('(from changed state)')
    } 

    const resetear = () => {
        setMsj(saludo)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <p className='saludo'>Hello {msj}!</p> 
                    <button className='btn btn-secondary' onClick={mostrarMensaje}>Click me</button>
                    <button className='btn btn-secondary ms-3' onClick={resetear}>Reset</button>

                </div>
            </div>
        </div>
    )
}

export default HelloWorld