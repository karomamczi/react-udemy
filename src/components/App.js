import React from 'react';
import SearchBar from './SearchBar';
import dogCeo from '../api/dogCeo';

class App extends React.Component {
  state = {
    images: [],
    fetchError: '',
  };

  onSearchSubmit = async (term) => {
    try {
      // Uses collection of open source dog pictures from https://dog.ceo/ API.
      const response = await dogCeo.get(`/api/breed/${term}/images`);
      this.setState({ images: response.data.message, fetchError: '' });
    } catch (e) {
      this.setState({ images: [], fetchError: e.message });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
