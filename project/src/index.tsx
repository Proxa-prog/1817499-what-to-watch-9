import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
  document.getElementById('root'));
