import './App.css';

// pages

// components
import Banner from "./components/Banner.js"
import ImageList from "./components/ImageList.js";
import Footer from './components/Footer.js'



function App() {
  return (
    <div className="App">
      <header>
        <Banner/>
      </header>
      <main>
        <ImageList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
