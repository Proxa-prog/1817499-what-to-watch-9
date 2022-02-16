import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Error from '../error/error';
import Login from '../login/login';
import MyList from '../mylist/mylist';
import Films from '../films/id/films';
import AddReview from '../films/id/review/add-review';
import Player from '../player/id/player';

type PromoProops = {
  promoTitle: string;
  promoGenre: string;
  promoYear: number;
}

function App({promoTitle, promoGenre, promoYear}: PromoProops): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainPage promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/mylist'
          element={<MyList />}
        />
        <Route
          path='/films'
          element={<Films />}
        />
        <Route
          path='/add-review'
          element={<AddReview />}
        />
        <Route
          path='/player'
          element={<Player />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
