import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Pages
import Home from './pages/Home';
import BookCategory from './pages/BookCategory';
import Trending from './pages/Trending';
import Contact from './pages/Contact';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Genre from './components/Genre';
import AudioBooks from './pages/AudioBooks';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<BookCategory />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/contact" element={<Contact />} />       
            <Route path="/audiobooks" element={ <AudioBooks/>} />       

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;