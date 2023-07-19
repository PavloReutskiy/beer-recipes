import { create } from "zustand";
import { getBeerRecipes, getBeerRecipe } from "../api/recipes";

export const useBeerStore = create((set, get) => ({
  beers: [],
  displayedBeers: [],
  beer: {},
  activeIds: [],
  currentPage: 1,
  setBeers: (beers) => set({ beers }),
  setDisplayedBeers: (displayedBeers) => set({ displayedBeers }),
  setActiveIds: (activeIds) => set({ activeIds }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setBeer: (beer) => set({ beer }),

  updatedDisplayedBeers: () => {
    set({ displayedBeers: get().beers.slice(0, 15) });
  },

  fetchBeers: async () => {
    try {
      const response = await getBeerRecipes(get().currentPage);
      const fetchedBeers = response.map((beer) => ({ ...beer, active: false }));
      if (response.length > 0) {
        set({ 
          beers: fetchedBeers,
          currentPage: get().currentPage + 1,
        });
      } else {
        set({ beers: [] });
      }
    } catch (error) {
      console.log(error);
    }
  },

  fetchBeer: async (id) => {
    set({ beer: {} });
    try {
      const response = await getBeerRecipe(id);
      set({ beer: response[0] });
    } catch (error) {
      console.log(error);
    }
  },

  toggleBeerActiveStatus: (id) => {
    const beers = get().beers;
    const activeIds = get().activeIds;

    set({
      beers: beers.map((beer) =>
        beer.id === id ? { ...beer, active: !beer.active } : beer
      ),
    });

    if (activeIds.includes(id)) {
      set({ activeIds: activeIds.filter((activeId) => activeId !== id) });
    } else {
      set({ activeIds: [...activeIds, id] });
    }
  },

  deleteActiveBeers: () => {
    const beers = get().beers;
    const activeIds = get().activeIds;

    set({
      beers: beers.filter((beer) => !activeIds.includes(beer.id)),
      activeIds: [],
    });
  },
}));
