import './App.css';
import Dialogs from './components/Dialogs/Dialogs.js';
import Header from './components/header/Header.js'; 
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Nav />
        <div className='main-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
