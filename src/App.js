
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Dashboard from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/netflix' element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
