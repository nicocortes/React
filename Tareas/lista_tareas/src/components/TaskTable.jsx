import React from "react";

export const TaskTable = ({ tasks }) => {
	return (
		<table className="m-auto w-100">
			<tbody>
				{tasks.map((task) => (
					<tr className="task-row" key={task.id}>
						<td>{task.tarea}</td>
						<td className="task-button">
							<button className="task-delete">x</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TaskTable;
