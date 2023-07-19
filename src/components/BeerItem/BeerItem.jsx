import { Link } from "react-router-dom";
import cn from 'classnames';
import './BeerItem.scss';

export const BeerItem = ({ beer, onHandleRightClick }) => {
  const formatDate = (dateString) => {
    const [month, year] = dateString.split('/');
    const date = new Date(year, month - 1);
  
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }

  return (
    <Link 
      to={`/beers/${beer.id}`}
      className={cn('beer-item', { 'active': beer.active})}
      onContextMenu={(event) => onHandleRightClick(event, beer.id)}
    >
      <img 
        src={beer.image_url} 
        alt={beer.name} 
        className="beer-item__img"
      />
      <p className="beer-item__name">{beer.name}</p>
      <em className="beer-item__tagline">"{beer.tagline}"</em>
      <p className="beer-item__data">First brewed: {formatDate(beer.first_brewed)}</p>
    </Link>
  );
};