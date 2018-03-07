import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';


const styles = {
  root: {
    flexGrow: 1,
  },
};

function OuvirScreen(props) {
  const { classes, cdSelected, audioSelected } = props;

  const audioUrl = `http://futurama.splab.ufcg.edu.br:8082/${cdSelected}/${audioSelected}`;
  // import wavFile from '../data/audio/1/2.wav';
  return (
    <div className={classes.root}>
      <ReactAudioPlayer
        src={'/data/audio/1/2.wav'}
        autoPlay
        controls
      />
    </div>
  );
}

OuvirScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return {
    cdSelected: state.cds.selectedCd,
    audioSelected: state.audios.audioSelected
  };
};

export default connect(mapStateToProps)(withStyles(styles)(OuvirScreen));