
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Signin'>
          <Signin />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
