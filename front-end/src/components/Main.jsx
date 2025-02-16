import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../components/SearchContext";
import ItemList from "./ItemList";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SongList from "./SongList";
const Main = ({ type }) => {
  const { searchTerm } = useContext(SearchContext);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setSelectedArtist(null);
        return;
      }

      setLoading(true);
      fetch("http://localhost:3001/artists")
        .then((response) => response.json())
        .then((results) => {
          const filteredResults = results.filter((artist) =>
            artist.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSelectedArtist(filteredResults.length > 0 ? filteredResults[0] : null);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Ocorreu um erro na requisição à API:", error);
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="playlist-container">
      {selectedArtist ? (
        (() => {

          const foundArtist = artistArray.find(
            (artist) =>
              artist._id === selectedArtist._id)
            || selectedArtist;

          if (!foundArtist) {
            return null
          }

          const songsArrayFromArtist = songsArray.filter(
            (currentSongObj) => currentSongObj.artist === foundArtist.name
          )

          return (
            <div className="artist-columns">
              <div className="artist-info">
                <div className="item-list__container">
                  <SingleItem
                    _id={selectedArtist._id}
                    name={selectedArtist.name}
                    image={selectedArtist.image}
                    banner={selectedArtist.banner}
                    artist={selectedArtist.name}
                    idPath="/artist"
                  />
                </div>
              </div>
              <div className="artist-songs">
                <div className="artist__body">
                  <h2>Músicas de {selectedArtist.name}</h2>
                  <SongList songsArray={songsArrayFromArtist} numberOfItems={3}/>
                </div>
              </div>
            </div>
          );
        })()
      ) : (
        <div id="result-playlists">
          {searchTerm.trim() !== "" && !loading && !selectedArtist && (
            <div className="playlist">
              <h2 className="session">
                Nenhum artista encontrado
              </h2>
            </div>
          )}

          {/* Item List de Artistas */}
          {(type === "artists" || type === undefined) && (
            <ItemList
              title="Artistas"
              items={5}
              itemsArray={artistArray}
              path="/artists"
              idPath="/artist"
            />
          )}

          {/* Item List de Músicas */}
          {(type === "songs" || type === undefined) && (
            <ItemList
              title="Músicas"
              items={5}
              itemsArray={songsArray}
              path="/songs"
              idPath="/song"
            />
          )}
        </div>
      )}

      {loading && <div className="loading">Carregando...</div>}
    </div >
  );
};

export default Main;
