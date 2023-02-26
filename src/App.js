import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Register from './pages/Register';
 import Login from './pages/Login';
 import LoginLayout from './layouts/LoginLayout';
 import Home from './pages/Home';
 import HomeLayout from './layouts/HomeLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<LoginLayout/>}>
          <Route index element={<Login />} />
          <Route path='/Register' element = {<Register/>}/>
        </Route>
           
        <Route element = {<HomeLayout/>}>
          <Route path='/Home' element = {<Home/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
