//Import Global Styles
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';

//Router
import { Routes, Route, useLocation } from 'react-router-dom';

// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />} exact />
          <Route path='/work' element={<OurWork />} />
          <Route path='/work/:movieDetail' element={<MovieDetail />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
