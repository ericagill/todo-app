import { createSlice } from '@reduxjs/toolkit';

const initialState= 
[
    { id: 1, title: 'Learn Redux Toolkit', content: "It is important to know the basis of Redux toolkit ", by: "2023-07-25", completed: false},
    { id: 2, title: 'Learn Slices', content: "Bla bla bla", by: "2023-07-24", completed: false}
]

export const tasksSlice = createSlice({
    name: 'tasks', 
    initialState:{
        allTasks: initialState,
        filteredTasks: initialState
    },
    reducers: {
        addTask: (state, action) => {
            state.allTasks.push(action.payload)
            state.filteredTasks.push(action.payload)
        },
        
        deleteTask : (state, action) => {
            return {
            allTasks:  action.payload ? state.allTasks.filter(item => item.id !== action.payload.id) : [...state.allTasks],

            filteredTasks:  action.payload ? state.filteredTasks.filter(item => item.id !== action.payload.id) : [...state.filteredTasks]
            }
        },

        sortCompleted : (state, action) => {
            //find and return the item selected to access its properties 
            const selectedTask = state.allTasks.find(item => item.id === action.payload.id)

            const selectedTaskView = state.filteredTasks.find(item => item.id === action.payload.id)

            //change its property to completed:
            selectedTask.completed = !selectedTask.completed
            selectedTaskView.completed = !selectedTaskView.completed
        },
        searchTask: (state, action) =>{ 
            //either mutate the existing state, or construct a new state value yourself and return it, but not both in the same function!
            return {
                ...state,
                filteredTasks: [...state.allTasks].filter((task) => task.title.toLowerCase().includes(action.payload.toLowerCase()))
    
            }
            
        }
    }

});

export const selectAllTasks = (state) => state.tasks.allTasks
export const filteredTasks = (state) => state.tasks.filteredTasks

export const { addTask, deleteTask, sortCompleted, searchTask} = tasksSlice.actions;
export default tasksSlice.reducer