import React from 'react'

const MovieCard = ({item}) => {
  return (
    <div className='bg-[#0f0f2c] p-3 m-3 rounded-md shadow-[0_4px_20px_rgba(200,200,200,0.12)] ring-1 ring-gray-400/10 w-58 min-h-85 hover:scale-105 transition-transform duration-100'>
        <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}`: '/poster_not_available.png'} alt={item.title} className="h-64 mx-auto rounded-md" />
      <div className="mx-3">
        <h3 className='text-lg py-3 text-left'>{item.title}</h3>
        <div className="flex items-center  space-x-2 text-sm">
            <img src="./star.png" alt="" />
            <p>{item.vote_average? item.vote_average.toFixed(1): 'N/A' }</p>
            <span> • </span>
            <p>{item.original_language.charAt(0).toUpperCase()+item.original_language.slice(1)}</p>
            <span> • </span>
            <p>{item.release_date? item.release_date.split('-')[0]: 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
