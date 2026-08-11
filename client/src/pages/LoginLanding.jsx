import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginLeftSide from '../components/LoginLeftSide'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      {/* Right side - role selection */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-2xl font-medium text-slate-900 mb-2">
            Welcome back
          </h2>
          <p className="text-slate-500 mb-4">
            Choose how you'd like to sign in
          </p>

          <button
            onClick={() => navigate('/login/admin')}
            className="w-full py-3 rounded-lg bg-indigo-950 text-white font-medium hover:bg-indigo-900 transition-colors"
          >
            Login as Admin
          </button>

          <button
            onClick={() => navigate('/login/employee')}
            className="w-full py-3 rounded-lg bg-indigo-950 text-white font-medium hover:bg-indigo-900 transition-colors"
          >
            Login as Employee
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login