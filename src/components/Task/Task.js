import styles from './Task.module.css';

import { deleteTask, sortCompleted } from '../../features/tasks/tasksSlice';

import { useDispatch } from 'react-redux';

import { useState } from 'react';

const Task = (props) => {
    const [checked, setChecked] = useState(props.task.completed)

    const dispatch = useDispatch();

    const onDeletedTask = () =>{
        dispatch(deleteTask({
            id:props.task.id})
            )
        }
    
    const handleChecked = () =>{
        setChecked(props.task.completed) 

    }

    const handleCompleted= () => {
        dispatch (
            sortCompleted({
                id: props.task.id,
                }
            ))
    }

    

    return (
        <li 
            key = {props.task.id}
            >
                <div >
                    
                    <label htmlFor='individualTask'></label>  
                        <input 
                            type = 'checkbox'
                            id= 'individualTask'
                            name = 'individualTask'
                            checked = {checked}
                            onClick = {handleCompleted}
                            onChange = {handleChecked}
                    />
                    {props.task.title}            
                    <p>By {props.task.by}</p>
                    <p>{props.task.content.substring(0,100)}</p>
                </div>
                
                <button 
                    className= {styles.deleteButton}
                    onClick = {onDeletedTask}
                    >
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </button>
        </li>
        )
        
    }

export default Task;
