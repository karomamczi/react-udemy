import React, { Component } from 'react';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange('en-us')}
        />
        <i
          className="flag nl"
          onClick={() => this.props.onLanguageChange('nl')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
