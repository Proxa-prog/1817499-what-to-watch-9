import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Error from '../error/error';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Films from '../films/films';
import AddReview from '../films/review/add-review';
import Player from '../player/player';
import SingIn from '../sing-in/sing-in';
import PrivateRoute from '../private-route/private-route';

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
          index
          element={<MainPage promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/my-list'
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path='/films' element={<Films />}>
          <Route
            path='/films/:id'
            element={<Films />}
          />
        </Route>
        <Route
          path='/films/:id/add-review'
          element={<AddReview />}
        />
        <Route
          path='/player/:id'
          element={<Player />}
        />
        <Route
          path='/sing-in'
          element={<SingIn />}
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
