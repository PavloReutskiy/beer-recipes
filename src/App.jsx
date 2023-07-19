import React from 'react';
import { Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { BeerList } from './components/BeerList';
import { BeerRecipe } from './components/BeerRecipe';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<BeerList />} />
          <Route path="/beers/:id" element={<BeerRecipe />} />
        </Routes>
      </div>
    </div>
  );
};