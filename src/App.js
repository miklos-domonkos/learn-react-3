import React from 'react';
import logo from './logo.svg';
import './App.css';
import './pulpfiction.jpg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='section-first'>
          <img src={logo} className='App-logo' alt='logo' />
          <div className='add-movie-wrapper'>
            <button className='add-movie'>+ ADD MOVIE</button>
          </div>
          <div className='search-container'>
            <h1>FIND YOUR MOVIE</h1>
            <div className='search'>
              <input placeholder='What do you want to watch?' />
              <button>
                <span>SEARCH</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className='section-main'>
        <div className='result'>
          <div className='result-commands'>
            <div className='result-filter-genre'></div>
            <div className='result-sort'></div>
          </div>
          <div className='results-wrapper'>
            <div className='filter-and-sort'>
              <div className='filter'>
                <ul>
                  <li>ALL</li>
                  <li>DOCUMENTARY</li>
                  <li>COMEDY</li>
                  <li>HORROR</li>
                  <li>CRIME</li>
                </ul>
              </div>
              <div className='sort'>
                <label>SORT BY</label>
                <select>
                  <option value='release'>RELEASE DATE</option>
                  <option value='rating'>RATING</option>
                  <option value='genre'>GENRE</option>
                </select>
              </div>
            </div>
            <div className='results-counter'>
              <label>
                <strong>39</strong> movies found
              </label>
            </div>
            <div className='result-list'>
              <ul>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'> </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'>
                      <div className='dots'>
                        <strong>⋮</strong>
                      </div>
                    </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'> </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'> </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'> </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'> </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='movie-card'>
                    <div className='movie-image image1'> </div>
                    <div className='movie-data'>
                      <label className='title'>Title</label>
                      <label className='genre'>Genre</label>
                      <label className='year'>2020</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>
          <strong>netflix</strong>roulette
        </p>
      </footer>
    </div>
  );
}

export default App;
