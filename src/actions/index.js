import {
  SETSONGS,
  DELETESONG,
  ADDSONGTOPLAYLIST,
  ADDNEWPLAYLIST,
} from "../actionTypes";

export const setMySongs = (payload) => ({
  type: SETSONGS,
  payload,
});

export const deleteSong = (payload) => ({
  type: DELETESONG,
  payload,
});

export const AddSongs = (payload) => ({
  type: ADDSONGTOPLAYLIST,
  payload,
});

export const addNewPlayList = (payload) => ({
  type: ADDNEWPLAYLIST,
  payload,
});
