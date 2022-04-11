
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import Navbarr from './components/Navbarr';

function App() {
  return (
    <div className="App">
       <Router>
         <Navbarr/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
