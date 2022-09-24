import React from 'react';

const PastBooks = () => {
  const pastReadings = [
    {
      title: '100 Ways to Create Wealth',
      url: 'https://amzn.to/3zKlRnl',
    },
    {
      title: 'The Wisdom of Finance: Discovering Humanity in the World of Risk and Return',
      url: 'https://amzn.to/3BFkTZf',
    },
    {
      title: 'Effortless: Make It Easier to Do What Matters Most',
      url: 'https://amzn.to/3QgRmL7',
    },
    {
      title: 'The Courage to Be Disliked',
      url: 'https://amzn.to/3BE1dqk',
    },

    {
      title: 'Happy Go Money: Spend Smart, Save Right and Enjoy Life',
      url: 'https://amzn.to/3vMxis1',
    },
  ];

  return (
    <section>
      <article className="highlight-container past-books">
        <h3>📅 Past Readings</h3>
        {pastReadings.map((reading) => {
          return (
            <p>
              <a href={reading.url}>{reading.title}</a>
            </p>
          );
        })}
      </article>
    </section>
  );
};

export default PastBooks;
