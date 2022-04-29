import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import { Gallery } from "./pages/Gallery";
import { Login } from "./pages/forms/Login";
import { Signup } from "./pages/forms/Signup"

// components
import Banner from "./components/Banner.js"
import ImageList from "./components/ImageList.js";
import Footer from './components/Footer.js'



function App() {
  return (
    <div className="App">
      <Banner/>
      <ImageList />
      <Footer />
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <Home/> */}
        </Route>
        <Route exact path="/Gallery">
          <Gallery/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route  path="/Signup">
          <Signup/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
