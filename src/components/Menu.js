import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

function Menu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
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
        </List>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);