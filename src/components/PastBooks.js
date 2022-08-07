import React from 'react';

const PastBooks = () => {
  const pastReadings = [
    {
      month: 'July 2022',
      title: 'Effortless: Make It Easier to Do What Matters Most',
      url: 'https://amzn.to/3QgRmL7',
    },
    {
      month: 'June 2022',
      title: 'The Courage to Be Disliked',
      url: 'https://amzn.to/3BE1dqk',
    },

    {
      month: 'May 2022',
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
              {reading.month} - <a href={reading.url}>{reading.title}</a>
            </p>
          );
        })}
      </article>
    </section>
  );
};

export default PastBooks;
