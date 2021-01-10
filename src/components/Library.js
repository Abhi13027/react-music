import React from "react";
import LibrarySong from "./LibrarySong";
import "./Library.css";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              isPlaying={isPlaying}
              audioRef={audioRef}
              songs={songs}
              setCurrentSong={setCurrentSong}
              key={song.id}
              song={song}
              id={song.id}
              setSongs={setSongs}
            ></LibrarySong>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
