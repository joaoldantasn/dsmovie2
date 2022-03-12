import {ReactComponent as StarFull} from 'assets/img/estrela-cheia.svg';
import {ReactComponent as StarHalf} from 'assets/img/estrela-metade.svg';
import {ReactComponent as StarEmpty} from 'assets/img/estrela-vazia.svg';
import './style.css';

function MovieStars(){
  return(
    <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
  );

}

export default MovieStars;