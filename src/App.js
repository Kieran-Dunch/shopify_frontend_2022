import './App.css';

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
    </div>
  );
}

export default App;
