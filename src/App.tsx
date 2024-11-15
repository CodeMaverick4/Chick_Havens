import './App.css';
import Overview from './component/Dashboard/overview page/Overview';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from './component/Dashboard/products page/Products';
import Orders from './component/Dashboard/order page/Orders';
import Customer from './component/Dashboard/customer/Customer';
import Admin from './component/Dashboard/Admin';
import BrowseProduct from './component/Client/product explorer/BrowseProduct';
import DetailedView from './component/Client/DetailedView';
import Navbar from './component/Client/Navbar';
import Client from './component/Client/Client';
import Account from './component/Client/user profile/Account';
import Profile from './component/Client/user profile/Profile';
import ClientOrders from './component/Client/user profile/Orders';
import WishList from './component/Client/user profile/WishList';


const App: React.FC =()=> {

  return (    
    <Router>
      {/* <div className='relative bg-[#E5E5E5] font-mono '>         */}
        <Routes>
          {/* Client routes */}          
          <Route path="" element={<Client />} >          
            {/* <Route index element={<LandingPage />} />           */}
            {/* <Route index element={<BrowseProduct />} />     */}
            <Route index element={<BrowseProduct />} />    
            <Route path="shop/detail" element={<DetailedView />} />    
            <Route path="/account" element={<Account />} >
              <Route path='profile' element={<Profile />} />
              <Route path='orders' element={<ClientOrders />} />
              <Route path='wishlist' element={<WishList />} />
            </Route>     
          </Route>

          {/* Admin routes  */}
          <Route path="/admin" element={<Admin />} >
            <Route path="overview" element={<Overview />} />          
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customer />} />
          </Route>
        </Routes>
        
      {/* </div> */}
    </Router>
    
  );
}

export default App;
