import { useEffect } from "react";
import { useParams } from "react-router";
import { useBeerStore } from "../../store/useBeerStore";
import "./BeerRecipe.scss";

export const BeerRecipe = () => {
  const { id } = useParams();
  const fetchBeer = useBeerStore((state) => state.fetchBeer);
  const beer = useBeerStore((state) => state.beer);

  useEffect(() => {
    fetchBeer(id);
  }, [fetchBeer, id]);

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <img src={beer.image_url} alt={beer.name} className="recipe-image" />
        <div className="recipe-info">
          <h1 className="recipe-title">{beer.name}</h1>
          <em className="recipe-info-item recipe-tagline">"{beer.tagline}"</em>
          <p className="recipe-info-item recipe-description">{beer.description}</p>
          <p className="recipe-info-item recipe-abv">
            <span className="titles">Alcohol By Volume (ABV):</span> {beer.abv}%</p>
          <p className="recipe-info-item recipe-ibu">
            <span className="titles">International Bitterness Units (IBU):</span> {beer.ibu}
          </p>
          <p className="recipe-info-item recipe-ebc">
            <span className="titles">European Brewery Convention (EBC):</span> {beer.ebc}
          </p>
          <p className="recipe-info-item recipe-brewed">
            <span className="titles">First Brewed:</span> {beer.first_brewed}</p>
          <p className="recipe-info-item recipe-brewers-tips">
            <span className="titles">Brewers Tips:</span> {beer.brewers_tips}
          </p>
        </div>
      </div>
    </div>
  );
};
