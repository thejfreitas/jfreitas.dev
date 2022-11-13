import React from 'react';
import PropTypes from 'prop-types';

const CurrentlyListening = ({ title, url }) => {
  return (
    <section>
      <article className="highlight-container">
        <p className="currently-listening">
          📚 🎧 Currently listening to this audiobook -{' '}
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </p>
      </article>
    </section>
  );
};

CurrentlyListening.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CurrentlyListening;
