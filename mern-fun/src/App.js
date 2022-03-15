import './App.css';
import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';


function App() {
  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);


  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=19f2e6b52f112a3e330da1fe43fb0f9e&language=en-US&page=1')
    const movies = await data.json();
    setPopular(movies.results)
    setFilter(movies.results)
  }

  return (
    <div className="App">
      <Filter 
        popular={popular}
        setFilter={setFilter}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-movies'>
      <AnimatePresence>
        {filter.map(movie => {
          console.log(movie.title)
          return <Movie key={movie.id} movie={movie}/>
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
