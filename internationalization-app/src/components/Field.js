import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../configs/translations';

class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {(language) => translations[language].NAME}
          </LanguageContext.Consumer>
          <input />
        </label>
      </div>
    );
  }
}

export default Field;
