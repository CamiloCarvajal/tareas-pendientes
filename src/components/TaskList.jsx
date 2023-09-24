import React, { useState, useEffect } from "react";


function TaskList() {

    const [task, setTask] = useState([]);

    return (
        <div className="task-box">
            <input
                type="text"
                className="input-task">

            </input>
            <div>
                <button
                    className="complete-task"
                    type="button">
                    Completed
                </button>
                <button
                    className="delete-task"
                    type="button">
                    Eliminar
                </button>
            </div>
        </div>
    );

}

export default TaskList;