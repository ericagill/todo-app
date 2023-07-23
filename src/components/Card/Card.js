import styles from './Card.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Task  from '../Task/Task';
import AddTaskForm from '../AddTaskForm/AddTaskForm';

import { filteredTasks } from '../../features/tasks/tasksSlice';



const Card= ()=> {
    const [visible, setVisible] = useState(false);

    const tasks = useSelector(filteredTasks);
    

    const renderedTasks = tasks.map(task => (
        <ul >
            {!task.completed &&
            <Task
               task ={task}/>
            }
        </ul>
    ))

    return (
        <>
        <div className={styles.container}>
            <button className= {styles.addNew}
                onClick ={() => setVisible(true)}
            >Add New</button>

            <AddTaskForm
                visible = {visible}
                onClose= {() => setVisible(false)} 
                /> 

            <section className={styles.taskContainer}>
                {renderedTasks}
            </section>
                
        </div>
        </>
    )
}

export default Card;
