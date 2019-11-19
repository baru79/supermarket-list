import React from 'react';

import './Spinner.css';
import spinner from './puff.svg';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
