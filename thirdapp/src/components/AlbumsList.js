import React from "react";

const AlbumsList = (props) => {
  const showList = ({ albumList }) => {
    if (albumList) {
      return albumList.map((data) => {
        return (
          <img key={data.albumId} src={`/images/albums/${data.cover}.jpg`} />
        );
      });
    }
  };

  return <div className="album_list">{showList(props)}</div>;
};

export default AlbumsList;
