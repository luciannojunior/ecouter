import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAudio } from '../actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

function Menu(props) {
  const { classes, cdSelected } = props;
  return (
    <div className={classes.root}>
      { cdSelected !== '' ? <div><List
          component="nav"
          subheader={<ListSubheader component="div">Unidade 1</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercício 1" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercício 2" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercício 3" />
          </ListItem>
        </List>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Unidade 1</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercício 1" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercício 2" />
          </ListItem>
          <ListItem button>
          <ListItemIcon>
              <PlayCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercício 3" />
          </ListItem>
        </List>></div> : null }
      
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return {
    cdSelected: state.cds.selectedCd,
    audiosAvailable: state.audios.audiosAvailable,
    audioSelected: state.audios.audioSelected
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectAudio }, dispatch);
}

export default connect(mapStateToProps, null)(withStyles(styles)(Menu));