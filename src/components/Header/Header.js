import styles from './Header.module.css';

//import components
import Summary from '../Summary/Summary';
import SearchBar from '../SearchBar/SearchBar';

function Header() {

    return (
        <>
        <div className= {styles.headerContainer}>
            <div className = {styles.containerFirst}>
                <div className={styles.navBar}></div>
                <h1 className = {styles.title}> Your tasks...</h1>
                
            </div>
            <div className = {styles.containerSecond}>
                <Summary />
                <SearchBar /> 
            </div>
        </div>
        </>
    )
}

export default Header;