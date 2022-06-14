import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function Search() {
  const [Music, setMusic] = useState([], {});
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=10/json")
      .then(data => {
        setMusic(data.data.feed.entry).slice(5);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = event => {
    console.log(event.target.value);
    setSearch(event.target.value.toLowerCase());
  };

  const filtered = Music.length
    ? Music.filter(
        music =>
          music["im:name"]["label"].toLowerCase().includes(search) ||
          music["im:artist"]["label"].toLowerCase().includes(search)
      )
    : [];

  return (
    <div>
      <input onChange={handleSearch} placeHolder={"search title, artist"} />
      <article className="albums">
        <ul className="album-items">
          {filtered.map(Music => {
            const { id, name, label, title, artist, entry } = Music;
            return (
              <div className="album">
                <li className="album-list" key={id.attributes["im:id"]}>
                  <h3 className="title">
                    Album Name: {Music["im:name"].label}
                  </h3>
                  <img
                    // src={Music["im:image"][2].label}
                    alt={Music["im:name"].label}
                  />
                  <h4 className="title">Artist: {Music["im:artist"].label}</h4>
                </li>
              </div>
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export default Search;
