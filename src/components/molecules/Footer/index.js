import React from 'react';
import './style.css';
/**
 * EN: Footer component displaying project authors and references.
 * RU: Компонент подвала страницы, отображающий авторов проекта и используемые источники.
 *
 * @component
 * @example
 * <Footer />
 *
 * @returns {JSX.Element} EN: Rendered footer content. RU: Возвращает JSX с содержимым подвала.
 */
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
        </h5>
        <h5
            rel="noopener noreferrer"
            className="Footer__Link"
        >
          Amangeldin Ersultan
        </h5>
        <h5
            rel="noopener noreferrer"
            className="Footer__Link"
        >
          Tolegen Abdurakhman
        </h5>
        <h5
            rel="noopener noreferrer"
            className="Footer__Link"
        >
          Marat Arslan
        </h5>
      </section>

      <section className="Footer_2">
        <h3>Used references:</h3> {' '}
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
