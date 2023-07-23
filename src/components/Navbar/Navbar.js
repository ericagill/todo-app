import {Link} from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar () {
    return (
    <nav className= {styles.nav}>
        
        <Link to ="/" className= {styles.title}>All Tasks</Link>
        <ul>
            <li>
                <Link to="/Completed">Completed</Link>
            </li>
        </ul>
    </nav>

    )
}