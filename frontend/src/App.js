import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
