//Import Global Styles
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

//Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path='/' element={<AboutUs />} exact />
        <Route path='/work' element={<OurWork />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
