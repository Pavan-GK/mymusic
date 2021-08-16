import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Cards from "../Cards";
const SelectedPlayList = ({ PlayLists }) => {
  const [CurrentPlaylist, setCurrentPlaylist] = React.useState({});
  const { id } = useParams();
  return (
    <div>
      {PlayLists.map((item) => {
        if (item.id == id) {
          return (
            <div>
              <h1>{item.name}</h1>
              <div
                style={{
                  display: "flex",
                  //   justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {item.songs.map((item1) => (
                  <Cards item={item1} PlayListBoolean={true} id={id} />
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (store) => ({
  PlayLists: store.playlists,
});

export default connect(mapStateToProps, null)(SelectedPlayList);
