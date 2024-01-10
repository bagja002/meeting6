import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/navbar'
import Button from './component/button';
import Login from './pages/Login';
import Register from './pages/register';
import Home from './pages/home';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          
          
        </Routes>
      </Router>
    </div>

  );
}

export default App;
