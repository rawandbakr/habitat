import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
