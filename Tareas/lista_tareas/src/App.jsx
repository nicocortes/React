import React, { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";

const App = () => {
	let data = JSON.parse(localStorage.getItem("tarea")) || [];
	const [tasks, setTasks] = useState(data);
	const [inputvalue, setInputValue] = useState("");

	useEffect(() => {
		localStorage.setItem("tarea", JSON.stringify(tasks));
	}, [tasks]);

	const change = ({ target }) => {
		setInputValue(target.value);
	};

	const saveTask = (e) => {
		e.preventDefault();
		setTasks([...tasks, { id: tasks.length, tarea: inputvalue }]);
		setInputValue("");
	};

	return (
		<div className="container text-center tabla">
			<div className="row">
				<div className="col p-0">
					<h1>Bienvenido!</h1>
					<h3>Ingresa tus tareas:</h3>
					<form onSubmit={saveTask}>
						<input type="text" value={inputvalue} onChange={change} />
					</form>
					<br />
					<TaskTable tasks={tasks} />
				</div>
			</div>
		</div>
	);
};

export default App;
