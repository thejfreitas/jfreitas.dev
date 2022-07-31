import React from 'react';
import PropTypes from 'prop-types';

const CurrentlyListening = ({ title, url }) => {
  return (
    <p>
      📚 🎧 Currently listening to this audiobook - <a href={url}>{title}</a>
    </p>
  );
};

CurrentlyListening.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CurrentlyListening;
