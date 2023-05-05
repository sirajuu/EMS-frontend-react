import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Edit from './Pages/Edit/Edit';
import Profile from './Pages/Profile/Profile';
import Pagenotfound from './Pages/Pnotfound/Pagenotfound';
import Footer from './Components/Footer/Footer'
import Top from './Components/Top/Top';

function App() {
  return (
    <>
      <Top />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Edit/:id' element={<Edit />} />
        <Route path='/Profile/:id' element={<Profile />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
