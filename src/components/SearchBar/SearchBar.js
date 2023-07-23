import styles from './SearchBar.module.css';

import { searchTask} from '../../features/tasks/tasksSlice';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const SearchBar = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) =>{
        setSearchTerm(e.target.value)
      };

    useEffect(() => {
        dispatch(searchTask(searchTerm));
    }, [dispatch, searchTerm]);


    return (
        <>
        <div className="container">
            <form
                className= {styles.searchbar_form}>
                <input 
                    type = "text"
                    placeholder='Search a task'
                    onChange= {handleChange}
                    value = {searchTerm}
                />
                <button
                    type = "button"
                    className= {styles.button}
                    >
                <i class="fa-sharp fa-solid fa-search"></i>
                </button>
            </form>
        </div>
        </>
    )
}

export default SearchBar;