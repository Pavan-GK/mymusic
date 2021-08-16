import React from "react";
import { connect } from "react-redux";
import Cards from "../Cards";
import "./index.css";

const Home = ({ musicList, originalSongs }) => {
  const [mySongs, setmySongs] = React.useState([]);

  React.useEffect(() => {
    {
      musicList.length && setmySongs([...musicList]);
    }
    {
      musicList.length == 0 && setmySongs([...originalSongs]);
    }
  }, [musicList]);
  return (
    <div className="arrangeCards">
      {mySongs?.map((item) => (
        <Cards item={item} SongBoolean={true} />
      ))}
    </div>
  );
};

const mapStateToProps = (store) => ({
  musicList: store.songs,
  originalSongs: store.Originalsongs,
});

export default connect(mapStateToProps, null)(Home);
