import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Register from './pages/Register';
 import Login from './pages/Login';
 import LoginLayout from './layouts/LoginLayout';
 import Test from './pages/Test';
 import TestLayout from './layouts/TestLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<LoginLayout/>}>
          <Route index element={<Login />} />
          <Route path='/Register' element = {<Register/>}/>
        </Route>

        <Route element = {<TestLayout/>}>
          <Route path='/Test' element = {<Test/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
