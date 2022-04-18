
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Navbarr from './components/Navbar/Navbarr';
import CategorysList from './components/Categorys/CategorysList';
import Profil from './components/Profil/Profil';
import ProductsList from './components/Products/ProductsList';
import AddProducts from './components/Products/AddProducts';
// import Cart from './components/Carts/Cart';
import CartScreen from './components/Carts/CartScreen';

function App() {
  return (
    <div className="App">
       <Router>
         <Navbarr/>
         <AddProducts />
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<AddProducts />} /> */}
        <Route path="/products" element={<ProductsList />} />
        <Route path="/categorys" element={<CategorysList/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/cart/:_id" element={<CartScreen />} /> 
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
