
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
// import AddProducts from './components/Products/AddProducts';
// import Cart from './components/Carts/Cart';
import CartScreen from './components/Carts/CartScreen';
import DetailProduct from './components/Products/DetailProduct';
import CategoryListWomen from './components/Categorys/CategoryListWomen';
import CategoryListMen from './components/Categorys/CategoryListMen';
import CategoryListKids from './components/Categorys/CategoryListKids';
import Newsletter from './components/Newsletter';
import ProductListClothes from './components/Products/ProductWomen/ProductListClothes';
import ProductListShoes from './components/Products/ProductWomen/ProductListShoes';
import ProductListBags from './components/Products/ProductWomen/ProductListBags';
import ProductListMakeUp from './components/Products/ProductWomen/ProductListMakeUp';
import ProductListClothesM from './components/Products/ProductMen/ProductListClothesM';
import ProductListShoesM from './components/Products/ProductMen/ProductListShoesM';
import ProductListClothesK from './components/Products/ProductKids/ProductListClothesK';
import ProductListShoesK from './components/Products/ProductKids/ProductListShoesK';





function App() {
  return (
    <div className="App">
       <Router>
         <Navbarr/>
       
        <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/products" element={<ProductsList />} />
        <Route path="/categorys" element={<CategorysList/>} />

        <Route path="/women" element={<CategoryListWomen/>} />
        <Route path="/clothes" element={<ProductListClothes/>} />
        <Route path="/shoes" element={<ProductListShoes/>} />
        <Route path="/bags" element={<ProductListBags/>} />
        <Route path="/makeup" element={<ProductListMakeUp/>} />


        <Route path="/men" element={<CategoryListMen/>} />
        <Route path="/Men_clothes" element={<ProductListClothesM/>} />
        <Route path="/Men_shoes" element={<ProductListShoesM/>} />

        <Route path="/kids" element={<CategoryListKids/>} />
        <Route path="/kids_clothes" element={<ProductListClothesK/>} />
        <Route path="/kids_shoes" element={<ProductListShoesK />} />

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/detailProduct/:_id" element={<DetailProduct />} />
        <Route path="/cart" element={<CartScreen />} /> 
        
        </Routes>
        <Newsletter/>
      </Router>
    </div>
  );
}

export default App;
