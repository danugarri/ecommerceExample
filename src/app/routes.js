import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import { Cart } from '../components/Cart/Cart';

export const CustomRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' exact element={<App />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  </Router>
);
