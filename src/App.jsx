import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GlobeBackground from './components/GlobeBackground'
import Search from './components/Search'
import MovieCard from './components/MovieCard'

const API_BASE_URL='https://api.themoviedb.org/3';
const API_KEY= import.meta.env.VITE_TMDB_API_KEY; // stored api key in the env file(environment variables) 
console.log(API_KEY);
const API_OPTIONS= {
  method:'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [movies, setmovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchmovies=async(query='')=>{
    setisLoading(true);
    setErrorMessage('');
    console.log('fetching the movies...');
    try{
      const endpoint=query?
       `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`: 
       `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`; //-> for displaying all the movies
      console.log(endpoint);
      const response= await fetch(endpoint, API_OPTIONS);
      console.log('Raw response:', response);
     if(!response.ok){
      throw new Error('Failed to fetch movies');

     }


     const data= await response.json();
     console.log(data);
    
    //  if(data.Response=='False'){ // if error occurs while fetching then set the movies array as an empty array and return it
    //   setErrorMessage(data.Error || 'Failed to fetch movies');
    //   setmovies([]);
    //   return;
    //  }
     setmovies(data.results || []);


    }
    catch(error){
      console.log(error);
      setErrorMessage('Error fetching movies. Please try again later');
    }
    finally{
      setisLoading(false);
    }
  }
useEffect(() => {
  fetchmovies(searchTerm);

  
}, [searchTerm]) // fetch the movie for the updated searchTerm

  return (
    <main>
      <div className="pattern">
        <div className="wrapper bg-[url('/BG.png')] bg-cover sm:bg-contain bg-center lg:min-h-screen max-h-screen lg:py-0 py-15 w-full">
          <header className="">
          <img src="./hero-img.png" alt="" className="mx-auto lg:w-auto w-3/4" />
            <h1 className='text-3xl md:text-3xl lg:text-5xl text-center font-bold text-white lg:w-1/2 w-full  mx-auto'> Find <span className="bg-gradient-to-r from-indigo-200 to-purple-400 bg-clip-text text-transparent">Movies</span> You'll Enjoy Without the Hassle
            </h1>
            <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
          </header>
          
        </div>
        <section className='all-movies bg-[#050513] text-white text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold pb-7'>All <span className='bg-gradient-to-r from-indigo-200 to-purple-400 bg-clip-text text-transparent'>Movies</span></h2>
            {isLoading?(<p >Loading...</p>):
            errorMessage?(<p className='text-red-500'>{errorMessage}</p>):
            ( <div className="grid grid-cols-1 md:grid-cols-4 lg:mx-36 mx-20 lg:gap-4 gap-2">
              {movies.map((item)=>(
                // <p key={item.id}>{item.title}</p>
                <MovieCard key={item.id} item={item}/>
              ))}
            </div>)}
          </section>
      </div>
    </main>
  )
}

export default App
