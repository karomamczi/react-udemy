import { Component, createContext } from 'react';

const Context = createContext('en-us');

export class LanguageStore extends Component {
  state = { language: 'en-us' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
