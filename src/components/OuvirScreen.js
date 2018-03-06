import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function OuvirScreen(props) {
  const { classes } = props;
  const { match: { params: { id }}} = props;
  return (
    <div className={classes.root}>
      {`O id passado foi ${props.match.params.id}`}
    </div>
  );
}
//${props.match.params.id}
OuvirScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OuvirScreen);