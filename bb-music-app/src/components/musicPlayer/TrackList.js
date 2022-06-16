import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function TrackList() {
  const [Music, setMusic] = useState([], {});
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=5/json")
      .then(data => {
        setMusic(data.data.feed.entry).slice(5);
      })
      .catch(err => console.log(err));
  }, []);

  
  return (
    <div>
      <article className="albums">
        <ul className="album-items">
          {Music.map(Music => {
            const { id, name, label, title, artist, entry } = Music;
            return (
              <div className="album">
                <li className="album-list" key={id.attributes["im:id"]}>
                  <h3 className="title">
                    Album Name: {Music["im:name"].label}
                  </h3>
                  <img
                    src={Music["im:image"][2].label}
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

export default TrackList;

