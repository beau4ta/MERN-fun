import React, { useEffect } from 'react'

function Filter({ setActiveGenre, activeGenre, popular, setFilter }) {

    useEffect(() => {
        if (activeGenre === 0) {
            setFilter(popular)
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFilter(filtered);
    }, [activeGenre])

    return (
        <div className='filter-container'>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(0)}
            >
                All
            </button>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(35)}
            >
                Comedy
            </button>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(28)}
            >
                Action
            </button>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(27)}
            >
                Horror
            </button>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(12)}
            >
                Adventure
            </button>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(99)}
            >
                Documentary
            </button>
            <button
                className={activeGenre === 0 ? 'active' : ''}
                onClick={() => setActiveGenre(9648)}
            >
                Mystery
            </button>
        </div>
    )
}

export default Filter;
