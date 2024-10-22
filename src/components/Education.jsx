
import styles from './ContentPages.module.css';

import logo from '../assets/logo.png';
import horizontal from '../assets/horizontal.png';

function Education() {
  return (
    <>
    <div className={styles.heading}>

      <h1>Education</h1>
      </div>
    <div className={styles.education}>
    
    <img src={logo} className="thumbnail " alt="pirate logo" />
    <img src={horizontal} className="thumbnail" alt="bellevue logo" />
    </div>
    </>
  );
}
export default Education;