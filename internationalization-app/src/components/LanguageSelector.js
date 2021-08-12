import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('en-us')}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange('nl')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
