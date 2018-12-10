## Get Started
```
$ git clone https://github.com/thedanwoods/movie-listings.git
$ cd movie-listings
$ npm install
$ npm start
```
or see the live version at https://thedanwoods.github.io/movie-listings

## Description

This shows current movies from the TMDb API, and allows the user to filter by genre and rating.

It's build as an idiomatic React-Redux single page app.

### Limitiations

  * It should not be considered stable as it uses the `@latest` alpha of React with React Hooks, which is still an experimental proposal.

  * It does not currently handle pagination. The TMDb API initially only returns the 20 most popular movies out of over 1,000, and the app does not make any further requests after initial load.

  * Filter state is kept in the Redux store, but it may be better to make the router the source of truth for the filters, e.g. `?rating=3&genre=comedy`

  * The API key is hardcoded, and in the real world it is probably wiser to hide it behind a proxy or gateway.

  * Some tests are missing or somewhat thin.

  * The `<Layout />` component uses CSS Grid and does not have a proper fallback for older browsers.
