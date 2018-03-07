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

class Menu extends React.Component {
  clicouAudio(audio) {
    this.props.selectAudio(audio);
    this.props.history.push('/ecouter/'+audio);
  };

  render() {

    const { classes, cdSelected, audiosAvailable} = this.props;
    if (cdSelected === ''){
      return null
    };
    const [ start, end ] = audiosAvailable;
    

    return (
      <div className={classes.root}>
        { cdSelected !== '' ? <div><List
            component="nav"
            subheader={<ListSubheader component="div">Sélectionnez une piste</ListSubheader>}
          >
            {Array.apply(null, Array(end - start + 1)).map((_, i) => {
              const audioId = start + i;
              return <ListItem button onClick={this.clicouAudio.bind(this, audioId)}>
                      <ListItemIcon>
                        <PlayCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText inset primary={"Audio " + audioId}  />
                    </ListItem>
            })}
          </List></div> : null }
        
      </div>
    );
  }
  
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));