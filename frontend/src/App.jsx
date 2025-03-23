import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar flex justify-between items-center p-4 bg-white text-black shadow-md">
        <div>
          <h1 className='' >YTrek</h1>
        </div>

        <div>
          <button className="btn bg-blue-500 py-1 px-3 rounded-[2px] mr-2 cursor-pointer ">Login</button>
          <button className="btn border py-1 px-3 rounded-[2px] cursor-pointer ">Register</button>
        </div>
      </div>

      <section className="space-y-6 text-center mt-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Track Your Learning Progress</h2>
          <p className=" text-gray-500 ">Add YouTube playlists and track your progress through courses</p>
        </div>

        <div>
          <input type="text" className='border border-gray-500 rounded-[2px] py-1 px-29 mr-4' placeholder='Add Youtube Playlist Link Here' />
          <button className="btn bg-blue-500 border border-blue-500 py-1 px-3 rounded-[2px] cursor-pointer ">Add Playlist</button>
        </div>

      </section>
    </>
  )
}

export default App
