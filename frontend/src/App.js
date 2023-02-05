import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Studio from "./pages/Studio";
import BlogPost from "./pages/BlogPost";


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/studio' element={<Studio/>}/>
      <Route exact path='blog/:id' element={<BlogPost/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
