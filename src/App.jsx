import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Main from './Layout/Main';
import Dashboard from "./Layout/Dashboard"
import Login from './utils/Login';
import Register from './utils/Register';
import Doctors from './Pages/Doctors/Doctors';
import AddDoctor from './Pages/AddDoctor/AddDoctor';
import DoctorDashboard from "./Pages/Dashboard/DoctorDashboard"
import DashboardData from './compontents/DoctorDashboard/DashboardData';
import DoctorAllAppoienments from './Pages/Dashboard/DoctorAllAppoienments';
import DoctorScheduleTimings from './Pages/Dashboard/DoctorScheduleTimings';
import DoctorProfileSettings from './Pages/Dashboard/DoctorProfileSettings';
import DoctorProfile from './Pages/DoctorProfile/DoctorProfile';
import AppoienmentPage from './Pages/Appoientment/AppoienmentPage';
import DoctorLogin from './utils/DoctorLogin';





function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path={`/doctor/profile/:id`} element={<DoctorProfile/>} />
          <Route path={`/appoienent/:id`} element={<AppoienmentPage/>} />
          <Route path={`/doctor/login`} element={<DoctorLogin/>} />
        </Route>
      
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard' element={<DoctorDashboard />}>
            <Route index  element={<DashboardData/>}/>
            <Route path='/dashboard/all-appoienments' element={<DoctorAllAppoienments/>}/>
            <Route path='/dashboard/doc-profile-settings' element={<DoctorProfileSettings/>}/>
            <Route path='/dashboard/schedule-timings' element={<DoctorScheduleTimings/>}/>
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
