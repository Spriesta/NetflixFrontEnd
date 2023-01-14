//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DashboardLayout from './layouts/DashboardLayout';
// import Home from './components/Home';
 import Register from './pages/Register';
 import Login from './pages/Login';
 import LoginLayout from './layouts/LoginLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<LoginLayout/>}>
          <Route index element={<Login />} />
          <Route path='/Register' element = {<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   selamlar
    // </div>
  );
}

export default App;
