import React from "react";
import "../Blog.scss";
import "../style/contact.scss";

function Profile() {
  return (
    <>
      <header>
        {" "}
        <div className="wavebro"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F67884"
            fill-opacity="1"
            d="M0,256L80,218.7C160,181,320,107,480,117.3C640,128,800,224,960,240C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>{" "}
        <div className="namebro">
          <h2>Anell's College Fund</h2>
        </div>
      </header>

      <div className="row vidbro">
        <div className="col-6">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/mPHpnJu8zc8"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-6">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <h2>$17,950</h2>
            <p>pledged of $20,823 goal</p>
          </div>
          <div>
            <h2>7</h2>
            <p>backers</p>
          </div>
          <div>
            <h2>35</h2>
            <p>days to go</p>
          </div>
          <div className="herobtn">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
            >
              Donate
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-lg right"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  ari
                  a-controls="nav-home"
                  aria-selected="true"
                >
                  About
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Blog
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active container"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <h2 className="nameBro">About Me:</h2>
                <p>
                  I really apreciate your help. A few weeks ago, I did not have
                  any clue of how I was going to raise the necessary funds that
                  are esential for my future education, but now with all your
                  support I continue to dream big. This is a wonderful
                  opportunity that I am incredibly thankful for. I am pinching
                  myself thinking I have a real shot at obtaining a degree. Thank you for your support!
                </p>{" "}
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="blog-card">
                  <div className="meta">
                    <div className="photo"></div>
                    <ul className="details">
                      <li className="author">
                        <a href="#">Anell Doe</a>
                      </li>
                      <li className="date">Sept. 24, 2019</li>
                      <li className="tags">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="#">Code</a>
                          </li>
                          <li>
                            <a href="#">HTML</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="description">
                    <h1>Learning to Code</h1>
                    <h2>Declaring my major</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
                <div className="blog-card alt">
                  <div className="meta">
                    <div className="photo"></div>
                    <ul className="details">
                      <li className="author">
                        <a href="#">Anell Doe</a>
                      </li>
                      <li className="date">Au. 15, 2019</li>
                      <li className="tags">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="#">College</a>
                          </li>
                          <li>
                            <a href="#">Excited</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="description">
                    <h1>First Day of class</h1>
                    <h2>Excited for college!</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p className="read-more">
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <h1 className="nameBro">Contact</h1>
                <form class="cf">
                  <div class="half left cf">
                    <input
                      type="text"
                      id="input-name"
                      placeholder="Name"
                    ></input>
                    <input
                      type="email"
                      id="input-email"
                      placeholder="Email address"
                    ></input>
                  </div>
                  <div class="half right cf">
                    <textarea
                      name="message"
                      type="text"
                      id="input-message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <input type="submit" value="Submit" id="input-submit"></input>
                </form>{" "}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Books</h5>
                <p className="card-text">
                  Support my goals for post-secondary education by donating the
                  cost of a textbook.
                </p>
                <a href="#" className="btn btn-primary">
                  Donate
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Supplies</h5>
                <p className="card-text">
                  Help me pay for other supplies, like calculators and pens.
                </p>
                <a href="#" className="btn btn-primary">
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
