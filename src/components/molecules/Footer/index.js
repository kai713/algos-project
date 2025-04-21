import React from 'react';
import './style.css';

const Footer = () => {
  return (
      <footer className="Footer">
        <section className="Footer__Authors">
          <h4>Created by:</h4>
          <a href="https://github.com/kai713">Kairgaliyev Bekbolsyn</a>
          <a href="https://github.com/YersDev">Amangeldin Ersultan</a>
          <a href="https://github.com/aboksk">Tolegen Abdurakhman</a>
          <a href="https://github.com/MAGunter">Marat Arslan</a>
        </section>

        <section className="Footer__Links">
          <h4>References:</h4>
          <a
              href="https://en.wikipedia.org/wiki/Bubble_sort"
              target="_blank"
              rel="noopener noreferrer"
          >
            Wikipedia – Bubble Sort
          </a>
          <a
              href="https://www.w3schools.com/dsa/dsa_algo_bubblesort.php"
              target="_blank"
              rel="noopener noreferrer"
          >
            W3Schools – Bubble Sort
          </a>
        </section>
      </footer>
  );
};

export default Footer;
