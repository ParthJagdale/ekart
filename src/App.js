import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/Home.component';
 
import Navigation from './routes/navigation/Navigation.component';

import Authentication from './routes/Authentication/authentication.component';

import Shop from './routes/Shop/Shop.component';
import Checkout from './routes/checkout/Checkout.component.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}> 
  <Route index element={<Home/>}/> {/**It Tells by default LOad the Home after thr Navigation and do not provide any Path for Home  */}
  <Route path='/shop'  element={<Shop/>}/> 
  <Route path='/auth'  element={<Authentication/>}/>
  <Route path='/checkout' element={<Checkout />} />
 

  {/** NEsted  */}
  </Route>    
     
    </Routes>
  );
};

export default App;