import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { addNewPlayList } from "../../actions";

function CreateNewPlayList(props) {
  const [open, setOpen] = React.useState(false);
  const [PlayListName, setPlayListName] = React.useState("");
  const [playlistDetails, setplaylistDetails] = React.useState({
    songname: props.songname,
    playlistname: "Test",
  });

  const addPlaylistname = (e) => {
    debugger;
    console.log(e.target.value);
    setPlayListName(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.updatePlaylist(playlistDetails);
    setOpen(false);

    debugger;
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{
          backgroundColor: " #3f51b5",
          color: "white",
          fontSize: "10px",
        }}
      >
        Create New Playlist
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            width: "400px",
            padding: "20px",
          }}
        >
          <input
            onChange={(e) => setPlayListName(e.target.value)}
            type="text"
            value={PlayListName}
          />
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updatePlaylist: (data) => dispatch(addNewPlayList(data)),
});

export default connect(null, mapDispatchToProps)(CreateNewPlayList);
