import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  const details = () => {
    return (
      <div>
        <h1>Details for:</h1>
        <p>Title: {selectedSong.title}</p>
        <p>Duration: {selectedSong.duration}</p>
      </div>
    );
  };
  return <div>{selectedSong ? details() : 'Select a song'}</div>;
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
