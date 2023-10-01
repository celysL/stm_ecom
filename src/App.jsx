import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* maybe the routes will have an error */}
      <Route path='/' element = {<home/>}></Route>
      <Route path='/register' element = {<register/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
