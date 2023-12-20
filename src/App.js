import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/navbar'
import Button from './component/button';
import Login from './pages/Login';
import Register from './pages/register';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
        </Routes>
      </Router>
    </div>

  );
}

export default App;
