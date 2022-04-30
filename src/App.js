import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// components
import Footer from './components/Footer.js'
import Navbar from './components/Navbar';

// pages
import  Gallery  from "./pages/Gallery";
import  Login  from "./pages/forms/Login";
import  Signup  from "./pages/forms/Signup"
import Home from "./pages/Home"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route  path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
