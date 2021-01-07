import Link from "next/link";
import Clipboard from "@/partials/icons/duotone-icons/general/clipboard.svg";
import Dollar from "@/partials/icons/duotone-icons/shopping/dollar.svg";
import Update from "@/partials/icons/duotone-icons/general/update.svg";
import { useEffect } from "react";
import Head from "next/head";

interface NavInit {
  user?: any;
  loading: boolean;
  containerClass: string;
  navClassList: string;
}

function Nav({ user, loading, containerClass, navClassList }: NavInit) {
  useEffect(() => {
    require("@/public/js/modal");
    require("@/public/js/navbar");
    require("@/public/js/navbar-dropdown");

    const HW_config = {
      selector: "#changelogButton",
      trigger: "#changelogButton",
      account: process.env.NEXT_PUBLIC_HEADWAY_ID,
    };

    var headwayScript = document.createElement("script");
    headwayScript.src = "/js/headway.js";
    headwayScript.async = true;
    document.body.appendChild(headwayScript);

    headwayScript.onload = function () {
      const Headway = window["Headway"];
      Headway?.init(HW_config);
    };

    return () => {
      document.body.removeChild(headwayScript);
    };
  }, []);

  return (
    <>
      <nav className={"navbar " + navClassList}>
        <div className={containerClass}>
          {/* Brand */}
          <a href="/" className="navbar-brand">
            <img
              src="/img/brand.svg"
              className="navbar-brand-img me-2"
              alt="SuperFit icon"
            />
            SuperFit
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x" />
            </button>
            {/* Navigation */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarFeatures"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Features
                </a>
                <div
                  className="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarFeatures"
                >
                  <div className="list-group list-group-flush">
                    <a href={`/paid-memberships`} className="list-group-item">
                      {/* Icon */}
                      <div className="icon icon-sm text-primary">
                        <Dollar />
                      </div>
                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <h6 className="fw-bold text-uppercase text-primary mb-0">
                          Paid Memberships
                        </h6>
                        {/* Text */}
                        <p className="font-size-sm text-gray-700 mb-0">
                          Collect client payments
                        </p>
                      </div>
                      {/* Badge */}
                      <span className="badge rounded-pill bg-success ms-auto">
                        New!
                      </span>
                    </a>
                    <a
                      className="list-group-item"
                      target="_blank"
                      href="https://itunes.apple.com/us/app/superfit-sports-workouts/id1225772126"
                    >
                      {/* Icon */}
                      <div className="icon icon-sm text-primary">
                        <Clipboard />
                      </div>
                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <p className="fw-bold text-uppercase text-primary mb-0">
                          Workout Builder
                        </p>
                        {/* Text */}
                        <p className="font-size-sm text-gray-700 mb-0">
                          On iPhone & iPad
                        </p>
                      </div>
                    </a>
                    <a
                      id="changelogButton"
                      className="list-group-item"
                      href="#"
                    >
                      {/* Icon */}
                      <div className="icon icon-sm text-primary">
                        <Update />
                      </div>
                      {/* Content */}
                      <div className="ms-4">
                        {/* Heading */}
                        <p className="fw-bold text-uppercase text-primary mb-0">
                          Changelog
                        </p>
                        {/* Text */}
                        <p className="font-size-sm text-gray-700 mb-0">
                          Latest updates
                        </p>
                      </div>
                      {/* Badge */}
                      <span className="badge rounded-pill bg-primary-soft ms-auto HW_badge_cont">
                        <span id="HW_badge">1</span>
                      </span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a href="/pricing" className="nav-link">
                  Pricing
                </a>
                {/* </Link> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarLandings"
                  data-toggle="dropdown"
                  href="#"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Examples
                </a>
                <div
                  className="dropdown-menu dropdown-menu-xl p-0"
                  aria-labelledby="navbarLandings"
                >
                  <div className="row gx-0">
                    <div className="col-12 col-lg-5">
                      <div
                        className="dropdown-img-start text-center"
                        style={{
                          backgroundImage:
                            "url(/img/covers/bottom_wide_hero.jpg)",
                        }}
                      >
                        {/* Heading */}
                        <h4 className="font-weight-bold text-white mb-0">
                          What will you build?
                        </h4>
                        {/* Text */}
                        <p className="font-size-sm text-white">
                          The next workout is waiting on your ideas.
                        </p>

                        <a
                          target="_blank"
                          href="https://itunes.apple.com/us/app/superfit-sports-workouts/id1225772126"
                          className="btn btn-sm btn-white shadow-dark fonFt-size-sm"
                        >
                          Try SuperFit Free
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="dropdown-body">
                        <div className="row gx-0">
                          <div className="col-6">
                            <a
                              target="_blank"
                              className="dropdown-item"
                              href="https://on.superfitapp.com/s/l8CQBXXd9QrRat7mcHnd"
                            >
                              Strength Training
                            </a>
                            <a
                              target="_blank"
                              className="dropdown-item"
                              href="https://on.superfitapp.com/s/dPY6hrVvc9RJCAFz36v3"
                            >
                              Sports Instruction
                            </a>
                            <a
                              target="_blank"
                              className="dropdown-item"
                              href="https://on.superfitapp.com/s/dPY6hrVvc9RJCAFz36v3"
                            >
                              On-Demand Platform
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              target="_blank"
                              className="dropdown-item"
                              href="https://on.superfitapp.com/s/gs5WICdat2WLXw3EYS3g"
                            >
                              Home Fitness
                            </a>
                            <a
                              target="_blank"
                              className="dropdown-item"
                              href="https://on.superfitapp.com/s/dPY6hrVvc9RJCAFz36v3"
                            >
                              Personal Training
                            </a>
                            <a
                              target="_blank"
                              className="dropdown-item"
                              href="https://on.superfitapp.com/s/dxghJOyCnAeePABPEAXx"
                            >
                              Virtual Coaching
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                {/* <Link href="/blog"> */}
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </li>
            </ul>
            {/* Button */}
            <a
              className="navbar-btn btn btn-sm btn-success lift ms-auto"
              href="https://itunes.apple.com/us/app/superfit-sports-workouts/id1225772126"
              target="_blank"
            >
              Try SuperFit Free
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
