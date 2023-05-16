import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
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
import Loading from './utils/Loading';
import useAuthCheck from './hooks/useAuthChekc';
import PrivetRoutes from './PrivateRoutes/PrivetRoutes';
import { useSelector } from 'react-redux';
import PatientDashboard from './Pages/PatientDashboard/PatientDashboard';
// const LazyLoading = React.lazy(()=>import('./utils/Loading'))
const LazyMain = React.lazy(() => import('./Layout/Main'))


function App() {
  const [category,setCategory] = useState(null)
  const authChek = useAuthCheck()
  const { user } = useSelector((state) => state.userData);
//  console.log(user);
  useEffect(()=>{
     if(user?.email && user?.category){
      setCategory(user?.category)
     }
  },[user?.email,user?.category])

 console.log(category);
  
  return !authChek ? <div>Check authentication ...</div> :
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loading />}>
            <LazyMain />
          </React.Suspense>
        }>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path={`/doctor/profile/:id`} element={<DoctorProfile />} />
          <Route path={`/appoienent/:id`} element={<PrivetRoutes><AppoienmentPage /></PrivetRoutes>} />

        </Route>

        <Route path='/dashboard' element={<PrivetRoutes><Dashboard /></PrivetRoutes>}>
          {
            category === "doctor" ?
            console.log("this is doctor")
              // <Route path='/dashboard' element={<DoctorDashboard />}>
              //   <Route index element={<DashboardData />} />
              //   <Route path='/dashboard/all-appoienments' element={<PrivetRoutes><DoctorAllAppoienments /></PrivetRoutes>} />
              //   <Route path='/dashboard/doc-profile-settings' element={<PrivetRoutes><DoctorProfileSettings /></PrivetRoutes>} />
              //   <Route path='/dashboard/schedule-timings' element={<PrivetRoutes><DoctorScheduleTimings /></PrivetRoutes>} />
              // </Route>
              :
              // <Route path='dashboard'element={<PatientDashboard />}/>
              console.log("this is not a doctor")
      }
        </Route>
      </Routes>

    </BrowserRouter>
}

export default App
