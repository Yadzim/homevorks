import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import ProductList from './components/productList';
import Details from './components/details';
import Cart from './components/cart/cart';
import Default from './components/default';
import Modal from './components/modal';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/' component={ProductList}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </>
  );
}

export default App;
