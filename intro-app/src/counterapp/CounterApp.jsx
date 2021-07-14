import React, {useState}from 'react'

const CounterApp = ({ valor }) => {
    //Estado de componente
    const [counter, setCounter] = useState(valor)

    const incrementar = () => {
        setCounter(counter + 1)
    }

    const decrecrementar = () => {
        setCounter(counter - 1)
    }

    const resetear = () => {
        setCounter(valor)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <hr></hr>
            <h3>Contador: {counter}</h3>
            <button className='btn btn-info mt-3 me-2' onClick = {incrementar}>+1</button>
            <button className='btn btn-info mt-3 me-2' onClick = {resetear}>Reset</button>
            <button className='btn btn-info mt-3' onClick={decrecrementar}>-1</button>
        
        </div>
    )
}

export default CounterApp
