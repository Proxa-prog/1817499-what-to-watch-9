import { FilmsType } from '../../../types/film';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

type addReviewType = {
  films: FilmsType;
}

type commentType = {
  rating: string;
  text: string;
}

function AddReview({ films }: addReviewType): JSX.Element {
  const [comment, setComment] = useState({
    rating: '1',
    text: '',
  } as commentType);

  return (
    <>
      {films.map((item) => (
        <section className="film-card film-card--full" key={item.id}>
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={item.src} alt={item.alt} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link to='/' className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/films/${item.id}`} className="breadcrumbs__link">{item.alt}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link to='#' className="breadcrumbs__link">Add review</Link>
                  </li>
                </ul>
              </nav>

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </li>
                <li className="user-block__item">
                  <Link to='#' className="user-block__link">Sign out</Link>
                </li>
              </ul>
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img src={item.src} alt={item.alt} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" >
              <div className="rating">
                <div className="rating__stars">
                  {
                    [10,9,8,7,6,5,4,3,2,1].map((filmItem) => (
                      <>
                        <input className="rating__input" id={`star-${filmItem}`} type="radio" name="rating" value={`${filmItem}`}
                          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                            setComment({
                              ...comment,
                              rating: evt.target.value,
                            });
                          }}
                        />
                        <label className="rating__label" htmlFor={`star-${filmItem}`}>Rating {`${filmItem}`}</label>
                      </>
                    ))
                  }
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={''}
                  onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {
                    setComment({
                      ...comment,
                      text: evt.target.value,
                    });
                  }}
                >
                </textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>

              </div>
            </form>
          </div>

        </section>
      ))}
    </>
  );
}

export default AddReview;
