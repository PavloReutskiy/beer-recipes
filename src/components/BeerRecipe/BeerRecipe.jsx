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
          <p className="recipe-tagline">{beer.tagline}</p>
          <p className="recipe-description">{beer.description}</p>
          <p className="recipe-abv">Alcohol By Volume (ABV): {beer.abv}%</p>
          <p className="recipe-ibu">
            International Bitterness Units (IBU): {beer.ibu}
          </p>
          <p className="recipe-ebc">
            European Brewery Convention (EBC): {beer.ebc}
          </p>
          <p className="recipe-brewed">First Brewed: {beer.first_brewed}</p>
          <p className="recipe-brewers-tips">
            <strong>Brewers Tips:</strong> {beer.brewers_tips}
          </p>
        </div>
      </div>
    </div>
  );
};
