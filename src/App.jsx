
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Main from './Layout/Main';
import Login from './utils/Login';
import Register from './utils/Register';
import Doctors from './Pages/Doctors/Doctors';
import AddDoctor from './Pages/AddDoctor/AddDoctor';

function App() {


  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Main />}>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/add-doctor' element={<AddDoctor/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
       </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
