import { Link } from 'react-router-dom';
import './error.css';

export default function NotFound() {
  return (
    <div className='error-container w-full'>
      <div className='background-img'>
        <div className='space'></div>
        <div className='wrapper'>
          <div className='img-wrapper'>
            <span>44</span>
          </div>
          <p>
            The page you are trying to search has been <br /> moved to another
            universe.
          </p>
          <Link to='/'>GET ME HOME</Link>
        </div>
      </div>
    </div>
  );
}
