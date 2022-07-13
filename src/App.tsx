import {faCircleQuestion,faAddressBook, faCalendarDays, faLemon, faGem } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';
import { AppRoute } from './routes/AppRoute';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <div className='nav-items'><FontAwesomeIcon icon={faLemon} className="icon" /></div>
        <div className='nav-items' id='selected'><FontAwesomeIcon icon={faGem} className="icon" /></div>
        <div className='nav-items'><FontAwesomeIcon icon={faAddressBook} className="icon" /></div>
        <div className='nav-items'><FontAwesomeIcon icon={faCircleQuestion} className="icon" /></div>
      </div>
      <AppRoute />
    </div>
  );
}

export default App;
