import styles from '../style';
import { Link } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';

const button2 = () => (
    <ErrorBoundary>
      <Router>
        <div className={`${styles.flexCenter} w-[130px] h-[50px] rounded-[5px] bg-white p-[1px] cursor-pointer` }>
        <div className={`${styles.flexCenter} flex-col bg-black h-[100%] w-[100%] rounded-[5px] justify-center`}>
          <p className='font-poppins font-thin text-[15px] leading-[23px] text-white'>
          <Link to="./About">Contact Us</Link>
          </p>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
)
export default button2