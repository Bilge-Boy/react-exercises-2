import React, { useState } from 'react';
import './Todo.css';

function Todo() {
	const [value, setValue] = useState('');
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {

		setTasks([...tasks,task]);
		setValue('');
	}
	const onDelete = (index) =>{
		setTasks(tasks.filter((t,i)=> i!==index));
	}
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<input placeholder="Your task..." value={value}  onChange={e=>setValue(e.target.value)}/> <button onClick={()=>addTask(value)}>Add task</button>
			<ul>
				{tasks.length ? tasks.map((task,i) => <li key ={i}>{task} <button onClick={()=> onDelete(i)}>delete</button></li>) : ''}
			</ul>
		</div>
	)
}

export default Todo;
