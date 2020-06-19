import React from "react";
import { Link } from "react-router-dom";

const ArtistsList = (props) => {
  console.log("Getting in list", props);

  const showlist = ({ artistData }) => {
    if (artistData) {
      console.log("Coming In...");
      return artistData.map((item) => {
        const imagesBg = {
          background: `url('/images/covers/${item.cover}.jpg')
              no-repeat`,
        };
        return (
          <Link
            to={`/artist/${item.id}`}
            key={item.id}
            className="artist_item"
            style={imagesBg}
          >
            <div>{item.name}</div>
          </Link>
        );
      });
    }
  };

  return (
    <div className="artist_list">
      <h4>Browse the Artists</h4>
      {showlist(props)}
    </div>
  );
};

export default ArtistsList;
