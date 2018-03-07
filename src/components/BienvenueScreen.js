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

function BienvenueScreen(props) {
  const { classes } = props;
  const { match: { params: { id }}} = props;
  return (
    <div className={classes.root}>
      <Typography noWrap>{'Bienvenue! Sélectionnez un CD puis une piste à écouter :)'}</Typography>
    </div>
  );
}

BienvenueScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BienvenueScreen);