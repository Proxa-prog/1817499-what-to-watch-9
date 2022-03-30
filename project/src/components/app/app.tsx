import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Error from '../error/error';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import AddReview from '../films/review/add-review';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import FilmPage from '../film-page/film-page';
import {FilmsType} from '../../types/film';

type PromoProops = {
  promoTitle: string;
  promoGenre: string;
  promoYear: number;
  films: FilmsType;
}

function App({promoTitle, promoGenre, promoYear, films}: PromoProops): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage promoTitle={promoTitle} promoGenre={promoGenre} promoYear={promoYear} films={films}/>}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/my-list'
          element={
            <PrivateRoute>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path='/films' element={<FilmPage />}>
          <Route
            path='/films/:id'
            element={<FilmPage />}
          />
        </Route>
        <Route
          path='/films/:id/add-review'
          element={<AddReview films={films} />}
        />
        <Route
          path='/player/:id'
          element={<Player films={films} />}
        />
        <Route
          path='/sign-in'
          element={<SignIn />}
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
