import React,{useState, useEffect} from 'react'
import TaskTable from './components/TaskTable'



const App = () => {
const [tasks, setTasks] = useState([])
const [inputvalue, setInputValue] = useState('') 


useEffect(() => {
  let data = localStorage.getItem('tarea')
  if (data !== null) {
    setTasks(JSON.parse(data))
  } else {
    setTasks([])
  }
}, [])

useEffect(() => {
  localStorage.setItem('tarea', JSON.stringify(tasks))
}, [tasks])


const change = ({target}) =>{
setInputValue(target.value)
}

const saveTask=(e)=>{
e.preventDefault()
setTasks([
  ...tasks,
  {tarea: inputvalue}])
  setInputValue('')
}


  return (
    <div className="container text-center">
        <div className="row">
          <div className="col">
          <h1>Bienvenido!</h1>
      <h3>Ingresa tus tareas:</h3>
      <form onSubmit={saveTask}>
      <input type="text" value={inputvalue} onChange={change}/>
      </form>
      <br />
     <TaskTable tasks={tasks}/>
       
          </div>
        </div>
      </div>
  )
}

export default App



