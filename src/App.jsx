import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  let [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList,'add');
  };

  const handleRemoveFromWatchList = (movieObj) => {
    let filterWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem('moviesApp',JSON.stringify(filterWatchList));
    setWatchList(filterWatchList);
    console.log(filterWatchList,'remove');
  };

  useEffect(()=>{
    let movieFromLocalStorage = localStorage.getItem('moviesApp');
    if(!movieFromLocalStorage){
      return;
    }
    setWatchList(JSON.parse(movieFromLocalStorage));
  },[])
  
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  watchList={watchList}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList setWatchList={setWatchList} watchList={watchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
