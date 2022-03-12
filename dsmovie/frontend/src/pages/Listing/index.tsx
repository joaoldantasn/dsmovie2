import MovieScore from "components/MovieScore";
import MovieStars from "components/MovieStars";
import Pagination from  "components/Pagination";

function Listing(){
  return(
    <>
       <Pagination/>
       <MovieStars/>
       <MovieScore/>
    </>
  );
}

export default Listing;