const AboutUs = () => {
  return (
    <>
      <header className="main-header navbar-light header-sticky header-sticky-smart header-mobile-lg">
        <div className="sticky-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg px-0">
              <a className="navbar-brand" href="index.html">
                <img
                  src="images/logo.png"
                  alt="HomeID"
                  className="d-none d-lg-inline-block"
                />
                <img
                  src="images/logo-white.png"
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
                          id="navbar-link-home-2"
                          className="dropdown-link"
                          href="home-2.html"
                        >
                          Home 2
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
                      <li className="dropdown-item active">
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
                          <li className="dropdown-item">
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
        <section className="bg-secondary">
          <div className="container">
            <form className="property-search d-none d-lg-block">
              <div className="row align-items-lg-center" id="accordion-2">
                <div className="col-xl-2 col-lg-3 col-md-4">
                  <div className="property-search-status-tab d-flex flex-row">
                    <input
                      className="search-field"
                      type="hidden"
                      name="status"
                      defaultValue="for-rent"
                      data-default-value=""
                    />
                    <button
                      type="button"
                      data-value="for-rent"
                      className="btn shadow-none btn-active-primary text-white rounded-0 hover-white text-uppercase h-lg-80 border-right-0 border-top-0 border-bottom-0 border-left border-white-opacity-03 active flex-md-1"
                    >
                      Rent
                    </button>
                    <button
                      type="button"
                      data-value="for-sale"
                      className="btn shadow-none btn-active-primary text-white rounded-0 hover-white text-uppercase h-lg-80 border-left-0 border-top-0 border-bottom-0 border-right border-white-opacity-03 flex-md-1"
                    >
                      Sale
                    </button>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 d-md-flex">
                  <select
                    className="form-control shadow-none form-control-lg selectpicker rounded-right-md-0 rounded-md-top-left-0 rounded-lg-top-left flex-md-1 mt-3 mt-md-0"
                    title="All Types"
                    data-style="btn-lg py-2 h-52 border-right bg-white"
                    id="type-1"
                    name="type"
                  >
                    <option>Condominium</option>
                    <option>Single-Family Home</option>
                    <option>Townhouse</option>
                    <option>Multi-Family Home</option>
                  </select>
                  <div className="form-group mb-0 position-relative flex-md-3 mt-3 mt-md-0">
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 shadow-none rounded-left-md-0 pr-8 bg-white placeholder-muted"
                      id="key-word-1"
                      name="key-word"
                      placeholder="Enter an address, neighbourhood..."
                    />
                    <button
                      type="submit"
                      className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 mr-4 shadow-none"
                    >
                      <i className="far fa-search" />
                    </button>
                  </div>
                </div>
                <div className="col-lg-2">
                  <a
                    href="#advanced-search-filters-2"
                    className="icon-primary btn advanced-search w-100 shadow-none text-white text-left rounded-0 fs-14 font-weight-600 position-relative collapsed px-0 d-flex align-items-center"
                    data-toggle="collapse"
                    data-target="#advanced-search-filters-2"
                    aria-expanded="true"
                    aria-controls="advanced-search-filters-2"
                  >
                    Advanced Search
                  </a>
                </div>
                <div
                  id="advanced-search-filters-2"
                  className="col-12 pb-6 pt-lg-2 collapse"
                  data-parent="#accordion-2"
                >
                  <div className="row mx-n2">
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="status"
                        title="Status"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All status</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="bedroom"
                        title="Bedrooms"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="bathrooms"
                        title="Bathrooms"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        title="All Cities"
                        data-style="btn-lg py-2 h-52 bg-white"
                        name="city"
                      >
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>San Diego</option>
                        <option>Las Vegas</option>
                        <option>Las Vegas</option>
                        <option>Atlanta</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="areas"
                        title="All Areas"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All Areas</option>
                        <option>Albany Park</option>
                        <option>Altgeld Gardens</option>
                        <option>Andersonville</option>
                        <option>Beverly</option>
                        <option>Brickel</option>
                        <option>Central City</option>
                        <option>Coconut Grove</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 pt-4 px-2">
                      <input
                        type="text"
                        className="form-control form-control-lg border-0 shadow-none bg-white"
                        placeholder="Property ID"
                        name="property-id"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-5 pt-6 slider-range slider-range-primary">
                      <label htmlFor="price-2" className="mb-4 text-white">
                        Price Range
                      </label>
                      <div
                        data-slider="true"
                        data-slider-options='{"min":0,"max":1000000,"values":[100000,700000],"type":"currency"}'
                      />
                      <div className="text-center mt-2">
                        <input
                          id="price-2"
                          type="text"
                          readOnly=""
                          className="border-0 amount text-center text-white bg-transparent font-weight-500"
                          name="price"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5 pt-6 slider-range slider-range-primary offset-lg-1">
                      <label htmlFor="area-size-2" className="mb-4 text-white">
                        Area Size
                      </label>
                      <div
                        data-slider="true"
                        data-slider-options='{"min":0,"max":15000,"values":[0,12000],"type":"currency"}'
                      />
                      <div className="text-center mt-2">
                        <input
                          id="area-size-2"
                          type="text"
                          readOnly=""
                          className="border-0 amount text-center text-white bg-transparent font-weight-500"
                          name="area"
                        />
                      </div>
                    </div>
                    <div className="col-12 pt-4 pb-2">
                      <a
                        className="lh-17 d-inline-block other-feature collapsed"
                        data-toggle="collapse"
                        href="#other-feature-2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="other-feature-2"
                      >
                        <span className="fs-15 text-white font-weight-500 hover-primary">
                          Other Features
                        </span>
                      </a>
                    </div>
                    <div className="collapse row mx-0" id="other-feature-2">
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check1-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check1-2"
                          >
                            Air Conditioning
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check2-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check2-2"
                          >
                            Laundry
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check4-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check4-2"
                          >
                            Washer
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check5-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check5-2"
                          >
                            Barbeque
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check6-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check6-2"
                          >
                            Lawn
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check7-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check7-2"
                          >
                            Sauna
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check8-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check8-2"
                          >
                            WiFi
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check9-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check9-2"
                          >
                            Dryer
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check10-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check10-2"
                          >
                            Microwave
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check11-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check11-2"
                          >
                            Swimming Pool
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check12-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check12-2"
                          >
                            Window Coverings
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check13-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check13-2"
                          >
                            Gym
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check14-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check14-2"
                          >
                            Outdoor Shower
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check15-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check15-2"
                          >
                            TV Cable
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check16-2"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check16-2"
                          >
                            Refrigerator
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form className="property-search property-search-mobile d-lg-none py-6">
              <div
                className="row align-items-lg-center"
                id="accordion-2-mobile"
              >
                <div className="col-12">
                  <div className="form-group mb-0 position-relative">
                    <a
                      href="#advanced-search-filters-2-mobile"
                      className="icon-primary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed"
                      data-toggle="collapse"
                      data-target="#advanced-search-filters-2-mobile"
                      aria-expanded="true"
                      aria-controls="advanced-search-filters-2-mobile"
                    ></a>
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 shadow-none pr-9 pl-11 bg-white placeholder-muted"
                      name="key-word"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left bg-white"
                    >
                      <i className="far fa-search" />
                    </button>
                  </div>
                </div>
                <div
                  id="advanced-search-filters-2-mobile"
                  className="col-12 pt-2 collapse"
                  data-parent="#accordion-2-mobile"
                >
                  <div className="row mx-n2">
                    <div className="col-sm-6 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        title="Select"
                        data-style="btn-lg py-2 h-52 bg-white"
                        name="type"
                      >
                        <option>All status</option>
                        <option>For Rent</option>
                        <option>For Sale</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        title="All Types"
                        data-style="btn-lg py-2 h-52 bg-white"
                        name="type"
                      >
                        <option>Condominium</option>
                        <option>Single-Family Home</option>
                        <option>Townhouse</option>
                        <option>Multi-Family Home</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="bedroom"
                        title="Bedrooms"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="bathrooms"
                        title="Bathrooms"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All Bathrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        title="All Cities"
                        data-style="btn-lg py-2 h-52 bg-white"
                        name="city"
                      >
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                        <option>San Diego</option>
                        <option>Las Vegas</option>
                        <option>Las Vegas</option>
                        <option>Atlanta</option>
                      </select>
                    </div>
                    <div className="col-sm-6 pt-4 px-2">
                      <select
                        className="form-control border-0 shadow-none form-control-lg selectpicker bg-white"
                        name="areas"
                        title="All Areas"
                        data-style="btn-lg py-2 h-52 bg-white"
                      >
                        <option>All Areas</option>
                        <option>Albany Park</option>
                        <option>Altgeld Gardens</option>
                        <option>Andersonville</option>
                        <option>Beverly</option>
                        <option>Brickel</option>
                        <option>Central City</option>
                        <option>Coconut Grove</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pt-6 slider-range slider-range-primary">
                      <label
                        htmlFor="price-2-mobile"
                        className="mb-4 text-white"
                      >
                        Price Range
                      </label>
                      <div
                        data-slider="true"
                        data-slider-options='{"min":0,"max":1000000,"values":[100000,700000],"type":"currency"}'
                      />
                      <div className="text-center mt-2">
                        <input
                          id="price-2-mobile"
                          type="text"
                          readOnly=""
                          className="border-0 amount text-center text-white bg-transparent font-weight-500"
                          name="price"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pt-6 slider-range slider-range-primary">
                      <label
                        htmlFor="area-size-2-mobile"
                        className="mb-4 text-white"
                      >
                        Area Size
                      </label>
                      <div
                        data-slider="true"
                        data-slider-options='{"min":0,"max":15000,"values":[0,12000],"type":"sqrt"}'
                      />
                      <div className="text-center mt-2">
                        <input
                          id="area-size-2-mobile"
                          type="text"
                          readOnly=""
                          className="border-0 amount text-center text-white bg-transparent font-weight-500"
                          name="area"
                        />
                      </div>
                    </div>
                    <div className="col-12 pt-4 pb-2">
                      <a
                        className="lh-17 d-inline-block other-feature collapsed"
                        data-toggle="collapse"
                        href="#other-feature-2-mobile"
                        role="button"
                        aria-expanded="false"
                        aria-controls="other-feature-2-mobile"
                      >
                        <span className="fs-15 text-white font-weight-500 hover-primary">
                          Other Features
                        </span>
                      </a>
                    </div>
                    <div
                      className="collapse row mx-0"
                      id="other-feature-2-mobile"
                    >
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check1-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check1-2-mobile"
                          >
                            Air Conditioning
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check2-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check2-2-mobile"
                          >
                            Laundry
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check4-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check4-2-mobile"
                          >
                            Washer
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check5-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check5-2-mobile"
                          >
                            Barbeque
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check6-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check6-2-mobile"
                          >
                            Lawn
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check7-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check7-2-mobile"
                          >
                            Sauna
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check8-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check8-2-mobile"
                          >
                            WiFi
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check9-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check9-2-mobile"
                          >
                            Dryer
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check10-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check10-2-mobile"
                          >
                            Microwave
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check11-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check11-2-mobile"
                          >
                            Swimming Pool
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check12-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check12-2-mobile"
                          >
                            Window Coverings
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check13-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check13-2-mobile"
                          >
                            Gym
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check14-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check14-2-mobile"
                          >
                            Outdoor Shower
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check15-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check15-2-mobile"
                          >
                            TV Cable
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 py-2">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="check16-2-mobile"
                            name="feature[]"
                          />
                          <label
                            className="custom-control-label text-white"
                            htmlFor="check16-2-mobile"
                          >
                            Refrigerator
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section
          style={{ backgroundImage: 'url("images/bg-about-us.jpg")' }}
          className="bg-img-cover-center py-10 pt-md-16 pb-md-17 bg-overlay"
        >
          <div className="container position-relative z-index-2 text-center">
            <a
              href="http://www.youtube.com/watch?v=0O2aH4XLbto"
              className="d-inline-block m-auto position-relative play-animation"
              data-gtf-mfp="true"
              data-mfp-options='{"type":"iframe"}'
            >
              <span className="text-white bg-primary w-78px h-78 rounded-circle d-flex align-items-center justify-content-center">
                <i className="fas fa-play" />
              </span>
            </a>
            <div className="mxw-751">
              <h1
                className="text-white fs-30 fs-md-42 lh-15 font-weight-normal mt-4 mb-10"
                data-animate="fadeInRight"
              >
                We believe in design as a powerful force for good.
              </h1>
            </div>
          </div>
        </section>
        <section className="bg-patten-03 bg-gray-01 pb-13">
          <div className="container">
            <div className="card border-0 mt-n13 z-index-3 mb-12">
              <div className="card-body p-6 px-lg-14 py-lg-13">
                <p className="letter-spacing-263 text-uppercase text-primary mb-6 font-weight-500 text-center">
                  welcome to grandhome
                </p>
                <h2 className="text-heading mb-4 fs-22 fs-md-32 text-center lh-16 px-6">
                  We see change as opportunity, not a threat and start with the
                  belief that there is a better way.{' '}
                </h2>
                <p className="text-center px-lg-11 fs-15 lh-17 mb-11">
                  Over the past 25 years we’ve created more than 5,000 new homes
                  and 1.5 million sq ft of workspace in over 60 regeneration
                  projects. Have a look at the short film below to learn more
                  about how we’ve achieved this and what drives us.
                </p>
                <p className="letter-spacing-263 text-uppercase mb-4 font-weight-500 text-center">
                  Jump to
                </p>
                <div className="d-flex flex-wrap justify-content-center">
                  <a
                    href="#"
                    className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary"
                  >
                    Leadership
                  </a>
                  <a
                    href="#"
                    className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary"
                  >
                    Offices Location
                  </a>
                  <a
                    href="#"
                    className="btn btn-lg bg-gray-01 text-body mr-4 mb-4 hover-primary"
                  >
                    Work with us
                  </a>
                </div>
              </div>
            </div>
            <h2 className="text-dark lh-1625 text-center mb-2 fs-22 fs-md-32">
              Our services
            </h2>
            <p className="mxw-751 text-center mb-1 px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <div className="row mt-8">
              <div className="col-md-4 mb-6 mb-lg-0">
                <div className="card shadow-2 px-7 pb-6 pt-4 h-100 border-0">
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <span className="text-primary fs-90 lh-1">
                      <svg className="icon icon-e1">
                        <use xlinkHref="#icon-e1" />
                      </svg>
                    </span>
                  </div>
                  <div className="card-body px-0 pt-6 pb-0 text-center">
                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">
                      Property Management
                    </h4>
                    <p className="card-text px-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-6 mb-lg-0">
                <div className="card shadow-2 px-7 pb-6 pt-4 h-100 border-0">
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <span className="text-primary fs-90 lh-1">
                      <svg className="icon icon-e2">
                        <use xlinkHref="#icon-e2" />
                      </svg>
                    </span>
                  </div>
                  <div className="card-body px-0 pt-6 pb-0 text-center">
                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">
                      Mortgage Service
                    </h4>
                    <p className="card-text px-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-6 mb-lg-0">
                <div className="card shadow-2 px-7 pb-6 pt-4 h-100 border-0">
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <span className="text-primary fs-90 lh-1">
                      <svg className="icon icon-e3">
                        <use xlinkHref="#icon-e3" />
                      </svg>
                    </span>
                  </div>
                  <div className="card-body px-0 pt-6 text-center pb-0">
                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">
                      Consulting Service
                    </h4>
                    <p className="card-text px-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container">
            <h2 className="text-dark lh-1625 text-center mb-2 fs-22 fs-md-32">
              Leadership
            </h2>
            <p className="mxw-751 text-center mb-1 px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <div className="row mx-lg-n6 mt-8">
              <div className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-01.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-22 text-heading lh-164 mb-0">
                      <a href="#" className="text-heading hover-primary">
                        Dollie Horton
                      </a>
                    </h3>
                    <p className="m-0">President &amp; CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-2.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-22 text-heading lh-164 mb-0">
                      <a href="#" className="text-heading hover-primary">
                        Dollie Horton
                      </a>
                    </h3>
                    <p className="m-0">Co-Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-03.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-22 text-heading lh-164 mb-0">
                      <a href="#" className="text-heading hover-primary">
                        Dollie Horton
                      </a>
                    </h3>
                    <p className="m-0">Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-04.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-16 text-heading mb-1 lh-2">
                      <a href="#" className="text-heading hover-primary">
                        Dollie Horton
                      </a>
                    </h3>
                    <p>Marketing Director</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-05.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-16 text-heading mb-1 lh-2">
                      <a href="#" className="text-heading hover-primary">
                        Dollie Horton
                      </a>
                    </h3>
                    <p>Project manager</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-06.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-16 text-heading mb-1 lh-2">
                      <a href="#" className="text-heading hover-primary">
                        Tom Sanders
                      </a>
                    </h3>
                    <p>Commercial Operations Director</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-0 mb-7">
                <div className="card border-0 our-team text-center">
                  <div className="rounded overflow-hidden bg-hover-overlay d-inline-block">
                    <img
                      className="card-img"
                      src="images/our-team-07.jpg"
                      alt="Dollie Horton"
                    />
                    <ul className="list-inline text-gray-lighter position-absolute w-100 m-0 p-0 z-index-2">
                      <li className="list-inline-item m-0">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item mr-0 ml-2">
                        <a
                          href="#"
                          className="w-32px h-32 rounded shadow-xxs-3 bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body pt-5">
                    <h3 className="fs-16 text-heading mb-1 lh-2">
                      <a href="#" className="text-heading hover-primary">
                        Dollie Horton
                      </a>
                    </h3>
                    <p>Head of Sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="position-relative">
              <div
                id="map"
                className="mapbox-gl map-point-animate"
                style={{ height: 550 }}
                data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ"
                data-mapbox-options='{"center":[-73.981566, 40.739011],"setLngLat":[-73.981566, 40.739011]}'
                data-mapbox-marker='[{"position":[-73.981566, 40.739011],"className":"marker","backgroundImage":"images/googlle-market-01.png","backgroundRepeat":"no-repeat","width":"32px","height":"40px"}]'
              />
              <div className="container">
                <div className="map-info position-absolute">
                  <div className="card border-0 shadow-xs-4">
                    <div className="card-body pl-7 pr-6 pt-7 pb-10">
                      <h4 className="fs-22 lh-238 mb-0">Offices Location</h4>
                      <p className="mb-8">
                        Lorem ipsum dolor sit amet, consec tetur cing elit.
                        Suspe ndisse suscorem ipsum dolor sit ametcipsum ipsumg
                        elit. consec tetur cing elitipsum dozlpsmg elit.
                      </p>
                      <h5 className="fs-16 lh-2 mb-0">Visit our office at</h5>
                      <p className="mb-0">
                        2005 Stokes Isle Apt. 896, Venaville, New York
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12">
          <div className="container">
            <h2 className="text-heading mb-4 fs-22 fs-md-32 text-center lh-16 px-md-13">
              GrandHome is an estate agency that helps people live in more
              thoughtful and beautiful ways.
            </h2>
            <p className="text-center px-md-17 fs-15 lh-17 mb-8">
              Our home is at the heart of the design, allowing us to engage with
              our community through talks and events, and uphold our company
              culture with film screenings, yoga classes and team lunches.
            </p>
            <div className="text-center mb-11">
              <a href="#" className="btn btn-lg btn-primary">
                Join our team
              </a>
            </div>
            <div className="row galleries mb-lg-n16">
              <div className="col-sm-8 mb-6">
                <div className="item item-size-2-1">
                  <a
                    href="images/gallery-lg-08.jpg"
                    className="card p-0 hover-zoom-in"
                    data-gtf-mfp="true"
                    data-gallery-id={2}
                  >
                    <div
                      className="card-img img"
                      style={{
                        backgroundImage: 'url("images/gallery-08.jpg")',
                      }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4 mb-6">
                <div className="item item-size-2-1">
                  <a
                    href="images/gallery-lg-09.jpg"
                    className="card p-0 hover-zoom-in"
                    data-gtf-mfp="true"
                    data-gallery-id={2}
                  >
                    <div
                      className="card-img img"
                      style={{
                        backgroundImage: 'url("images/gallery-09.jpg")',
                      }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 mb-6">
                <div className="item item-size-2-1">
                  <a
                    href="images/gallery-lg-10.jpg"
                    className="card p-0 hover-zoom-in"
                    data-gtf-mfp="true"
                    data-gallery-id={2}
                  >
                    <div
                      className="card-img img"
                      style={{
                        backgroundImage: 'url("images/gallery-10.jpg")',
                      }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 mb-6">
                <div className="item item-size-2-1">
                  <a
                    href="images/gallery-lg-11.jpg"
                    className="card p-0 hover-zoom-in"
                    data-gtf-mfp="true"
                    data-gallery-id={2}
                  >
                    <div
                      className="card-img img"
                      style={{
                        backgroundImage: 'url("images/gallery-11.jpg")',
                      }}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-01 pt-10 pt-lg-17 pb-10">
          <div className="container">
            <h2 className="text-dark lh-1625 text-center mb-8 fs-22 fs-md-32 pt-lg-10">
              Keep exploring
            </h2>
            <div className="row">
              <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                <a
                  href="agents-grid-with-sidebar.html"
                  className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1"
                >
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <img src="images/icon-box-4.png" alt="Meet our agents" />
                  </div>
                  <div className="card-body px-0 pt-2 pb-0 text-center">
                    <h4 className="card-title fs-16 lh-186 text-dark hover-primary">
                      Meet our agents
                    </h4>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                <a
                  href="dashboard-add-new-property.html"
                  className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1"
                >
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <img src="images/icon-box-5.png" alt="Sell your home" />
                  </div>
                  <div className="card-body px-0 pt-2 pb-0 text-center">
                    <h4 className="card-title fs-16 lh-186 text-dark hover-primary">
                      Sell your home
                    </h4>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                <a
                  href="blog-grid-with-sidebar.html"
                  className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1"
                >
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <img src="images/icon-box-6.png" alt="Latest news" />
                  </div>
                  <div className="card-body px-0 pt-2 text-center pb-0">
                    <h4 className="card-title fs-16 lh-186 text-dark hover-primary">
                      Latest news
                    </h4>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 mb-6 mb-lg-0">
                <a
                  href="contact-us-1.html"
                  className="card border-0 shadow-2 px-7 py-5 h-100 shadow-hover-lg-1"
                >
                  <div className="card-img-top d-flex align-items-end justify-content-center">
                    <img src="images/icon-box-7.png" alt="Contact us" />
                  </div>
                  <div className="card-body px-0 pt-2 text-center pb-0">
                    <h4 className="card-title fs-16 lh-186 text-dark hover-primary">
                      Contact us
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark pt-8 pb-6 footer text-muted">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
              <a className="d-block mb-2" href="#">
                <img src="images/logo-white-primary.png" alt="HomeID" />
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

export default AboutUs
