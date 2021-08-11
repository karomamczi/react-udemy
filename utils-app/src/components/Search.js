import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <li key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </li>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>
            Enter Search Term
            <input
              className="input"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </div>
      </div>
      <ul className="ui celled list">{renderedResults}</ul>
    </div>
  );
};

export default Search;
