import './App.css';

// pages

// components
import Banner from "./components/Banner.js"
import ImageList from "./components/ImageList.js";
import Footer from './components/Footer.js'
import { UserContext } from './context/UserContext';



function App() {
  // context
  // const { authIsReady, user } = UserContext()
  return (
    <div className="App">
      <Banner/>
      <ImageList />
      <Footer />
    </div>
  );
}

export default App;
