import React from 'react'

export const TaskTable = ({tasks}) => {
    return (
        <table>
            <tbody>
                {tasks.map(task=>(
                    <tr key={task.tarea}>
                        <td>{task.tarea}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TaskTable
