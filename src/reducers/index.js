import {
  SETSONGS,
  DELETESONG,
  ADDSONGTOPLAYLIST,
  ADDNEWPLAYLIST,
} from "../actionTypes";

const initialState = {
  playlists: [
    {
      id: 1,
      name: "Playlist 1",
      songs: ["blinding lights", "visiri", "taare ginn"],
      value: false,
    },
    { id: 2, name: "Playlist 2", songs: ["blinding lights"], value: false },
    {
      id: 3,
      name: "Playlist 3",
      songs: ["taare ginn", "Ik vaari aa"],
      value: false,
    },
  ],

  Originalsongs: [
    "blinding lights",
    "visiri",
    "taare gin",
    "Ik vaari aa",
    "Honey Singoo",
    "My Lords King",
  ],

  songs: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SETSONGS:
      const searchvalue = payload;
      let updateProd;
      {
        searchvalue
          ? (updateProd = state.Originalsongs.filter((item) =>
              item.toLowerCase().includes(searchvalue.toLowerCase())
            ))
          : (updateProd = state.Originalsongs);
      }

      return {
        ...state,
        songs: [...updateProd],
      };

    case DELETESONG:
      const valueId = payload.id;
      const ValueSong = payload.song;

      let updatePlaylist = [];
      {
        valueId &&
          ValueSong &&
          state.playlists.forEach((Item) => {
            var UpdatedSongs = [];
            if (Item.id == valueId) {
              Item.songs.forEach((song) => {
                if (song.toLowerCase().includes(ValueSong.toLowerCase())) {
                } else {
                  UpdatedSongs.push(song);
                }
              });
              Item.songs = [...UpdatedSongs];
            }
            updatePlaylist.push(Item);
          });
      }
      console.log(updatePlaylist);
      debugger;
      return {
        ...state,
        playlists: [...updatePlaylist],
      };

    case ADDSONGTOPLAYLIST:
      const PlayListId = payload.id;
      const song = payload.song;
      debugger;

      let updatePlaylist1 = [];
      {
        PlayListId &&
          song &&
          state.playlists.forEach((Item) => {
            if (Item.id == PlayListId) {
              Item.songs.push(song);
            }
            updatePlaylist1.push(Item);
          });
      }

      return {
        ...state,
        playlists: updatePlaylist1.length
          ? [...updatePlaylist1]
          : [...state.playlists],
      };

    case ADDNEWPLAYLIST:
      const PlayListName = payload.playlistname;
      const songName = payload.songname;
      let ID = null;
      let dummyarray = [...state.playlists];
      let x = dummyarray.sort((a, b) => (a.id > b.id ? 1 : -1));
      var c = x.splice(-1);

      console.log(c[0].id);
      ID = c[0].id + 1;
      let updatePlaylist2 = [
        ...state.playlists,
        {
          id: ID,
          name: PlayListName,
          songs: [songName],
          value: false,
        },
      ];
      return {
        ...state,
        playlists: [...updatePlaylist2],
      };

    default:
      return state;
  }
};
