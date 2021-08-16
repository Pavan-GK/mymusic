import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { AddSongs } from "../../actions";
import CreateNewPlayList from "../CreateNewPlayList";

function AddToPlayList(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setselectedItem] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.addSongToPlayList(selectedItem);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ backgroundColor: " #3f51b5", color: "white" }}
      >
        Add to Playlist
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            width: "200px",
            padding: "20px",
          }}
        >
          {props.playlist.map((item) => {
            return (
              <div>
                <input
                  style={{
                    margin: "5px",
                  }}
                  type="checkBox"
                  onClick={() => {
                    setselectedItem({ id: item.id, song: props.song });
                  }}
                ></input>
                {item.name}
              </div>
            );
          })}
          <div>
            <CreateNewPlayList songname={props.song} />
          </div>
        </div>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (store) => ({
  playlist: store.playlists,
});

const mapDispatchToProps = (dispatch) => ({
  addSongToPlayList: (data) => dispatch(AddSongs(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlayList);
