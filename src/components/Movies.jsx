import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({watchList, handleAddToWatchList,handleRemoveFromWatchList }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handlePrev() {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  }

  function handleNext() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=34392903a16c3cda41e744f6bef3d5db&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="font-bold text-xl text-center m-2">Trending Movies</div>
      <div className="flex flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.title}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Movies;
