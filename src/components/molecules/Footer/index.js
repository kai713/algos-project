import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <h5
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Kairgaliyev Bekbolsyn
          Amangeldin Ersultan
          Marat Arslan
          Tolegen Abdurrakhman
        </h5>
      </section>

      <section>
        Used references: {' '}
        <a
          href="https://en.wikipedia.org/wiki/Bubble_sort"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Wiki bubble sort
        </a>
        <a
          href="https://www.w3schools.com/dsa/dsa_algo_bubblesort.php"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          W3 bubble sort
        </a>
      </section>
    </footer>
  );
};

export default Footer;
