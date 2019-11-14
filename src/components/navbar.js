import React from "react";
import "../style/nav.css";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation-bar"
      >
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>

      <a class="navbar-brand" href="/index">
        <img className="logo" src="/pics/logo.png" alt="Logo" />
      </a>

      <div class="collapse navbar-collapse" id="navigation-bar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/profile">
              PROFILE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/survey">
              SURVEY
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
