import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages & components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';

const App = () => (
  <div className=" min-h-screen">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />{' '}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
