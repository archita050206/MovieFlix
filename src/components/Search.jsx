import React from 'react'

const search = (props) => {
  return (
    <div className="search py-10">
      <div className="flex items-center
       mx-auto w-2/5 bg-[#14143f] h-10 rounded-md shadow-xl">
        <img src="./Vector.png" alt="search" className='size-4 my-1 mx-3'/>
        <input className='h-10 w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent text-purple-100 ' type="text" placeholder="Search through thousands of movies available!" value={props.searchTerm}
        onChange={(e)=>{
          props.setsearchTerm(e.target.value)
        }}/>
      </div>
    </div>
  )
}
// never mutate props and states in child components
//props are read only
export default search
