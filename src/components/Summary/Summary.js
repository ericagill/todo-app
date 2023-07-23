import styles from './Summary.module.css'

import { useSelector } from 'react-redux';
import { selectAllTasks} from '../../features/tasks/tasksSlice';

function Summary () {
    const tasks = useSelector(selectAllTasks);

    const completedTask = (array) =>{
            const completedTasks = array.filter(item => item.completed === true);
            return completedTasks.length
        
    }

    const tasksToComplete = (array) =>{
        const tasksToCompl = array.filter(item => item.completed === false);
        return tasksToCompl.length
    }

    return (
        <div className= {styles.summary}>

        {/*well done message if there are no tasks to complete*/}
        
        {tasksToComplete(tasks) ? 
          <p>Tasks to complete: {tasksToComplete(tasks)}</p>
          :
          <p>Well Done!! You are all caught up, today! <i class="fa-sharp fa-solid fa-smile"></i></p>}
        <p>Tasks completed: {completedTask(tasks)} </p>
        </div>
    )
}

export default Summary