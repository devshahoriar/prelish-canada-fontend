const Agency = () => {
  return (
    <>
      <header className="main-header navbar-light header-sticky header-sticky-smart header-mobile-lg">
        <div className="sticky-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg px-0">
              <a className="navbar-brand" href="index.html">
                <img
                  src="/images/logo.png"
                  alt="HomeID"
                  className="d-none d-lg-inline-block"
                />
                <img
                  src="/images/logo-white.png"
                  alt="HomeID"
                  className="d-inline-block d-lg-none"
                />
              </a>
              <div className="d-flex d-lg-none ml-auto">
                <a className="mr-4 position-relative text-white p-2" href="#">
                  <i className="fal fa-heart fs-large-4" />
                  <span className="badge badge-primary badge-circle badge-absolute">
                    1
                  </span>
                </a>
                <button
                  className="navbar-toggler border-0 px-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#primaryMenu01"
                  aria-controls="primaryMenu01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="text-white fs-24">
                    <i className="fal fa-bars" />
                  </span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse mt-3 mt-lg-0 mx-auto flex-grow-0"
                id="primaryMenu01"
              >
                <ul className="navbar-nav hover-menu main-menu px-0 mx-lg-n4">
                  <li
                    id="navbar-item-home"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="index.html"
                      data-toggle="dropdown"
                    >
                      Home
                      <span className="caret" />
                    </a>
                    <ul
                      className="dropdown-menu pt-3 pb-0 pb-lg-3"
                      aria-labelledby="navbar-item-home"
                    >
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-01"
                          className="dropdown-link"
                          href="home-01.html"
                        >
                          Home 01
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-02"
                          className="dropdown-link"
                          href="home-02.html"
                        >
                          Home 02
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-03"
                          className="dropdown-link"
                          href="home-03.html"
                        >
                          Home 03
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-04"
                          className="dropdown-link"
                          href="home-04.html"
                        >
                          Home 04
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-05"
                          className="dropdown-link"
                          href="home-05.html"
                        >
                          Home 05
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-06"
                          className="dropdown-link"
                          href="home-06.html"
                        >
                          Home 06
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-07"
                          className="dropdown-link"
                          href="home-07.html"
                        >
                          Home 07
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-home-08"
                          className="dropdown-link"
                          href="home-08.html"
                        >
                          Home 08
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="navbar-item-property"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="listing.html"
                      data-toggle="dropdown"
                    >
                      Property
                      <span className="caret" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-xxl px-0 py-3 dropdown-menu-listing"
                      aria-labelledby="navbar-item-property"
                    >
                      <div className="row no-gutters">
                        <div className="col-lg-3">
                          {/* Heading */}
                          <h4 className="dropdown-header text-dark fs-16 mb-2">
                            List view
                          </h4>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="listing-full-width-list.html"
                          >
                            Full width list
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-with-left-filter.html"
                          >
                            List with left filter
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-with-right-filter.html"
                          >
                            List with right filter
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-with-left-sidebar.html"
                          >
                            List with left sidebar
                          </a>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="listing-with-right-sidebar.html"
                          >
                            List with right sidebar
                          </a>
                        </div>
                        <div className="col-lg-3">
                          {/* Heading */}
                          <h4 className="dropdown-header text-dark fs-16 mb-2">
                            Grid view
                          </h4>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="listing-full-width-grid-1.html"
                          >
                            Full width grid 1
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-full-width-grid-2.html"
                          >
                            Full width grid 2
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-full-width-grid-3.html"
                          >
                            Full width grid 3
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-grid-with-left-filter.html"
                          >
                            Grid with left filter
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-grid-with-right-filter.html"
                          >
                            Grid with right filter
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-grid-with-left-sidebar.html"
                          >
                            Grid with left sidebar
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-grid-with-right-sidebar.html"
                          >
                            Grid with right sidebar
                          </a>
                        </div>
                        <div className="col-lg-3">
                          {/* Heading */}
                          <h4 className="dropdown-header text-dark fs-16 mb-2">
                            Map style
                          </h4>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="listing-half-map-list-layout-1.html"
                          >
                            Half map list layout 1
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-half-map-list-layout-2.html"
                          >
                            Half map list layout 2
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-half-map-grid-layout-1.html"
                          >
                            Half map grid layout 1
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-half-map-grid-layout-2.html"
                          >
                            Half map grid layout 2
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-full-map-1.html"
                          >
                            Full map 1
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-full-map-2.html"
                          >
                            Full map 2
                          </a>
                          <a
                            className="dropdown-item"
                            href="listing-full-map-with-sidebar.html"
                          >
                            Full Map with sidebar
                          </a>
                        </div>
                        <div className="col-lg-3">
                          {/* Heading */}
                          <h4 className="dropdown-header text-dark fs-16 mb-2">
                            Single Property
                          </h4>
                          {/* List */}
                          <a
                            className="dropdown-item"
                            href="single-property-1.html"
                          >
                            Single Property 1
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-2.html"
                          >
                            Single Property 2
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-3.html"
                          >
                            Single Property 3
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-4.html"
                          >
                            Single Property 4
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-5.html"
                          >
                            Single Property 5
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-6.html"
                          >
                            Single Property 6
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-7.html"
                          >
                            Single Property 7
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-8.html"
                          >
                            Single Property 8
                          </a>
                          <a
                            className="dropdown-item"
                            href="single-property-9.html"
                          >
                            Single Property 9
                          </a>
                        </div>
                      </div>
                      {/* / .row */}
                    </div>
                  </li>
                  <li
                    id="navbar-item-dashboard"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Dashboard
                      <span className="caret" />
                    </a>
                    <ul
                      className="dropdown-menu pt-3 pb-0 pb-lg-3"
                      aria-labelledby="navbar-item-dashboard"
                    >
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-dashboard"
                          className="dropdown-link"
                          href="dashboard.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-add-new-property"
                          className="dropdown-link"
                          href="dashboard-add-new-property.html"
                        >
                          Add New Property
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-my-properties"
                          className="dropdown-link"
                          href="dashboard-my-properties.html"
                        >
                          My Properties
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-my-favorites"
                          className="dropdown-link"
                          href="dashboard-my-favorites.html"
                        >
                          My Favorites
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-save-search"
                          className="dropdown-link"
                          href="dashboard-save-search.html"
                        >
                          Save Search
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-reviews"
                          className="dropdown-link"
                          href="dashboard-reviews.html"
                        >
                          Reviews
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-my-package"
                          className="dropdown-link"
                          href="dashboard-my-packages.html"
                        >
                          My Package
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-my-profile"
                          className="dropdown-link"
                          href="dashboard-my-profiles.html"
                        >
                          My Profile
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-signup-and-login"
                          className="dropdown-link"
                          href="signup-and-login.html"
                        >
                          Signup and login
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-password-recovery"
                          className="dropdown-link"
                          href="password-recovery.html"
                        >
                          Password Recovery
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="navbar-item-pages"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Pages
                      <span className="caret" />
                    </a>
                    <ul
                      className="dropdown-menu pt-3 pb-0 pb-lg-3"
                      aria-labelledby="navbar-item-pages"
                    >
                      <li className="dropdown-item dropdown dropright">
                        <a
                          id="navbar-link-news"
                          className="dropdown-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          News
                        </a>
                        <ul
                          className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3"
                          aria-labelledby="navbar-link-news"
                        >
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="blog-classic.html"
                            >
                              Blog classic
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a className="dropdown-link" href="blog-grid.html">
                              Blog grid
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="blog-grid-with-sidebar.html"
                            >
                              Blog grid with sidebar
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="blog-list-width-sidebar.html"
                            >
                              Blog list with sidebar
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="blog-details-1.html"
                            >
                              Blog details 1
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="blog-details-2.html"
                            >
                              Blog details 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-about-us"
                          className="dropdown-link"
                          href="about-us.html"
                        >
                          About us
                        </a>
                      </li>
                      <li className="dropdown-item dropdown dropright">
                        <a
                          id="navbar-link-service"
                          className="dropdown-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Service
                        </a>
                        <ul
                          className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3"
                          aria-labelledby="navbar-link-service"
                        >
                          <li className="dropdown-item">
                            <a className="dropdown-link" href="services.html">
                              Services
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="services-with-sidebar.html"
                            >
                              Services with sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item dropdown dropright">
                        <a
                          id="navbar-link-contact-us"
                          className="dropdown-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Contact us
                        </a>
                        <ul
                          className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3"
                          aria-labelledby="navbar-link-contact-us"
                        >
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="contact-us-1.html"
                            >
                              Contact us 1
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="contact-us-2.html"
                            >
                              Contact us 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item dropdown dropright">
                        <a
                          id="navbar-link-agent"
                          className="dropdown-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Agent
                        </a>
                        <ul
                          className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3"
                          aria-labelledby="navbar-link-agent"
                        >
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agents-grid-1.html"
                            >
                              Agents grid 1
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agents-grid-2.html"
                            >
                              Agents grid 2
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agents-grid-with-sidebar.html"
                            >
                              Agents grid with sidebar
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agents-list.html"
                            >
                              Agents list
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agent-details-1.html"
                            >
                              Agent detais 1
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agent-details-2.html"
                            >
                              Agent detais 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item dropdown dropright">
                        <a
                          id="navbar-link-agency"
                          className="dropdown-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Agency
                        </a>
                        <ul
                          className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-lg-3"
                          aria-labelledby="navbar-link-agency"
                        >
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agency-grid.html"
                            >
                              Agency grid
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agency-list.html"
                            >
                              Agency list
                            </a>
                          </li>
                          <li className="dropdown-item active">
                            <a
                              className="dropdown-link"
                              href="agency-details-1.html"
                            >
                              Agency details 1
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="dropdown-link"
                              href="agency-details-2.html"
                            >
                              Agency details 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-faqs"
                          className="dropdown-link"
                          href="faqs.html"
                        >
                          FAQs
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-page-404"
                          className="dropdown-link"
                          href="page-404.html"
                        >
                          Page 404
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-checkout"
                          className="dropdown-link"
                          href="checkout-complete-1.html"
                        >
                          Checkout
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-payment-completed"
                          className="dropdown-link"
                          href="checkout-complete-2.html"
                        >
                          Payment Completed
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-compare"
                          className="dropdown-link"
                          href="compare-details.html"
                        >
                          Compare
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a
                          id="navbar-link-packages"
                          className="dropdown-link"
                          href="packages.html"
                        >
                          Packages
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="navbar-item-docs"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-lg-5 px-0 px-lg-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Docs
                      <span className="caret" />
                    </a>
                    <div className="dropdown-menu px-0 pt-3 dropdown-menu-docs">
                      <div className="dropdown-body">
                        <a
                          className="dropdown-item py-1"
                          href="docs/getting-started/dev-environment-setup.html"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-file-alt" />
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">
                                Documentation
                              </span>
                              <small className="d-block">
                                Kick-start customization
                              </small>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider m-0" />
                        <a
                          className="dropdown-item py-1"
                          href="docs/content/typography.html"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-layer-group" />
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">
                                UI Kit
                                <span className="badge badge-danger ml-2">
                                  50+
                                </span>
                              </span>
                              <small className="d-block">
                                Flexible components
                              </small>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider m-0" />
                        <a
                          className="dropdown-item py-1"
                          href="docs/getting-started/changelog.html"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-edit" />
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">
                                Changelog
                                <span className="badge badge-success ml-2">
                                  v1.0.1
                                </span>
                              </span>
                              <small className="d-block">Regular updates</small>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider m-0" />
                        <a
                          className="dropdown-item py-1"
                          href="https://sp.g5plus.net/"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-life-ring" />
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">Support</span>
                              <small className="d-block">
                                https://sp.g5plus.net/
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="d-block d-lg-none">
                  <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap py-2">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        ENG
                      </a>
                      <div className="dropdown-menu dropdown-sm dropdown-menu-left">
                        <a className="dropdown-item" href="#">
                          VN
                        </a>
                        <a className="dropdown-item active" href="#">
                          ENG
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          ARB
                        </a>
                        <a className="dropdown-item" href="#">
                          KR
                        </a>
                        <a className="dropdown-item" href="#">
                          JN
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  px-2"
                        data-toggle="modal"
                        href="#login-register-modal"
                      >
                        SIGN IN
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <ul className="navbar-nav flex-row justify-content-lg-end d-flex flex-wrap text-body py-2">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      ENG
                    </a>
                    <div className="dropdown-menu dropdown-sm dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        VN
                      </a>
                      <a className="dropdown-item active" href="#">
                        ENG
                      </a>
                      <a className="dropdown-item" href="#">
                        ARB
                      </a>
                      <a className="dropdown-item" href="#">
                        KR
                      </a>
                      <a className="dropdown-item" href="#">
                        JN
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  px-2"
                      data-toggle="modal"
                      href="#login-register-modal"
                    >
                      SIGN IN
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-2 position-relative" href="#">
                      <i className="fal fa-heart fs-large-4" />
                      <span className="badge badge-primary badge-circle badge-absolute">
                        1
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main id="content">
        <div className="bg-gray-01">
          <section className="pb-6 pt-2">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Agencies</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Eco house company
                  </li>
                </ol>
              </nav>
            </div>
          </section>
          <section className="pb-11">
            <div className="container">
              <div className="row h-100">
                <div className="col-lg-8">
                  <div className="card border-0 px-6 pt-6 pb-10">
                    <div className="row h-100">
                      <div className="col-sm-5 mb-6 mb-sm-0">
                        <img
                          className="rounded-lg border card-img"
                          src="/images/agency-list-01.jpg"
                          alt="Eco house company"
                        />
                      </div>
                      <div className="col-sm-7">
                        <div className="card-body p-0">
                          <h2 className="card-title fs-22 lh-15 mb-1 text-dark">
                            Eco House Company
                          </h2>
                          <p className="card-text mb-1">
                            398 Pete Pascale Pl, New York
                          </p>
                          <ul className="list-inline mb-3">
                            <li className="list-inline-item fs-13 text-heading font-weight-500">
                              4.8/5
                            </li>
                            <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-0">
                                  <span className="text-warning fs-12 lh-2">
                                    <i className="fas fa-star" />
                                  </span>
                                </li>
                                <li className="list-inline-item mr-0">
                                  <span className="text-warning fs-12 lh-2">
                                    <i className="fas fa-star" />
                                  </span>
                                </li>
                                <li className="list-inline-item mr-0">
                                  <span className="text-warning fs-12 lh-2">
                                    <i className="fas fa-star" />
                                  </span>
                                </li>
                                <li className="list-inline-item mr-0">
                                  <span className="text-warning fs-12 lh-2">
                                    <i className="fas fa-star" />
                                  </span>
                                </li>
                                <li className="list-inline-item mr-0">
                                  <span className="text-warning fs-12 lh-2">
                                    <i className="fas fa-star" />
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li className="list-inline-item fs-13 text-gray-light">
                              (67 reviews)
                            </li>
                          </ul>
                          <ul className="list-group list-group-no-border">
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Office</span>
                              <span className="col-sm-9 px-1 text-heading font-weight-500">
                                123 900 68668
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Mobile</span>
                              <span className="col-sm-9 px-1 text-heading font-weight-500">
                                123 900 68668
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Fax</span>
                              <span className="col-sm-9 px-1 text-heading font-weight-500">
                                1-323 900 6800
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Email</span>
                              <span className="col-sm-9 px-1">
                                hello@ecohouse.com
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Language</span>
                              <span className="col-sm-9 px-1">
                                English, French, Spanish
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Website</span>
                              <span className="col-sm-9 px-1">
                                ecohousecompany.com
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">
                                Opening hours
                              </span>
                              <span className="col-sm-9 px-1">
                                08:00 AM - 06:00 PM
                              </span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mx-n1 p-0 mb-2 mb-sm-0">
                              <span className="col-sm-3 px-1">Tax number</span>
                              <span className="col-sm-9 px-1">0838</span>
                            </li>
                            <li className="list-group-item d-flex align-items-sm-center lh-214 row mb-0 mt-3 mx-n1 p-0 ">
                              <span className="col-sm-3 px-1">Social</span>
                              <ul className="col-sm-9 list-inline text-gray-lighter m-0 px-1">
                                <li className="list-inline-item m-0">
                                  <a
                                    href="#"
                                    className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"
                                  >
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                  <a
                                    href="#"
                                    className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"
                                  >
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                  <a
                                    href="#"
                                    className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"
                                  >
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                                <li className="list-inline-item mr-0 ml-2">
                                  <a
                                    href="#"
                                    className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"
                                  >
                                    <i className="fab fa-linkedin-in" />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card border-0">
                    <div className="card-body p-6">
                      <h3 className="card-title fs-16 text-dark mb-6">
                        Contact EcoHouse Company
                      </h3>
                      <form>
                        <div className="form-group mb-2">
                          <input
                            type="text"
                            className="form-control form-control-lg border-0"
                            placeholder="First Name, Last Name"
                            name="name"
                          />
                        </div>
                        <div className="form-group mb-2">
                          <input
                            type="email"
                            className="form-control form-control-lg border-0"
                            placeholder="Your Email"
                            name="email"
                          />
                        </div>
                        <div className="form-group mb-2">
                          <input
                            type="tel"
                            className="form-control form-control-lg border-0"
                            placeholder="Your phone"
                            name="phone"
                          />
                        </div>
                        <div className="form-group mb-4">
                          <textarea
                            className="form-control form-control-lg border-0"
                            rows={5}
                            placeholder="Message"
                            name="message"
                            defaultValue={''}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-11">
            <div className="container">
              <div className="collapse-tabs mb-10">
                <ul
                  className="nav nav-tabs text-uppercase d-none d-md-inline-flex agent-details-tabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      href="#overview"
                      className="nav-link active shadow-none fs-13"
                      data-toggle="tab"
                      role="tab"
                    >
                      Overview
                    </a>
                  </li>
                  <li className="nav-item ml-0">
                    <a
                      href="#listing"
                      className="nav-link shadow-none fs-13"
                      data-toggle="tab"
                      role="tab"
                    >
                      Listings
                    </a>
                  </li>
                  <li className="nav-item ml-0">
                    <a
                      href="#agents"
                      className="nav-link shadow-none fs-13"
                      data-toggle="tab"
                      role="tab"
                    >
                      Agents
                    </a>
                  </li>
                  <li className="nav-item ml-0">
                    <a
                      href="#reviews"
                      className="nav-link shadow-none fs-13"
                      data-toggle="tab"
                      role="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item ml-0">
                    <a
                      href="#agency-map"
                      className="nav-link shadow-none fs-13"
                      data-toggle="tab"
                      role="tab"
                    >
                      Map
                    </a>
                  </li>
                </ul>
                <div className="tab-content shadow-none py-7 px-6 bg-white">
                  <div id="collapse-tabs-accordion-01">
                    <div
                      className="tab-pane tab-pane-parent fade show active"
                      id="overview"
                      role="tabpanel"
                    >
                      <div className="card border-0 bg-transparent">
                        <div className="card-header border-0 d-block d-md-none bg-transparent px-0 py-1">
                          <h5 className="mb-0">
                            <button
                              className="btn lh-2 fs-18 bg-white py-1 px-6 mb-4 shadow-none w-100 collapse-parent border"
                              data-toggle="collapse"
                              data-target="#overview-collapse"
                              aria-expanded="true"
                              aria-controls="overview-collapse"
                            >
                              Overview
                            </button>
                          </h5>
                        </div>
                        <div
                          id="overview-collapse"
                          className="collapse show collapsible"
                          data-parent="#collapse-tabs-accordion-01"
                        >
                          <div className="card-body p-0">
                            <h2 className="card-title fs-22 lh-15 mb-1 text-dark">
                              About EcoHouse Company
                            </h2>
                            <p className="card-text lh-214 mb-3">
                              Massa tempor nec feugiat nisl pretium. Egestas
                              fringilla phasellus faucibus scelerisque eleifend
                              donec. Porta nibh venenatis cras sed felis eget
                              velit aliquet. Neque volutpat ac tincidunt vitae
                              semper quis lectus. Turpis in eu mi bibendum neque
                              egestas congue quisque. Sed elementum tempus
                              egestas sed sed risus pretium quam. Dignissim
                              sodales ut eu sem. Nibh mauris cursus mattis mole
                              stie a iaculis at erat pellentesque. Id interdum
                              velit laoreet id donec ultrices tincidunt. Pelle
                              ntesque eu tincidunt tortor aliquam nulla facilisi
                              cras fermentum odio.{' '}
                            </p>
                            <p className="card-text lh-213 fs-16 font-weight-500 text-dark pl-lg-8 mb-6">
                              Donec ullamcorper nulla non metus auctor
                              fringilla. Curabitur blandit tempus porttitor.
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula, eget lacinia odio.
                            </p>
                            <p className="card-text mb-6 mb-md-0">
                              Massa tempor nec feugiat nisl pretium. Egestas
                              fringilla phasellus faucibus scelerisque eleifend
                              donec. Porta nibh venenatis cras sed felis eget
                              velit aliquet. Neque volutpat ac tincidunt vitae
                              semper quis lectus. Turpis in eu mi bibendum neque
                              egestas congue quisque. Nibh mauris cursus mattis
                              molestie a iaculis at erat pellentesque. Massa
                              tempor nec feugiat nisl pretium. Egestas fringilla
                              phasellus faucibus scelerisque eleifend donec.
                              Porta nibh venenatis cras sed felis eget velit
                              aliquet. Neque volutpat ac tincidunt vitae semper
                              quis lectus.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane tab-pane-parent fade"
                      id="listing"
                      role="tabpanel"
                    >
                      <div className="card border-0 bg-transparent">
                        <div className="card-header border-0 d-block d-md-none bg-transparent p-0">
                          <h5 className="mb-0">
                            <button
                              className="btn lh-2 fs-18 bg-white py-1 px-6 shadow-none w-100 collapse-parent border collapsed mb-4"
                              data-toggle="collapse"
                              data-target="#listing-collapse"
                              aria-expanded="true"
                              aria-controls="listing-collapse"
                            >
                              Listings
                            </button>
                          </h5>
                        </div>
                        <div
                          id="listing-collapse"
                          className="collapse collapsible pb-5 pb-md-0"
                          data-parent="#collapse-tabs-accordion-01"
                        >
                          <div className="card-body p-0">
                            <h2 className="card-title fs-22 lh-15 mb-3 text-dark">
                              Our Listing
                            </h2>
                            <ul
                              className="nav nav-pills text-capitalize nav-pills-01 mx-n5"
                              role="tablist"
                            >
                              <li className="nav-item px-3 px-sm-6 py-1">
                                <a
                                  href="#all"
                                  className="nav-link active shadow-none nested-nav-link bg-transparent p-0 letter-spacing-1"
                                  data-toggle="pill"
                                  role="tab"
                                >
                                  All (6)
                                </a>
                              </li>
                              <li className="nav-item ml-0 px-3 px-sm-6 py-1">
                                <a
                                  href="#sale"
                                  className="nav-link shadow-none nested-nav-link bg-transparent p-0 letter-spacing-1"
                                  data-toggle="pill"
                                  role="tab"
                                >
                                  For Sale (3)
                                </a>
                              </li>
                              <li className="nav-item ml-0 px-3 px-sm-6 py-1">
                                <a
                                  href="#rent"
                                  className="nav-link shadow-none nested-nav-link bg-transparent p-0 letter-spacing-1"
                                  data-toggle="pill"
                                  role="tab"
                                >
                                  For Rent (3)
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content shadow-none pt-5 pb-0 px-0 bg-white">
                              <div
                                className="tab-pane nested-tab-pane fade show active"
                                id="all"
                                role="tabpanel"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-35.jpg"
                                          alt="Home in Metric Way"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-primary">
                                              For Sale
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Home in Metric Way
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-36.jpg"
                                          alt="Villa on Hollywood Boulevard"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-indigo">
                                              for Rent
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Villa on Hollywood Boulevard
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $550
                                          <span className="fs-14 font-weight-500 text-gray-light">
                                            {' '}
                                            /month
                                          </span>
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-37.jpg"
                                          alt="Affordable Urban House"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-primary">
                                              For Sale
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Affordable Urban House
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-73.jpg"
                                          alt="Explore Old Barcelona"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-indigo">
                                              for Rent
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Explore Old Barcelona
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                          <span className="fs-14 font-weight-500 text-gray-light">
                                            {' '}
                                            /month
                                          </span>
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-67.jpg"
                                          alt="Home in Metric Way"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-primary">
                                              For Sale
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Home in Metric Way
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-68.jpg"
                                          alt="Garden Gingerbread House"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-indigo">
                                              for Rent
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Garden Gingerbread House
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $550
                                          <span className="fs-14 font-weight-500 text-gray-light">
                                            {' '}
                                            /month
                                          </span>
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href="#"
                                  className="btn btn-lg text-heading bg-hover-light border px-5"
                                >
                                  View more{' '}
                                  <span className="text-primary fs-15 lh-1 text-primary d-inline-block ml-2">
                                    <i className="fal fa-long-arrow-down" />
                                  </span>{' '}
                                </a>
                              </div>
                              <div
                                className="tab-pane nested-tab-pane fade"
                                id="sale"
                                role="tabpanel"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-35.jpg"
                                          alt="Home in Metric Way"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-primary">
                                              For Sale
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Home in Metric Way
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-37.jpg"
                                          alt="Affordable Urban House"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-primary">
                                              For Sale
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Affordable Urban House
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-67.jpg"
                                          alt="Home in Metric Way"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-primary">
                                              For Sale
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Home in Metric Way
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane nested-tab-pane fade"
                                id="rent"
                                role="tabpanel"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-36.jpg"
                                          alt="Villa on Hollywood Boulevard"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-indigo">
                                              for Rent
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Villa on Hollywood Boulevard
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $550
                                          <span className="fs-14 font-weight-500 text-gray-light">
                                            {' '}
                                            /month
                                          </span>
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-73.jpg"
                                          alt="Explore Old Barcelona"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-indigo">
                                              for Rent
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Explore Old Barcelona
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $1.250.000
                                          <span className="fs-14 font-weight-500 text-gray-light">
                                            {' '}
                                            /month
                                          </span>
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-4 mb-7">
                                    <div className="card border-0">
                                      <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                        <img
                                          src="/images/properties-grid-68.jpg"
                                          alt="Garden Gingerbread House"
                                        />
                                        <div className="card-img-overlay d-flex flex-column">
                                          <div className="mb-auto">
                                            <span className="badge badge-indigo">
                                              for Rent
                                            </span>
                                          </div>
                                          <div className="d-flex hover-image">
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-auto">
                                              <li
                                                className="list-inline-item mr-2"
                                                data-toggle="tooltip"
                                                title="9 Images"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-images" />
                                                  <span className="pl-1">
                                                    9
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                title="2 Video"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white hover-primary"
                                                >
                                                  <i className="far fa-play-circle" />
                                                  <span className="pl-1">
                                                    2
                                                  </span>
                                                </a>
                                              </li>
                                            </ul>
                                            <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="far fa-heart" />
                                                </a>
                                              </li>
                                              <li
                                                className="list-inline-item mr-3 h-32"
                                                data-toggle="tooltip"
                                                title="Compare"
                                              >
                                                <a
                                                  href="#"
                                                  className="text-white fs-20 hover-primary"
                                                >
                                                  <i className="fas fa-exchange-alt" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-3 px-0 pb-1">
                                        <h2 className="fs-16 mb-1">
                                          <a
                                            href="single-property-1.html"
                                            className="text-dark hover-primary"
                                          >
                                            Garden Gingerbread House
                                          </a>
                                        </h2>
                                        <p className="font-weight-500 text-gray-light mb-0">
                                          1421 San Pedro St, Los Angeles
                                        </p>
                                        <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                                          $550
                                          <span className="fs-14 font-weight-500 text-gray-light">
                                            {' '}
                                            /month
                                          </span>
                                        </p>
                                      </div>
                                      <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                                        <ul className="list-inline mb-0">
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Br"
                                          >
                                            <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-bedroom" />
                                            </svg>
                                            3 Br
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                                            data-toggle="tooltip"
                                            title="3 Ba"
                                          >
                                            <svg className="icon icon-shower fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-shower" />
                                            </svg>
                                            3 Ba
                                          </li>
                                          <li
                                            className="list-inline-item text-gray font-weight-500 fs-13"
                                            data-toggle="tooltip"
                                            title="2300 Sq.Ft"
                                          >
                                            <svg className="icon icon-square fs-18 text-primary mr-1">
                                              <use xlinkHref="#icon-square" />
                                            </svg>
                                            2300 Sq.Ft
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane tab-pane-parent fade"
                      id="agents"
                      role="tabpanel"
                    >
                      <div className="card border-0 bg-transparent">
                        <div className="card-header border-0 d-block d-md-none bg-transparent p-0">
                          <h5 className="mb-0">
                            <button
                              className="btn lh-2 fs-18 bg-white py-1 px-6 shadow-none w-100 collapse-parent border collapsed mb-4"
                              data-toggle="collapse"
                              data-target="#agents-collapse"
                              aria-expanded="true"
                              aria-controls="agents-collapse"
                            >
                              Agents
                            </button>
                          </h5>
                        </div>
                        <div
                          id="agents-collapse"
                          className="collapse collapsible pb-5 pb-md-0"
                          data-parent="#collapse-tabs-accordion-01"
                        >
                          <div className="card-body p-0">
                            <h2 className="card-title fs-22 lh-15 mb-6 text-dark">
                              Our Agents
                            </h2>
                            <div className="d-flex flex-wrap listing-agents">
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-1.jpg"
                                      className="mb-2"
                                      alt="Oliver Beddows"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Oliver Beddows
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-30.jpg"
                                      className="mb-2"
                                      alt="Christopher Stevenson"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Christopher Stevenson
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-31.jpg"
                                      className="mb-2"
                                      alt="Kenneth Floyd"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Kenneth Floyd
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-43.jpg"
                                      className="mb-2"
                                      alt="Oscar Austin"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Oscar Austin
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-44.jpg"
                                      className="mb-2"
                                      alt="Danny Webb"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Danny Webb
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-32.jpg"
                                      className="mb-2"
                                      alt="Landon Allison"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Landon Allison
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-33.jpg"
                                      className="mb-2"
                                      alt="Irene Wallace"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Irene Wallace
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-34.jpg"
                                      className="mb-2"
                                      alt="Tillie Clark"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Tillie Clark
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-45.jpg"
                                      className="mb-2"
                                      alt="Martin Fletcher"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Martin Fletcher
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                              <div className="card border-0 px-7 mb-8">
                                <div className="card-body p-0 text-center">
                                  <a
                                    href="agent-details-1.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      src="/images/agent-46.jpg"
                                      className="mb-2"
                                      alt="Chase Tucker"
                                    />
                                  </a>
                                  <a
                                    href="agent-details-1.html"
                                    className="card-title d-block text-dark fs-16 font-weight-500 lh-2 hover-primary mb-0"
                                  >
                                    Chase Tucker
                                  </a>
                                  <p className="card-text">Sales Excutive</p>
                                </div>
                              </div>
                            </div>
                            <a
                              href="#"
                              className="btn btn-lg text-heading bg-hover-light border px-5"
                            >
                              View more{' '}
                              <span className="text-primary fs-15 lh-1 text-primary d-inline-block ml-2">
                                <i className="fal fa-long-arrow-down" />
                              </span>{' '}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane tab-pane-parent fade"
                      id="reviews"
                      role="tabpanel"
                    >
                      <div className="card border-0 bg-transparent">
                        <div className="card-header border-0 d-block d-md-none bg-transparent p-0">
                          <h5 className="mb-0">
                            <button
                              className="btn lh-2 fs-18 bg-white py-1 px-6 shadow-none w-100 collapse-parent border collapsed mb-4"
                              data-toggle="collapse"
                              data-target="#reviews-collapse"
                              aria-expanded="true"
                              aria-controls="reviews-collapse"
                            >
                              Reviews
                            </button>
                          </h5>
                        </div>
                        <div
                          id="reviews-collapse"
                          className="collapse collapsible pb-6 pb-md-0"
                          data-parent="#collapse-tabs-accordion-01"
                        >
                          <div className="card-body p-0">
                            <h2 className="fs-22 text-heading lh-15 mb-6">
                              Agency Rating &amp; Reviews{' '}
                            </h2>
                            <div className="row mb-6">
                              <div className="col-sm-6 mb-6 mb-sm-0">
                                <h5 className="fs-16 lh-2 text-heading mb-6">
                                  Avarage User Rating
                                </h5>
                                <p className="fs-40 text-heading font-weight-bold mb-6 lh-1">
                                  4.6{' '}
                                  <span className="fs-18 text-gray-light font-weight-normal">
                                    /5
                                  </span>
                                </p>
                                <ul className="list-inline">
                                  <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="list-inline-item bg-warning text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                    <i className="fas fa-star" />
                                  </li>
                                  <li className="list-inline-item bg-gray-04 text-white w-46px h-46 rounded-lg d-inline-flex align-items-center justify-content-center fs-18 mb-1">
                                    <i className="fas fa-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-6">
                                <h5 className="fs-16 lh-2 text-heading mb-5">
                                  Rating Breakdown
                                </h5>
                                <div className="d-flex align-items-center mx-n1">
                                  <ul className="list-inline d-flex px-1 mb-0">
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                  </ul>
                                  <div className="d-block w-100 px-1">
                                    <div className="progress rating-progress">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: '60%' }}
                                        aria-valuenow={60}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                  <div className="text-muted px-1">60%</div>
                                </div>
                                <div className="d-flex align-items-center mx-n1">
                                  <ul className="list-inline d-flex px-1 mb-0">
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                  </ul>
                                  <div className="d-block w-100 px-1">
                                    <div className="progress rating-progress">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: '40%' }}
                                        aria-valuenow={40}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                  <div className="text-muted px-1">40%</div>
                                </div>
                                <div className="d-flex align-items-center mx-n1">
                                  <ul className="list-inline d-flex px-1 mb-0">
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                  </ul>
                                  <div className="d-block w-100 px-1">
                                    <div className="progress rating-progress">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow={0}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                  <div className="text-muted px-1">0%</div>
                                </div>
                                <div className="d-flex align-items-center mx-n1">
                                  <ul className="list-inline d-flex px-1 mb-0">
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                  </ul>
                                  <div className="d-block w-100 px-1">
                                    <div className="progress rating-progress">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow={0}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                  <div className="text-muted px-1">0%</div>
                                </div>
                                <div className="d-flex align-items-center mx-n1">
                                  <ul className="list-inline d-flex px-1 mb-0">
                                    <li className="list-inline-item text-warning mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li className="list-inline-item text-border mr-1">
                                      <i className="fas fa-star" />
                                    </li>
                                  </ul>
                                  <div className="d-block w-100 px-1">
                                    <div className="progress rating-progress">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow={0}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </div>
                                  <div className="text-muted px-1">0%</div>
                                </div>
                              </div>
                            </div>
                            <h3 className="fs-16 lh-2 text-heading mb-6">
                              67 Reviews
                            </h3>
                            <div className="row border-bottom mb-6 pb-6 mb-6">
                              <div className="col-md-3 mb-4 mb-md-0">
                                <div className="media">
                                  <div className="w-70px h-70 mr-2">
                                    <img
                                      src="/images/review-06.jpg"
                                      alt="Dollie Horton"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <p className="fs-16 font-weight-500 text-heading mb-0 lh-15">
                                      Dollie Horton
                                    </p>
                                    <p className=" mb-0">San Diego</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="d-flex mb-1">
                                  <ul className="list-inline mb-2 mb-lg-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                      <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                  <p className="ml-auto mb-0 text-muted">
                                    02 Dec 2016 at 2:40pm
                                  </p>
                                </div>
                                <p className="mb-0">
                                  Very good and fast support during the week.
                                  Thanks for always keeping your WordPress
                                  themes up to date. Your level of support and
                                  dedication is second to none. Solved all my
                                  problems in a pressing time! Excited to see
                                  the other themes they make!
                                </p>
                              </div>
                            </div>
                            <div className="row border-bottom mb-6 pb-6 mb-6">
                              <div className="col-md-3 mb-4 mb-md-0">
                                <div className="media">
                                  <div className="w-70px h-70 mr-2">
                                    <img
                                      src="/images/review-01.jpg"
                                      alt="Dollie Horton"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <p className="fs-16 font-weight-500 text-heading mb-0 lh-15">
                                      Dollie Horton
                                    </p>
                                    <p className=" mb-0">San Diego</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="d-flex mb-1">
                                  <ul className="list-inline mb-2 mb-lg-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                      <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                  <p className="ml-auto mb-0 text-muted">
                                    02 Dec 2016 at 2:40pm
                                  </p>
                                </div>
                                <p className="mb-0">
                                  Very good and fast support during the week.
                                  Thanks for always keeping your WordPress
                                  themes up to date. Your level of support and
                                  dedication is second to none. Solved all my
                                  problems in a pressing time! Excited to see
                                  the other themes they make!
                                </p>
                              </div>
                            </div>
                            <div className="row border-bottom mb-6 pb-6 mb-6">
                              <div className="col-md-3 mb-4 mb-md-0">
                                <div className="media">
                                  <div className="w-70px h-70 mr-2 bg-gray-01 rounded-circle fs-18 text-muted d-flex align-items-center justify-content-center">
                                    DH
                                  </div>
                                  <div className="media-body">
                                    <p className="fs-16 font-weight-500 text-heading mb-0 lh-15">
                                      Dollie Horton
                                    </p>
                                    <p className=" mb-0">San Diego</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="d-flex mb-1">
                                  <ul className="list-inline mb-2 mb-lg-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                      <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                  <p className="ml-auto mb-0 text-muted">
                                    02 Dec 2016 at 2:40pm
                                  </p>
                                </div>
                                <p className="mb-0">
                                  Very good and fast support during the week.
                                  Thanks for always keeping your WordPress
                                  themes up to date. Your level of support and
                                  dedication is second to none. Solved all my
                                  problems in a pressing time! Excited to see
                                  the other themes they make!
                                </p>
                              </div>
                            </div>
                            <div className="row  pb-6 mb-6">
                              <div className="col-md-3 mb-4 mb-md-0">
                                <div className="media">
                                  <div className="w-70px h-70 mr-2">
                                    <img
                                      src="/images/review-02.jpg"
                                      alt="Dollie Horton"
                                    />
                                  </div>
                                  <div className="media-body">
                                    <p className="fs-16 font-weight-500 text-heading mb-0 lh-15">
                                      Dollie Horton
                                    </p>
                                    <p className=" mb-0">San Diego</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="d-flex mb-1">
                                  <ul className="list-inline mb-2 mb-lg-0">
                                    <li className="list-inline-item fs-13 text-heading font-weight-500 mr-1">
                                      <ul className="list-inline mb-0">
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                        <li className="list-inline-item mr-0">
                                          <span className="text-warning fs-12 lh-2">
                                            <i className="fas fa-star" />
                                          </span>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                  <p className="ml-auto mb-0 text-muted">
                                    02 Dec 2016 at 2:40pm
                                  </p>
                                </div>
                                <p className="mb-0">
                                  Very good and fast support during the week.
                                  Thanks for always keeping your WordPress
                                  themes up to date. Your level of support and
                                  dedication is second to none. Solved all my
                                  problems in a pressing time! Excited to see
                                  the other themes they make!
                                </p>
                              </div>
                            </div>
                            <a
                              href="#"
                              className="btn btn-lg text-heading bg-hover-light border fs-14 px-5 mb-6"
                            >
                              View more{' '}
                              <span className="text-primary fs-15 text-primary d-inline-block ml-2">
                                <i className="fal fa-long-arrow-down" />
                              </span>{' '}
                            </a>
                            <h3 className="fs-16 lh-2 text-heading mb-4">
                              Write A Review
                            </h3>
                            <form>
                              <div className="form-group mb-4 d-flex justify-content-start">
                                <div className="rate-input">
                                  <input
                                    type="radio"
                                    id="star5"
                                    name="rate"
                                    defaultValue={5}
                                  />
                                  <label
                                    htmlFor="star5"
                                    title="text"
                                    className="mb-0 mr-1 lh-1"
                                  >
                                    <i className="fas fa-star" />
                                  </label>
                                  <input
                                    type="radio"
                                    id="star4"
                                    name="rate"
                                    defaultValue={4}
                                  />
                                  <label
                                    htmlFor="star4"
                                    title="text"
                                    className="mb-0 mr-1 lh-1"
                                  >
                                    <i className="fas fa-star" />
                                  </label>
                                  <input
                                    type="radio"
                                    id="star3"
                                    name="rate"
                                    defaultValue={3}
                                  />
                                  <label
                                    htmlFor="star3"
                                    title="text"
                                    className="mb-0 mr-1 lh-1"
                                  >
                                    <i className="fas fa-star" />
                                  </label>
                                  <input
                                    type="radio"
                                    id="star2"
                                    name="rate"
                                    defaultValue={2}
                                  />
                                  <label
                                    htmlFor="star2"
                                    title="text"
                                    className="mb-0 mr-1 lh-1"
                                  >
                                    <i className="fas fa-star" />
                                  </label>
                                  <input
                                    type="radio"
                                    id="star1"
                                    name="rate"
                                    defaultValue={1}
                                  />
                                  <label
                                    htmlFor="star1"
                                    title="text"
                                    className="mb-0 mr-1 lh-1"
                                  >
                                    <i className="fas fa-star" />
                                  </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="form-group mb-4">
                                    <input
                                      placeholder="Your Name"
                                      className="form-control form-control-lg border-0"
                                      type="text"
                                      name="name"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group mb-4">
                                    <input
                                      type="email"
                                      placeholder="Email"
                                      name="email"
                                      className="form-control form-control-lg border-0"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group mb-6">
                                <textarea
                                  className="form-control border-0"
                                  placeholder="Your Review"
                                  name="message"
                                  rows={5}
                                  defaultValue={''}
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-lg btn-primary px-9"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane tab-pane-parent fade"
                      id="agency-map"
                      role="tabpanel"
                    >
                      <div className="card border-0 bg-transparent">
                        <div className="card-header border-0 d-block d-md-none bg-transparent p-0">
                          <h5 className="mb-0">
                            <button
                              className="btn lh-2 fs-18 bg-white py-1 px-6 shadow-none w-100 collapse-parent border collapsed mb-4"
                              data-toggle="collapse"
                              data-target="#map-collapse"
                              aria-expanded="true"
                              aria-controls="map-collapse"
                            >
                              Map
                            </button>
                          </h5>
                        </div>
                        <div
                          id="map-collapse"
                          className="collapse collapsible"
                          data-parent="#collapse-tabs-accordion-01"
                        >
                          <div className="card-body p-0">
                            <h2 className="card-title fs-22 lh-15 mb-1 text-dark">
                              Visit our office
                            </h2>
                            <p className="card-text mb-7">
                              2005 Stokes Isle Apt. 896, Venaville, New York
                            </p>
                            <div
                              id="map"
                              className="mapbox-gl map-point-animate"
                              style={{ height: 470 }}
                              data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ"
                              data-mapbox-options='{"center":[-73.9927227, 40.6741035],"setLngLat":[-73.9927227, 40.6741035]}'
                              data-mapbox-marker='[{"position":[-73.9927227, 40.6741035],"className":"marker","backgroundImage":"images/googlle-market-01.png","backgroundRepeat":"no-repeat","width":"30px","height":"40px"}]'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bottom-bar-action py-2 px-4 bg-gray-01 position-fixed fixed-bottom d-block d-sm-none">
          <div className="container">
            <div className="row no-gutters mx-n2 mxw-571 mx-auto">
              <div className="col-6 px-2">
                <a
                  href="#modal-messenger"
                  data-toggle="modal"
                  className="btn btn-primary btn-lg btn-block fs-14 px-1 py-3 h-auto lh-13"
                >
                  Send Message
                </a>
              </div>
              <div className="col-6 px-2">
                <a
                  href="tel:(+84)2388-969-888"
                  className="btn btn-primary btn-lg btn-block fs-14 px-1 py-3 h-auto lh-13"
                >
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-messenger"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <h4 className="modal-title text-heading" id="exampleModalLabel">
                  Contact Form
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body pb-6">
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control form-control-lg border-0"
                    placeholder="First Name, Last Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="email"
                    className="form-control form-control-lg border-0"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="tel"
                    className="form-control form-control-lg border-0"
                    placeholder="Your phone"
                  />
                </div>
                <div className="form-group mb-2">
                  <textarea
                    className="form-control border-0"
                    rows={4}
                    defaultValue={
                      "Hello, I'm interested in Villa Called Archangel"
                    }
                  />
                </div>
                <div className="form-group form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck3"
                  />
                  <label
                    className="form-check-label fs-13"
                    htmlFor="exampleCheck3"
                  >
                    Egestas fringilla phasellus faucibus scelerisque eleifend
                    donec.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block rounded"
                >
                  Request Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark pt-8 pb-6 footer text-muted">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
              <a className="d-block mb-2" href="#">
                <img src="/images/logo-white-primary.png" alt="HomeID" />
              </a>
              <div className="lh-26 font-weight-500">
                <p className="mb-0">58 Howard Street #2 San Francisco</p>
                <a
                  className="d-block text-muted hover-white"
                  href="mailto:contact@homeid.com"
                >
                  contact@homeid.com
                </a>
                <a
                  className="d-block text-lighter font-weight-bold fs-15 hover-white"
                  href="tel:(+68)122109876"
                >
                  (+68)1221 09876
                </a>
                <a className="d-block text-muted hover-white" href=".">
                  www.homeid.com
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
              <h4 className="text-white fs-16 my-4 font-weight-500">
                Popular Searches
              </h4>
              <ul className="list-group list-group-flush list-group-no-border">
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Apartment for Rent
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Apartment Low to hide
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Offices for Buy
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Offices for Rent
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
              <h4 className="text-white fs-16 my-4 font-weight-500">
                Quick links
              </h4>
              <ul className="list-group list-group-flush list-group-no-border">
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Contact Support
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 hover-white font-weight-500"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
              <h4 className="text-white fs-16 my-4 font-weight-500">
                Sign Up for Our Newsletter
              </h4>
              <p className="font-weight-500 text-muted lh-184">
                Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
                suscipit sagittis{' '}
              </p>
              <form>
                <div className="input-group input-group-lg mb-6">
                  <input
                    type="text"
                    name="email"
                    required=""
                    className="form-control bg-white shadow-none border-0 z-index-1"
                    placeholder="Your email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-skype" />
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-0 mt-md-10 row">
            <ul className="list-inline mb-0 col-md-6 mr-auto">
              <li className="list-inline-item mr-6">
                <a
                  href="#"
                  className="text-muted lh-26 font-weight-500 hover-white"
                >
                  Terms of Use
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-muted lh-26 font-weight-500 hover-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <p className="col-md-auto mb-0 text-muted">
              © 2020 homeID. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Agency
