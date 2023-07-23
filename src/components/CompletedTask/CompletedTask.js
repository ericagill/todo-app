import Task from '../Task/Task';

import styles from './CompletedTask.module.css'

import {  useSelector } from 'react-redux';
import { selectAllTasks } from '../../features/tasks/tasksSlice';
import Summary from '../Summary/Summary';



const CompletedTask = () => {
    
    const tasks = useSelector(selectAllTasks);
    
    const renderedTasks = tasks.map(task => (
        <ul >
            {task.completed &&
            <Task
               task ={task}/>
            }
        </ul>
    ))


    return (
        <>
        <div className={styles.container}>
            <div className= {styles.summaryContainer}>
            <Summary />
            </div>
            <h1>Completed Tasks </h1>

            <section className={styles.taskContainer}>
                {renderedTasks.reverse()}
            </section>
        </div>
        </>
    ) 
}

export default CompletedTask;
