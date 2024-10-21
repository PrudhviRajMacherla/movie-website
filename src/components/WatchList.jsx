import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import genreIds from "../utility/genres";

const WatchList = ({ watchList, setWatchList, handleRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleFilter(genre) {
    setCurrGenre(genre);
  }

  function handleSortAscRating() {
    let ascMovieList = watchList.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average;
    });
    setWatchList([...ascMovieList]);
  }

  function handleSortDescRating() {
    let descMovieList = watchList.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average;
    });
    setWatchList([...descMovieList]);
  }

  function handleSortAscPopularity() {
    console.log("inside asc pop");
    let ascMovieList = watchList.sort((movie1, movie2) => {
      return movie1.popularity - movie2.popularity;
    });
    setWatchList([...ascMovieList]);
  }

  function handleSortDescPopularity() {
    console.log("inside desc pop");

    let descMovieList = watchList.sort((movie1, movie2) => {
      return movie2.popularity - movie1.popularity;
    });
    setWatchList([...descMovieList]);
  }

  useEffect(() => {
    const temp = watchList.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    const uniqueGenres = [...new Set(temp)];
    setGenreList(["All Genres", ...uniqueGenres]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center items-center my-2 gap-2">
        {genreList.map((genre, index) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              key={index}
              className={
                currGenre == genre
                  ? "border rounded bg-blue-500 text-white px-4"
                  : "border rounded bg-gray-300 text-white px-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* search bar */}
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search Movies"
          className="bg-gray-300 placeholder-white outline-none h-[1.5rem] w-[10rem] px-4 rounded"
        ></input>
      </div>

      <div className="overflow-hidden  rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border b-2">
            <tr>
              <th>Name</th>
              <th>
                <FontAwesomeIcon
                  onClick={handleSortAscRating}
                  icon={faArrowUp}
                  className="mx-2 cursor-pointer"
                />
                Rating
                <FontAwesomeIcon
                  onClick={handleSortDescRating}
                  icon={faArrowDown}
                  className="mx-2 cursor-pointer"
                />
              </th>
              <th>
                <FontAwesomeIcon
                  onClick={handleSortAscPopularity}
                  icon={faArrowUp}
                  className="mx-2 cursor-pointer"
                />
                Popularity
                <FontAwesomeIcon
                  onClick={handleSortDescPopularity}
                  icon={faArrowDown}
                  className="mx-2 cursor-pointer"
                />
              </th>

              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if(currGenre=='All Genres'){return true;}
              else{
                return genreIds[movieObj.genre_ids[0]]==currGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movie) => {
                return (
                  <tr className="border" key={movie.id}>
                    <td className="flex items-center px-6 py-4 rounded">
                      <img
                        className="w-[4rem] bg-cover bg-center"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <div className="mx-10">{movie.title}</div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genreIds[movie.genre_ids[0]]}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromWatchList(movie)}
                        className="text-red-500 bg-transparent hover:bg-red-500 hover:text-white font-semibold px-2 border border-red-500 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
