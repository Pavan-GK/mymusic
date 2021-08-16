import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function Playlist({ Playlist }) {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <Link to="/">
        <TreeItem nodeId="1" label="Home"></TreeItem>
      </Link>
      <TreeItem nodeId="1" label="Playlists">
        {Playlist.length &&
          Playlist.map((item) => {
            debugger;
            return (
              <Link to={`/SelectedPlayList/${item.id}`}>
                <TreeItem nodeId={item.id} label={item.name} />
              </Link>
            );
          })}

        {/* <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" /> */}
      </TreeItem>
      {/* <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem> */}
    </TreeView>
  );
}

const mapStateToProps = (store) => ({
  Playlist: store.playlists,
});
export default connect(mapStateToProps, null)(Playlist);
