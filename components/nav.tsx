import Link from "next/link";

interface NavInit {
  user?: any;
  loading: boolean;
  containerClass: string;
  navClassList: string;
}

function Nav({ user, loading, containerClass, navClassList }: NavInit) {
  return (
    <nav className={"navbar navbar-expand-lg " + navClassList}>
      <div className={containerClass}>
        {/* Brand */}
        <a className="navbar-brand" href="./">
          <img src="/img/brand.svg" className="navbar-brand-img" alt="..." />
        </a>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
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
            data-toggle="collapse"
            data-target="#navbarCollapse"
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
                data-toggle="dropdown"
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
                  <a className="list-group-item" href="./">
                    {/* Icon */}
                    <div className="icon icon-sm text-primary">
                      {"{"}
                      {"{"}&gt; general/clipboard{"}"}
                      {"}"}
                    </div>
                    {/* Content */}
                    <div className="ml-4">
                      {/* Heading */}
                      <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                        Documentation
                      </h6>
                      {/* Text */}
                      <p className="font-size-sm text-gray-700 mb-0">
                        Customizing and building
                      </p>
                    </div>
                  </a>
                  <a
                    className="list-group-item"
                    href="{{webRoot}}/docs/alerts.html"
                  >
                    {/* Icon */}
                    <div className="icon icon-sm text-primary">
                      {"{"}
                      {"{"}&gt; layout/layout-4-blocks{"}"}
                      {"}"}
                    </div>
                    {/* Content */}
                    <div className="ml-4">
                      {/* Heading */}
                      <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                        Components
                      </h6>
                      {/* Text */}
                      <p className="font-size-sm text-gray-700 mb-0">
                        Full list of components
                      </p>
                    </div>
                  </a>
                  <a
                    className="list-group-item"
                    href="{{webRoot}}/docs/changelog.html"
                  >
                    {/* Icon */}
                    <div className="icon icon-sm text-primary">
                      {"{"}
                      {"{"}&gt; files/file{"}"}
                      {"}"}
                    </div>
                    {/* Content */}
                    <div className="ml-4">
                      {/* Heading */}
                      <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                        Changelog
                      </h6>
                      {/* Text */}
                      <p className="font-size-sm text-gray-700 mb-0">
                        Keep track of changes
                      </p>
                    </div>
                    {/* Badge */}
                    <span className="badge rounded-pill bg-primary-soft ms-auto">
                      2.0.0-alpha
                    </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarUsecases"
                data-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Use Cases
              </a>
              <div
                className="dropdown-menu dropdown-menu-xl p-0"
                aria-labelledby="navbarUsecases"
              >
                <div className="row gx-0">
                  <div className="col-12 col-lg-6">
                    <div
                      className="dropdown-img-left"
                      style={{
                        backgroundImage: "url(./img/photos/photo-3.jpg)",
                      }}
                    >
                      {/* Heading */}
                      <h4 className="font-weight-bold text-white mb-0">
                        Want to see an overview?
                      </h4>
                      {/* Text */}
                      <p className="font-size-sm text-white">
                        See all the pages at once.
                      </p>
                      {/* Button */}
                      <a
                        href="{{webRoot}}/overview.html"
                        className="btn btn-sm btn-white shadow-dark fonFt-size-sm"
                      >
                        View all pages
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="dropdown-body">
                      <div className="row gx-0">
                        <div className="col-6">
                          {/* Heading */}
                          <h6 className="dropdown-header">Services</h6>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/coworking.html"
                          >
                            Coworking
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/rental.html"
                          >
                            Rental
                          </a>
                          <a
                            className="dropdown-item mb-5"
                            href="{{webRoot}}/job.html"
                          >
                            Job Listing
                          </a>
                          {/* Heading */}
                          <h6 className="dropdown-header">Apps</h6>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/desktop-app.html"
                          >
                            Desktop
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/mobile-app.html"
                          >
                            Mobile
                          </a>
                        </div>
                        <div className="col-6">
                          {/* Heading */}
                          <h6 className="dropdown-header">Web</h6>
                          {/* List */}
                          <a className="dropdown-item" href="./">
                            Basic
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/startup.html"
                          >
                            Startup
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/enterprise.html"
                          >
                            Enterprise
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/service.html"
                          >
                            Service
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/cloud.html"
                          >
                            Cloud Hosting
                          </a>
                          <a
                            className="dropdown-item"
                            href="{{webRoot}}/agency.html"
                          >
                            Agency
                          </a>
                        </div>
                      </div>{" "}
                      {/* / .row */}
                    </div>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarPages"
                data-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg"
                aria-labelledby="navbarPages"
              >
                <div className="row gx-0">
                  <div className="col-6">
                    <div className="row gx-0">
                      <div className="col-12 col-lg-6">
                        {/* Heading */}
                        <h6 className="dropdown-header">Career</h6>
                        {/* List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/careers.html"
                        >
                          Listing
                        </a>
                        <a
                          className="dropdown-item mb-5"
                          href="{{webRoot}}/career-single.html"
                        >
                          Opening
                        </a>
                        {/* Heading */}
                        <h6 className="dropdown-header">Company</h6>
                        {/* List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/about.html"
                        >
                          About
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/pricing.html"
                        >
                          Pricing
                        </a>
                        <a
                          className="dropdown-item mb-5 mb-lg-0"
                          href="{{webRoot}}/terms-of-service.html"
                        >
                          Terms
                        </a>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* Heading */}
                        <h6 className="dropdown-header">Help center</h6>
                        {/* List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/help-center.html"
                        >
                          Overview
                        </a>
                        <a
                          className="dropdown-item mb-5"
                          href="{{webRoot}}/help-center-article.html"
                        >
                          Article
                        </a>
                        {/* Heading */}
                        <h6 className="dropdown-header">Contact</h6>
                        {/* List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/contact.html"
                        >
                          Basic
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/contact-alt.html"
                        >
                          Cover
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row gx-0">
                      <div className="col-12 col-lg-6">
                        {/* Heading */}
                        <h6 className="dropdown-header">Blog</h6>
                        {/* List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/blog.html"
                        >
                          Rich View
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/blog-post.html"
                        >
                          Article
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/blog-showcase.html"
                        >
                          Showcase
                        </a>
                        <a
                          className="dropdown-item mb-5 mb-lg-0"
                          href="{{webRoot}}/blog-search.html"
                        >
                          Search
                        </a>
                      </div>
                      <div className="col-12 col-lg-6">
                        {/* Heading */}
                        <h6 className="dropdown-header">Portfolio</h6>
                        {/* List */}
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-masonry.html"
                        >
                          Masonry
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-grid-rows.html"
                        >
                          Grid Rows
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-parallax.html"
                        >
                          Parallax
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-case-study.html"
                        >
                          Case Study
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-sidebar.html"
                        >
                          Sidebar
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-sidebar-fluid.html"
                        >
                          Sidebar: Fluid
                        </a>
                        <a
                          className="dropdown-item"
                          href="{{webRoot}}/portfolio-grid.html"
                        >
                          Basic Grid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* / .row */}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
          {/* Button */}
          <a
            className="navbar-btn btn btn-sm btn-primary lift ms-auto"
            href="https://themes.getbootstrap.com/product/landkit/"
            target="_blank"
          >
            Buy now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
