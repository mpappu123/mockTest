import React from 'react'
import Quiz from './components/Quiz'
function App() {
  return (
    <div className='w-full h-[100vh] flex overflow-auto flex-col'>
      <div className='w-full flex justify-around items-center  bg-blue-900 min-h-16'>
        <h1 className='text-gray-200 text-3xl'>Sagar Computer</h1>
        <a href="http:sagarcomputer.pythonanywhere.com/" rel="sagar computer" className='text-xl text-white'>Home</a>
      </div>
      <Quiz/>
      <div className='w-full flex justify-center items-center min-h-16 bg-gray-900 mt-2'>
        <h1 className='text-gray-300 text-2xl'>© raaz 2024</h1>
      </div>
    </div>
  )
}

export default App
