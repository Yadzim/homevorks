import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/not-found";
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

const App = () => {
  const {pathname} = useLocation();
  return (
    <>
      { pathname !== '/not-found' && <Navbar/> }
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/not-found' component={NotFound}/>
        <Redirect to='/not-found'/>
      </Switch>
    </>
  );
};

export default App;