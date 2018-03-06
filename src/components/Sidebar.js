import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline';
import Menu from './Menu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Sidebar extends React.Component {

  state = {cd: ''};

  handleChange = (event) => {
    this.setState({
      cd: event.target.value
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Grid container justify={'center'}>
            <TextField
              id="selecionar-cd"
              select
              label="Selecione o CD"
              className={classes.textField}
              value={this.state.cd}
              onChange={this.handleChange.bind(this)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Por favor, selecione um CD"
              margin="normal"
              >
                {['1', '2', 'Exercícios'].map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        </div>
        <Menu/>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);