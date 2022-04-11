import './App.css';
import Dialogs from './components/Dialogs/Dialogs.js';
import Header from './components/header/Header.js'; 
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';

function App() {
  return (
    <div className="wrapper">
        <Header />
        <Nav />
        <div className='main-content'>
          {/* <Profile /> */}
          <Dialogs />
        </div>
    </div>
  );
}

export default App;
