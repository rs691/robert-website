
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
    </div>
    <img src={logo} className="img-thumbnail " alt="pirate logo" />
    <img src={horizontal} className="img-thumbnail" alt="bellevue logo" />
    </>
  );
}
export default Education;