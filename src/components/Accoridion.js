import React from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
  const onTitleClicked = () => {};

  const renderedItems = items.map((item, index) => {
    return (
      <li key={item.title}>
        <div className="title active" onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </li>
    );
  });

  return <ul className="ui styled accordion">{renderedItems}</ul>;
};

export default Accordion;
