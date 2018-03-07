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

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCd } from '../actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '20px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

class CDSelector extends React.Component {

  handleChange = (event) => {
    const cd = event.target.value;
    this.props.selectCd(cd);
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
              label="Sélectionnez le CD"
              className={classes.textField}
              value={this.props.cdSelected}
              onChange={this.handleChange.bind(this)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="S'il vout plaît, Sélectionnez le CD"
              margin="normal"
              >
                {this.props.cds.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        </div>
      </div>
    );
  }
}

CDSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return {
    cds: state.cds.cdsAvailable,
    cdSelected: state.cds.selectedCd
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectCd }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CDSelector));