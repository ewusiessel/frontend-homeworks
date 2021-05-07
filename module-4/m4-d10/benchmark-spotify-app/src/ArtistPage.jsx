import React from "react";
import "./styles.css";

const ArtistPage = function () {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <nav
                className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                id="sidebar"
              >
                <div className="nav-container">
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="logo/Spotify_Logo.png"
                      alt="Spotify_Logo"
                      width={131}
                      height={40}
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                  >
                    <div className="navbar-nav">
                      <ul>
                        <li>
                          <a className="nav-item nav-link" href="index.html">
                            <i className="fas fa-home fa-lg" />
                            &nbsp; Home
                          </a>
                        </li>
                        <li>
                          <a className="nav-item nav-link" href="/">
                            <i className="fas fa-book-open fa-lg" />
                            &nbsp; Your Library
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="nav-btn">
                  <button className="btn signup-btn" type="button">
                    Sign Up
                  </button>
                  <button className="btn login-btn" type="button">
                    Login
                  </button>
                  <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
                </div>
              </nav>
            </div>
            <div className="col-12 col-md-9 offset-md-3 mainPage">
              <div className="row mb-3">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <a id="Rock" href="/">
                    ROCK
                  </a>
                  <a id="Pop" href="/">
                    POP
                  </a>
                  <a id="Hip Hop" href="/">
                    HIP HOP
                  </a>
                  <a href="/">NEW RELEASES</a>
                  <a href="/">DISCOVER</a>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-10 col-lg-10 mt-5">
                  <h2 className="titleMain">
                    {"{"}"/"{"}"}
                  </h2>
                  <div id="followers">1154386 followers</div>
                  <div
                    className="d-flex justify-content-center"
                    id="button-container"
                  >
                    <button
                      className="btn btn-success mr-2 mainButton"
                      id="playButton"
                    >
                      PLAY
                    </button>
                    <button
                      className="btn btn-outline-light mainButton"
                      id="followButton"
                    >
                      FOLLOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                  <div className="mt-4 d-flex justify-content-start">
                    <h2 className="text-white font-weight-bold">Tracks</h2>
                  </div>
                  <div className="pt-5 mb-5">
                    <div className="row" id="apiLoaded">
                      <div className="col-sm-auto col-md-auto text-center mb-5">
                        <a href="/album_page.html">
                          <img
                            className="img-fluid"
                            src="https://cdns-images.dzcdn.net/images/cover/e2491c22fb19c154e46b449ff7aa7a62/250x250-000000-80-0-0.jpg"
                            alt={1}
                          />
                        </a>
                        <p>
                          <a href="/"> Track: "Shape Of My Hear..." </a>
                          <br />
                          <a href="/"> Album: "Ten Summoner's T..." </a>
                        </p>
                      </div>
                      <div className="col-sm-auto col-md-auto text-center mb-5">
                        <a href="/">
                          <img
                            className="img-fluid"
                            src="https://cdns-images.dzcdn.net/images/cover/43216748bbeee4aa12f3e2407599a4ea/250x250-000000-80-0-0.jpg"
                            alt={1}
                          />
                        </a>
                        <p>
                          <a href="/"> Track: "Russians" </a>
                          <br />
                          <a href="/"> Album: "Fields Of Gold -..." </a>
                        </p>
                      </div>
                      <div className="col-sm-auto col-md-auto text-center mb-5">
                        <a href="/">
                          <img
                            className="img-fluid"
                            src="https://cdns-images.dzcdn.net/images/cover/b868c72b8514a61a7a34e0495c5584e1/250x250-000000-80-0-0.jpg"
                            alt={1}
                          />
                        </a>
                        <p>
                          <a href="/"> Track: "Every Breath You..." </a>
                          <br />
                          <a href="/"> Album: "My Songs (Deluxe..." </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="player container-fluid fixed-bottom bg-container pt-1">
          <div className="row">
            <div className="col-lg-10">
              <div className="row flex-nowrap justify-content-between playBar py-3">
                <div className="col-auto">
                  <div className="playerArtistInfo d-flex">
                    <div className="d-flex flex-column pl-2">
                      <h6>
                        {"{"} "/"{"}"}
                      </h6>
                      <p />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="playerControls w-50 d-flex justify-content-between">
                    <a href="/">
                      <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                    </a>
                    <a href="/">
                      <img src="playerbuttons/Previous.png" alt="previous" />
                    </a>
                    <a href="/">
                      <img src="playerbuttons/Play.png" alt="play" />
                    </a>
                    <a href="/">
                      <img src="playerbuttons/Next.png" alt="next" />
                    </a>
                    <a href="/">
                      <img src="playerbuttons/Repeat.png" alt="repeat" />
                    </a>
                  </div>
                  <div className="progressContainer d-flex align-items-center">
                    <span className="currentTime">00:00</span>
                    <div className="progress w-100">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <audio />
                      </div>
                    </div>
                    <span className="duration">00:00</span>
                  </div>
                </div>
                <div className="col-auto mr-3">
                  <div className="playerVolume">
                    <i className="fa fa-volume-up" />
                    <input type="range" defaultValue={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
