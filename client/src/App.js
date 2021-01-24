
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/screen/Profile'
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom'
import { useEffect, createContext, useReducer, useContext } from 'react'

import Createpost from './components/screen/Createpost';
import { reducer, initialstate } from './userReducer/reducer'

export const Usercontext = createContext()//watch this...(export tis)
const Router = () => {
  const history = useHistory()

  const { state, dispatch } = useContext(Usercontext)


  useEffect(() => {


    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      history.push('/')
      console.log(user)
      dispatch({ type: "USER", payload: user })
    }
    else {
      history.push('/signin')
    }






  }, [])

  return (
    <Switch>
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

    </Switch>

  )




}
function App() {

  const [state, dispatch] = useReducer(reducer, initialstate)
  return (

    <div className="App">
      <Usercontext.Provider value={{ state, dispatch }} >
        <BrowserRouter>
          <Nav />

          <Router />
        </BrowserRouter>
      </Usercontext.Provider>


    </div>
  );
}

export default App;
