import Foods from "./components/foods";
import Navbar from "./components/navbar";
import LogIn from "./components/log-in";
import SignUp from "./components/register";
import AddFood from "./components/add-food";
import NotFound from "./components/not-found";
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

const App = () => {
  const {pathname} = useLocation();
  return (
    <>
      { pathname !== '/not-found' && <Navbar/> }
      <main className='container mt-2'>
        <Switch>
          <Route path='/' exact component={Foods}/>
          <Route path='/log-in' component={LogIn}/>
          <Route path='/register' component={SignUp}/>
          <AddFood path='/add-food' component={AddFood}/>
          <Route path='/not-found' component={NotFound}/>
          <Redirect to='/not-found'/>
        </Switch>
      </main>
    </>
  );
};

export default App;
