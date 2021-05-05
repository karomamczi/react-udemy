import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <li key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </li>
    );
  });

  return (
    <ul className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </ul>
  );
};

export default Accordion;
