import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import Movies from '../Movies';
import GenreFilter from '../GenreFilter';
import RatingFilter from '../RatingFilter';

import './layout.scss';

const Layout = ({ loadStatus, getMovies }) => {
  useEffect(() => {
    // Fetch movies on component mount if never loaded
    if (!loadStatus) getMovies();
  }, []);

  return (
    <div className="layout">
      {loadStatus === 'SUCCESS' && (
        <>
          <div className="layout__sidebar">
            <div className="layout__sidebar-inner">
              <GenreFilter />
              <RatingFilter />
            </div>
          </div>
          <Movies />
        </>
      )}
      {loadStatus === 'ERROR' && (
        <div className="layout__error">
          Sorry, we couldn&apos;t retrieve the movie data. Please reload the
          page or check your connection.
        </div>
      )}
      {loadStatus === 'LOADING' && (
        <div className="layout--loading">
          <Spinner name="ball-beat" color="#bbb" />
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  loadStatus: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired,
};

export default Layout;
