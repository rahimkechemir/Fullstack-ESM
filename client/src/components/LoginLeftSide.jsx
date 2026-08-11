import React from 'react'

const LoginLeftSide = () => {
  return (
    <div className='hidden md:flex w-1/2 bg-indigo-950 relative overflow-hidden border-r border-slate-200'>

      {/* decorative glow orb */}
      <div className="absolute -top-30 -left-30 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"></div>

      {/* actual content */}
      <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full">
        <h1 className='text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight'>
          employee<br />management system
        </h1>
        <p className='text-slate-400 text-lg max-w-md leading-relaxed'>
          manage payroll, empower your team productivity, track attendance...
        </p>
      </div>

    </div>
  )
}

export default LoginLeftSide