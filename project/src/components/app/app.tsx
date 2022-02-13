import MainPage from '../main-page/main-page';

type PromoProops = {
  promoTitle: string;
  promoGenre: string;
  promoYear: number;
}

function App({promoTitle, promoGenre, promoYear}: PromoProops): JSX.Element {
  return <MainPage promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} />;
}

export default App;
