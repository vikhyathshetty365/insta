
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/screen/Profile'
import { Route, BrowserRouter } from 'react-router-dom'
import Createpost from './components/screen/Createpost';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>

        <Route path='/Signin'>
          <Signin />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/createpost'>
          <Createpost />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
