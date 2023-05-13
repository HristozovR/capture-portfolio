//Import Global Styles
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
