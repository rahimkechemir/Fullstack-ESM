import React from 'react'
import {Toaster} from 'react-hot-toast'
import {Navigate, Route, Routes} from 'react-router-dom'
import Attendance from './pages/Attendance'
import Layout from './pages/Layout'
import Leave from './pages/Leave'
import Login from './pages/LoginLanding'
import Payslips from './pages/Payslips'
import PrintPayslip from './pages/PrintPayslip'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import LoginForm from './components/LoginForm'


const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
       <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Portal" subtitle="Login to access the admin panel"/>}/>
       <Route path='/login/employee' element={<LoginForm role="employee" title="Employee Portal" subtitle="Login to access your employee dashboard"/>}/>
      
      <Route element={<Layout/>}>
      
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/leave' element={<Leave/>}/>
      <Route path='/employees' element={<Employees/>}/>
      <Route path='/payslips' element={<Payslips/>}/>
      
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/attendance' element={<Attendance/>}/>
      </Route>
      <Route path='/print/payslip/:id' element={<PrintPayslip/>}/>
       <Route path='*' element={<Navigate to='/dashboard' replace/>}/>
    </Routes>
    </>

  )
}

export default App
