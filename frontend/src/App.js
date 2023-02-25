import Navigation from "./components/Navigation";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Studio from "./pages/Studio";
import BlogPost from "./pages/BlogPost";
import Login from "./admin/Login";
import Posts from "./admin/Posts";
import axios from "axios";
import { useState ,useEffect} from "react";

function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user);
      console.log(data.user)
      
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/studio' element={<Studio/>}/>
      <Route exact path='blog/:id' element={<BlogPost/>}/>
      <Route exact path='login' element={<Login/>}/>
      <Route exact path='/posts' element={user ?<Posts user={user} key={user._id}/>: <Navigate to="/login" />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App; 