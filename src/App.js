import './App.css';
import Header from './components/header/Header.js'; 
import Nav from './components/Nav/Nav.js';
import Profile from './components/Profile/Profile.js';

function App() {
  return (
    <div className="Wrapper">
        <Header />
        <Nav />
        <Profile />
    </div>
  );
}

export default App;
