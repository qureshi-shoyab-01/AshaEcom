import './App.css';
import Home from './Com/Webpage/Home/Home';
import Header from './Com/Webpage/Header/Header'
import { Routes, Route, useLocation } from 'react-router-dom';
import Men from './Com/Webpage/Men/Men'
import Women from './Com/Webpage/Women/Women'
import Checkout from './Com/Webpage/Payments/Checkout';
import Adminpenal from './Com/Admin/AdminPenal/Adminpenal';
import Product from './Com/Admin/Product/Product';
import AddProduct from './Com/Admin/AddProduct/AddProduct';
import UpdateProduct from './Com/Admin/UpdateProduct/UpdateProduct';
function App() {
 const location = useLocation();
 const hideHeader = location.pathname === '/Admin';


  return (
    <div className="App">
      {!hideHeader && <Header />}

     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Checkout' element={<Checkout />}/>
      <Route path='/Admin' element={<Adminpenal />}/>
     </Routes>
     <Routes>
      
      <Route path='/Product' element={<Product />} />
      <Route path='/AddProduct' element={<AddProduct />} />
      <Route path='/UpdateProduct' element={<UpdateProduct />} />
      <Route path='/Users' element={<h2>User Page</h2>} />
     </Routes>
    </div>
  );
}

export default App;