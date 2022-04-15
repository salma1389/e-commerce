
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Navbarr from './components/Navbar/Navbarr';
import CategorysList from './components/Categorys/CategorysList';
import Profil from './components/Profil/Profil';

function App() {
  return (
    <div className="App">
       <Router>
         <Navbarr/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categorys" element={<CategorysList/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
