import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
