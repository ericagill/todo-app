import styles from './AddTaskForm.module.css';
import { nanoid} from '@reduxjs/toolkit';


//hooks
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasks/tasksSlice';

function AddTaskForm (props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('')
   

    const dispatch = useDispatch();

    //set up the change handler functions

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent (e.target.value)
    const onDateChanged = (e) => setDate (e.target.value)

    const onSaveTask = () =>{
        if (title){
            dispatch(
                addTask({
                    id:nanoid(),
                    title,
                    content,
                    by: date,
                    completed:false,
                })
            )
            //to reset the form to initial values
            setTitle('')
            setContent('')
            setDate('')
            //to close the modal window when form is submitted
            props.onClose()
        }
    }

    
    //the parent component controls is the child is visible or not (renders the content or not) with a button in Card.js:

    if (!props.visible){
        return null
    }
    
    return (
        <>   
        <div className= {styles.overlay}>
            <div className={styles.modalContent}> 
                <button 
                    className={styles.button}
                    onClick = {props.onClose}
                >X</button>
                <h2>Add a new task:</h2>
                <form onSubmit= {onSaveTask}>
                    <div className={styles.inputBox}>
                    <label htmlFor='taskTitle'>Title:</label>
                    <input 
                        type ='text'
                        id='taskTitle'
                        name='taskTitle'
                        value = {title}
                        onChange= {onTitleChanged}
                    />
                    </div>
                    <div className={styles.inputBox}>
                    <label htmlFor='taskDate'>Date:</label>
                    <input 
                        type ='date'
                        id='taskDate'
                        name='taskDate'
                        value = {date}
                        onChange= {onDateChanged}
                    />
                    </div>
                    <div className={styles.inputBox}>
                    <label htmlFor='taskContent'>Description (optional):</label>
                    <textarea
                        id='taskContent'
                        name='taskCotent'
                        value = {content}
                        onChange= {onContentChanged}
                    />
                    </div>
                    <button className= {styles.saveButton}
                        type = 'button'
                        onClick = {onSaveTask}
                        >Save</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddTaskForm; 