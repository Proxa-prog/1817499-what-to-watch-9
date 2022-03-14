import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FilmsArray} from './mocks/films';

const Promo = {
  promoTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoYear: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoTitle={Promo.promoTitle}
      promoGenre={Promo.promoGenre}
      promoYear={Promo.promoYear}
      films={FilmsArray}
    />
  </React.StrictMode>,
  document.getElementById('root'));
