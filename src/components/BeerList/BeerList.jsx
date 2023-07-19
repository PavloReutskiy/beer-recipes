import { useEffect, useState } from 'react';
import { getBeerRecipes } from '../../api/recipes';
import { BeerItem } from '../BeerItem';
import './BeerList.scss';

export const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [activeIds, setActiveIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getBeerRecipes(currentPage)
      .then((response) => {
        const fetchedBeers = response.map(beer => (
          {...beer, active: false}
        ));
        setBeers(fetchedBeers);
      })
      .catch(error => console.log(error));
  }, [currentPage]);

  const handleRightClick = (event, id) => {
    event.preventDefault();
    setBeers(beers.map(beer => (
      beer.id === id 
        ? {...beer, active: !beer.active} 
        : beer
    )));

    if (activeIds.includes(id)) {
      setActiveIds(activeIds.filter(activeId => activeId !== id))
    } else {
      setActiveIds([...activeIds, id])
    }
  };

  const hendleDelete = () => {
    setBeers(beers.filter(beer => !activeIds.includes(beer.id)));
    setActiveIds([]);
  }

  return (
    <main className="main">
      <div className='beer-container'>
        {activeIds.length > 0 && (
          <button
            type="button"
            className="beer-list__delete"
            aria-label="Delete selected beers"
            onClick={hendleDelete}
          >
            Delete
          </button>
        )}
        <div className="beer-list">

          {beers.map(beer => (
            <BeerItem
              key={beer.id}
              beer={beer}
              onHandleRightClick={handleRightClick}
            />
          ))}
        </div>
      </div>
    </main>
  );
};