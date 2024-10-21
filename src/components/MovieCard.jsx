import React from "react";

const MovieCard = ({
  movieObj,
  poster_path,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchList,
}) => {
  function contains(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (movieObj.id == watchList[i].id) return true;
    }
    return false;
  }

  return (
    <div
      className="bg-cover bg-center h-[40vh] w-[130px] rounded hover:cursor-pointer hover:scale-110 duration-300 relative group"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {contains(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="absolute top-2 right-2 bg-black rounded"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="absolute top-2 right-2 bg-black rounded"
        >
          &#10084;&#65039;
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
