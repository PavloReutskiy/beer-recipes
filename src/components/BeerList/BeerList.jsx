import { useEffect, useState } from "react";
import { BeerItem } from "../BeerItem";
import { useBeerStore } from "../../store/useBeerStore";
import "./BeerList.scss";

export const BeerList = () => {
  const beers = useBeerStore((state) => state.beers);
  const displayedBeers = useBeerStore((state) => state.displayedBeers);
  const activeIds = useBeerStore((state) => state.activeIds);
  const currentPage = useBeerStore((state) => state.currentPage);
  const setBeers = useBeerStore((state) => state.setBeers);
  const updatedDisplayedBeers = useBeerStore((state) => state.updatedDisplayedBeers);
  const setActiveIds = useBeerStore((state) => state.setActiveIds);
  const setCurrentPage = useBeerStore((state) => state.setCurrentPage);
  const fetchBeers = useBeerStore((state) => state.fetchBeers);
  const toggleBeerActiveStatus = useBeerStore(
    (state) => state.toggleBeerActiveStatus
  );
  const deleteActiveBeers = useBeerStore((state) => state.deleteActiveBeers);

  useEffect(() => {
    if (beers.length === 0) {
      fetchBeers();
    }
  }, [fetchBeers, beers]);

  useEffect(() => {
    updatedDisplayedBeers();
  }, [updatedDisplayedBeers, beers]);

  const handleRightClick = (event, id) => {
    event.preventDefault();
    toggleBeerActiveStatus(id);
  };

  const hendleDelete = () => {
    deleteActiveBeers();
  };

  return (
    <main className="main">
      <div className="beer-container">
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
          {displayedBeers.map((beer) => (
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
