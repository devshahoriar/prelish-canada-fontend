const Home = () => {
  return (
    <>
      <header className="main-header position-absolute fixed-top m-0 navbar-dark header-sticky header-sticky-smart header-mobile-xl">
        <div className="sticky-area">
          <div className="container container-xxl">
            <div className="d-flex align-items-center">
              <nav className="navbar navbar-expand-xl bg-transparent px-0 w-100 w-xl-auto">
                <a className="navbar-brand mr-7" href="index.html">
                  <img
                    src="images/logo-white.png"
                    alt="HomeID"
                    className="normal-logo"
                  />
                  <img
                    src="images/logo.png"
                    alt="HomeID"
                    className="sticky-logo"
                  />
                </a>
                <a
                  className="d-block d-xl-none ml-auto mr-4 position-relative text-white p-2"
                  href="#"
                >
                  <i className="fal fa-heart fs-large-4"></i>
                  <span className="badge badge-primary badge-circle badge-absolute">
                    1
                  </span>
                </a>
                <button
                  className="navbar-toggler border-0 px-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#primaryMenu02"
                  aria-controls="primaryMenu02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="text-white fs-24">
                    <i className="fal fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse mt-3 mt-xl-0"
                  id="primaryMenu02"
                >
                  <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                    <li
                      id="navbar-item-home"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                    >
                      <a
                        className="nav-link dropdown-toggle p-0"
                        href="index.html"
                        data-toggle="dropdown"
                      >
                        Home
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu pt-3 pb-0 pb-xl-3"
                        aria-labelledby="navbar-item-home"
                      >
                        <li className="dropdown-item active">
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
                      id="navbar-item-listing"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                    >
                      <a
                        className="nav-link dropdown-toggle p-0"
                        href="listing.html"
                        data-toggle="dropdown"
                      >
                        Listing
                        <span className="caret"></span>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-xxl dropdown-menu-listing px-0 py-3"
                        aria-labelledby="navbar-item-listing"
                      >
                        <div className="dropdown-body">
                          <div className="row no-gutters">
                            <div className="col-xl-3">
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                List view
                              </h4>

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

                              <a
                                className="dropdown-item"
                                href="listing-with-right-sidebar.html"
                              >
                                List with right sidebar
                              </a>
                            </div>
                            <div className="col-xl-3">
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                Grid view
                              </h4>

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
                            <div className="col-xl-3">
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                Map style
                              </h4>

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
                            <div className="col-xl-3">
                              <h4 className="dropdown-header text-dark fs-16 mb-2">
                                Single Property
                              </h4>

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
                        </div>
                      </div>
                    </li>
                    <li
                      id="navbar-item-dashboard"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                    >
                      <a
                        className="nav-link dropdown-toggle p-0"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Dashboard
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu pt-3 pb-0 pb-xl-3"
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
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                    >
                      <a
                        className="nav-link dropdown-toggle p-0"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Pages
                        <span className="caret"></span>
                      </a>
                      <ul
                        className="dropdown-menu pt-3 pb-0 pb-xl-3"
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
                            className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
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
                              <a
                                className="dropdown-link"
                                href="blog-grid.html"
                              >
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
                            className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
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
                            className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
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
                            className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
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
                            className="dropdown-menu dropdown-submenu pt-3 pb-0 pb-xl-3"
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
                      className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                    >
                      <a
                        className="nav-link dropdown-toggle p-0"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Docs
                        <span className="caret"></span>
                      </a>
                      <div className="dropdown-menu px-0 pt-3 dropdown-menu-docs">
                        <div className="dropdown-body">
                          <a
                            className="dropdown-item py-1"
                            href="docs/getting-started/dev-environment-setup.html"
                          >
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-file-alt"></i>
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
                          <div className="dropdown-divider m-0"></div>
                          <a
                            className="dropdown-item py-1"
                            href="docs/content/typography.html"
                          >
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-layer-group"></i>
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
                          <div className="dropdown-divider m-0"></div>
                          <a
                            className="dropdown-item py-1"
                            href="docs/getting-started/changelog.html"
                          >
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-edit"></i>
                              </div>
                              <div className="media-body">
                                <span className="d-block lh-15">
                                  Changelog
                                  <span className="badge badge-success ml-2">
                                    v1.0.1
                                  </span>
                                </span>
                                <small className="d-block">
                                  Regular updates
                                </small>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-divider m-0"></div>
                          <a
                            className="dropdown-item py-1"
                            href="https://sp.g5plus.net/"
                            // target="_blank"
                          >
                            <div className="media">
                              <div className="fs-20 mr-3">
                                <i className="fal fa-life-ring"></i>
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
                  <div className="d-block d-xl-none">
                    <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                          href="#"
                          id="bd-versions-mobile"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          ENG
                        </a>
                        <div
                          className="dropdown-menu dropdown-sm dropdown-menu-left"
                          aria-labelledby="bd-versions-mobile"
                        >
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
                      <li className="divider"></li>
                      <li className="nav-item">
                        <a
                          className="nav-link pl-3 pr-2"
                          data-toggle="modal"
                          href="#login-register-modal"
                        >
                          SIGN IN
                        </a>
                      </li>
                      <li className="nav-item ml-auto w-100 w-sm-auto">
                        <a
                          className="btn btn-primary btn-lg"
                          href="dashboard-add-new-property.html"
                        >
                          Add listing
                          <img
                            src="images/add-listing-icon.png"
                            alt="Add listing"
                            className="ml-1"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="ml-auto d-none d-xl-block">
                <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                      href="#"
                      id="bd-versions"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      ENG
                    </a>
                    <div
                      className="dropdown-menu dropdown-sm dropdown-menu-right"
                      aria-labelledby="bd-versions"
                    >
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
                  <li className="divider"></li>
                  <li className="nav-item">
                    <a
                      className="nav-link pl-3 pr-2"
                      data-toggle="modal"
                      href="#login-register-modal"
                    >
                      SIGN IN
                    </a>
                  </li>
                  <li className="nav-item mr-auto mr-lg-6">
                    <a className="nav-link px-2 position-relative" href="#">
                      <i className="fal fa-heart fs-large-4"></i>
                      <span className="badge badge-primary badge-circle badge-absolute">
                        1
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="btn btn-outline-light btn-lg text-white rounded-lg bg-hover-primary border-hover-primary hover-white d-none d-lg-block"
                      href="dashboard-add-new-property.html"
                    >
                      Add listing
                      <img
                        src="images/add-listing-icon.png"
                        alt="Add listing"
                        className="ml-1 normal-button-icon"
                      />
                      <img
                        src="images/add-listing-icon-primary.png"
                        alt="Add listing"
                        className="ml-1 sticky-button-icon"
                      />
                    </a>
                    <a
                      className="btn btn-primary btn-lg d-block d-lg-none"
                      href="dashboard-add-new-property.html"
                    >
                      Add listing
                      <img
                        src="images/add-listing-icon.png"
                        alt="Add listing"
                        className="ml-1"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="content">
        <section className="d-flex flex-column">
          <div
            style={{ backgroundImage: "url('images/bg-home-01.jpg')" }}
            className="bg-cover d-flex align-items-center custom-vh-100"
          >
            <div className="container pt-lg-15 py-8" data-animate="zoomIn">
              <p className="text-white fs-md-22 fs-18 font-weight-500 letter-spacing-367 mb-6 text-center text-uppercase">
                Let us guide your home
              </p>
              <h2 className="text-white display-2 text-center mb-sm-13 mb-8">
                Find Your Dream Home
              </h2>
              <form className="property-search py-lg-0 z-index-2 position-relative d-none d-lg-block">
                <div className="row no-gutters">
                  <div className="col-md-5 col-lg-4 col-xl-3">
                    <input
                      className="search-field"
                      type="hidden"
                      name="status"
                      value="htmlFor-sale"
                      data-default-value=""
                    />
                    <ul className="nav nav-pills property-search-status-tab">
                      <li
                        className="nav-item bg-secondary rounded-top"
                        role="presentation"
                      >
                        <a
                          href="#"
                          role="tab"
                          aria-selected="true"
                          className="nav-link btn shadow-none rounded-bottom-0 text-white text-btn-focus-secondary text-uppercase d-flex align-items-center fs-13 rounded-bottom-0 bg-active-white text-active-secondary letter-spacing-087 flex-md-1 px-4 py-2 active"
                          data-toggle="pill"
                          data-value="htmlFor-sale"
                        >
                          <svg className="icon icon-villa fs-22 mr-2">
                            <use xlinkHref="#icon-villa"></use>
                          </svg>
                          htmlFor sale
                        </a>
                      </li>
                      <li
                        className="nav-item bg-secondary rounded-top"
                        role="presentation"
                      >
                        <a
                          href="#"
                          role="tab"
                          aria-selected="true"
                          className="nav-link btn shadow-none rounded-bottom-0 text-white text-btn-focus-secondary text-uppercase d-flex align-items-center fs-13 rounded-bottom-0 bg-active-white text-active-secondary letter-spacing-087 flex-md-1 px-4 py-2"
                          data-toggle="pill"
                          data-value="htmlFor-rent"
                        >
                          <svg className="icon icon-building fs-22 mr-2">
                            <use xlinkHref="#icon-building"></use>
                          </svg>
                          htmlFor rent
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white px-6 rounded-bottom rounded-top-right pb-6 pb-lg-0">
                  <div className="row align-items-center" id="accordion-4">
                    <div className="col-md-6 col-lg-3 col-xl-3 pt-6 pt-lg-0 order-1">
                      <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">
                        Home Type
                      </label>
                      <select
                        className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                        title="Select"
                        data-style="p-0 h-24 lh-17 text-dark"
                        name="type"
                      >
                        <option>Condominium</option>
                        <option>Single-Family Home</option>
                        <option>Townhouse</option>
                        <option>Multi-Family Home</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-5 pt-6 pt-lg-0 order-2">
                      <label className="text-uppercase font-weight-500 letter-spacing-093">
                        Search
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          name="search"
                          className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 pl-0 pr-4 font-weight-600 border-color-input placeholder-muted"
                          placeholder="Find something..."
                        />
                        <i className="far fa-search position-absolute pos-fixed-right-center pr-0 fs-18 mt-n3"></i>
                      </div>
                    </div>
                    <div className="col-sm pr-lg-0 pt-6 pt-lg-0 order-3">
                      <a
                        href="#advanced-search-filters-4"
                        className="btn advanced-search btn-accent h-lg-100 w-100 shadow-none text-secondary rounded-0 fs-14 fs-sm-16 font-weight-600 text-left d-flex align-items-center collapsed"
                        data-toggle="collapse"
                        data-target="#advanced-search-filters-4"
                        aria-expanded="true"
                        aria-controls="advanced-search-filters-4"
                      >
                        Advanced Search
                      </a>
                    </div>
                    <div className="col-sm pt-6 pt-lg-0 order-sm-4 order-5">
                      <button
                        type="submit"
                        className="btn btn-primary shadow-none fs-16 font-weight-600 w-100 py-lg-2 lh-213"
                      >
                        Search
                      </button>
                    </div>
                    <div
                      id="advanced-search-filters-4"
                      className="col-12 pt-4 pb-sm-4 order-sm-5 order-4 collapse"
                      data-parent="#accordion-4"
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3 pt-6">
                          <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">
                            Bedrooms
                          </label>
                          <select
                            className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                            name="bedroom"
                            title="All Bedrooms"
                            data-style="p-0 h-24 lh-17 text-dark"
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
                        <div className="col-sm-6 col-lg-3 pt-6">
                          <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">
                            Bathrooms
                          </label>
                          <select
                            className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                            title="All Bathrooms"
                            data-style="p-0 h-24 lh-17 text-dark"
                            name="bathroom"
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
                        <div className="col-sm-6 col-lg-3 pt-6">
                          <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">
                            All Cities
                          </label>
                          <select
                            className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                            name="city"
                            title="All Cities"
                            data-style="p-0 h-24 lh-17 text-dark"
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
                        <div className="col-sm-6 col-lg-3 pt-6">
                          <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">
                            All Areas
                          </label>
                          <select
                            className="form-control selectpicker bg-transparent border-bottom rounded-0 border-color-input"
                            name="areas"
                            title="All Areas"
                            data-style="p-0 h-24 lh-17 text-dark"
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
                      <div className="row pt-2">
                        <div className="col-md-6 col-lg-4 pt-6 slider-range slider-range-secondary">
                          <label
                            htmlFor="price-1-4"
                            className="mb-4 text-gray-light"
                          >
                            Price Range
                          </label>
                          <div
                            data-slider="true"
                            data-slider-options='{"min":0,"max":1000000,"values":[100000,700000],"type":"currency"}'
                          ></div>
                          <div className="text-center mt-2">
                            <input
                              id="price-1-4"
                              type="text"
                              readOnly
                              name="price"
                              className="border-0 amount text-center text-body font-weight-500 bg-transparent"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 pt-6 slider-range slider-range-secondary">
                          <label
                            htmlFor="area-size-4"
                            className="mb-4 text-gray-light"
                          >
                            Area Size
                          </label>
                          <div
                            data-slider="true"
                            data-slider-options='{"min":0,"max":15000,"values":[0,13000],"type":"currency"}'
                          ></div>
                          <div className="text-center mt-2">
                            <input
                              id="area-size-4"
                              type="text"
                              readOnly
                              name="area"
                              className="border-0 amount text-center text-body font-weight-500 bg-transparent"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 pt-6">
                          <label className="text-uppercase font-weight-500 letter-spacing-093 mb-1">
                            Property ID
                          </label>
                          <input
                            type="text"
                            name="search"
                            className="form-control bg-transparent shadow-none border-top-0 border-right-0 border-left-0 border-bottom rounded-0 h-24 lh-17 p-0 font-weight-600 border-color-input"
                            placeholder="Enter ID..."
                          />
                        </div>
                        <div className="col-12 pt-6 pb-2">
                          <a
                            className="lh-17 d-inline-block other-feature collapsed"
                            data-toggle="collapse"
                            href="#other-feature-4"
                            role="button"
                            aria-expanded="false"
                            aria-controls="other-feature-4"
                          >
                            <span className="fs-15 text-heading font-weight-500 hover-primary">
                              Other Features
                            </span>
                          </a>
                        </div>
                        <div
                          className="collapse row mx-0 w-100"
                          id="other-feature-4"
                        >
                          <div className="col-sm-6 col-md-4 col-lg-3 py-2">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="check1-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check1-4"
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
                                id="check2-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check2-4"
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
                                id="check4-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check4-4"
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
                                id="check5-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check5-4"
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
                                id="check6-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check6-4"
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
                                id="check7-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check7-4"
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
                                id="check8-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check8-4"
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
                                id="check9-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check9-4"
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
                                id="check10-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check10-4"
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
                                id="check11-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check11-4"
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
                                id="check12-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check12-4"
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
                                id="check13-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check13-4"
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
                                id="check14-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check14-4"
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
                                id="check15-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check15-4"
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
                                id="check16-4"
                                name="features[]"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check16-4"
                              >
                                Refrigerator
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <form className="property-search property-search-mobile d-lg-none z-index-2 position-relative bg-white rounded mx-md-10">
                <div
                  className="row align-items-lg-center"
                  id="accordion-4-mobile"
                >
                  <div className="col-12">
                    <div className="form-group mb-0 position-relative">
                      <a
                        href="#advanced-search-filters-4-mobile"
                        className="text-secondary btn advanced-search shadow-none pr-3 pl-0 d-flex align-items-center position-absolute pos-fixed-left-center py-0 h-100 border-right collapsed"
                        data-toggle="collapse"
                        data-target="#advanced-search-filters-4-mobile"
                        aria-expanded="true"
                        aria-controls="advanced-search-filters-4-mobile"
                      ></a>
                      <input
                        type="text"
                        className="form-control form-control-lg border shadow-none pr-9 pl-11 bg-white placeholder-muted"
                        name="key-word"
                        placeholder="Search..."
                      />
                      <button
                        type="submit"
                        className="btn position-absolute pos-fixed-right-center p-0 text-heading fs-20 px-3 shadow-none h-100 border-left"
                      >
                        <i className="far fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    id="advanced-search-filters-4-mobile"
                    className="col-12 pt-2 px-7 collapse"
                    data-parent="#accordion-4-mobile"
                  >
                    <div className="row mx-n2">
                      <div className="col-sm-6 pt-4 px-2">
                        <select
                          className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                          title="Select"
                          data-style="btn-lg py-2 h-52 bg-transparent"
                          name="type"
                        >
                          <option>All status</option>
                          <option>htmlFor Rent</option>
                          <option>htmlFor Sale</option>
                        </select>
                      </div>
                      <div className="col-sm-6 pt-4 px-2">
                        <select
                          className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                          title="All Types"
                          data-style="btn-lg py-2 h-52 bg-transparent"
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
                          className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                          name="bedroom"
                          title="Bedrooms"
                          data-style="btn-lg py-2 h-52 bg-transparent"
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
                          className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                          name="bathrooms"
                          title="Bathrooms"
                          data-style="btn-lg py-2 h-52 bg-transparent"
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
                          className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                          title="All Cities"
                          data-style="btn-lg py-2 h-52 bg-transparent"
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
                          className="form-control border shadow-none form-control-lg selectpicker bg-transparent"
                          name="areas"
                          title="All Areas"
                          data-style="btn-lg py-2 h-52 bg-transparent"
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
                      <div className="col-md-6 pt-6 slider-range slider-range-secondary">
                        <label
                          htmlFor="price-4-mobile"
                          className="mb-4 text-white"
                        >
                          Price Range
                        </label>
                        <div
                          data-slider="true"
                          data-slider-options='{"min":0,"max":1000000,"values":[100000,700000],"type":"currency"}'
                        ></div>
                        <div className="text-center mt-2">
                          <input
                            id="price-4-mobile"
                            type="text"
                            readOnly
                            className="border-0 amount text-center bg-transparent font-weight-500"
                            name="price"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pt-6 slider-range slider-range-secondary">
                        <label htmlFor="area-size-4-mobile" className="mb-4">
                          Area Size
                        </label>
                        <div
                          data-slider="true"
                          data-slider-options='{"min":0,"max":15000,"values":[0,12000],"type":"sqrt"}'
                        ></div>
                        <div className="text-center mt-2">
                          <input
                            id="area-size-4-mobile"
                            type="text"
                            readOnly
                            className="border-0 amount text-center bg-transparent font-weight-500"
                            name="area"
                          />
                        </div>
                      </div>
                      <div className="col-12 pt-4 pb-2">
                        <a
                          className="lh-17 d-inline-block other-feature collapsed"
                          data-toggle="collapse"
                          href="#other-feature-4-mobile"
                          role="button"
                          aria-expanded="false"
                          aria-controls="other-feature-4-mobile"
                        >
                          <span className="fs-15 font-weight-500 hover-primary">
                            Other Features
                          </span>
                        </a>
                      </div>
                      <div
                        className="collapse row mx-0 w-100"
                        id="other-feature-4-mobile"
                      >
                        <div className="col-sm-6 py-2">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              name="features[]"
                              id="check1-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check1-4-mobile"
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
                              name="features[]"
                              id="check2-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check2-4-mobile"
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
                              name="features[]"
                              id="check4-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check4-4-mobile"
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
                              name="features[]"
                              id="check5-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check5-4-mobile"
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
                              name="features[]"
                              id="check6-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check6-4-mobile"
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
                              name="features[]"
                              id="check7-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check7-4-mobile"
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
                              name="features[]"
                              id="check8-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check8-4-mobile"
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
                              name="features[]"
                              id="check9-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check9-4-mobile"
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
                              name="features[]"
                              id="check10-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check10-4-mobile"
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
                              name="features[]"
                              id="check11-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check11-4-mobile"
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
                              name="features[]"
                              id="check12-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check12-4-mobile"
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
                              name="features[]"
                              id="check13-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check13-4-mobile"
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
                              name="features[]"
                              id="check14-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check14-4-mobile"
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
                              name="features[]"
                              id="check15-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check15-4-mobile"
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
                              name="features[]"
                              id="check16-4-mobile"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="check16-4-mobile"
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
          </div>
        </section>
        <section className="pt-lg-12 pb-lg-10 py-11">
          <div className="container container-xxl">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-heading">Best Properties htmlFor Sale</h2>
                <span className="heading-divider"></span>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe
                  ndisse suscipit
                </p>
              </div>
              <div className="col-md-6 text-md-right">
                <a
                  href="listing-grid-with-left-filter.html"
                  className="btn fs-14 text-secondary btn-accent py-3 lh-15 px-7 mb-6 mb-lg-0"
                >
                  See all properties
                  <i className="far fa-long-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
            <div
              className="slick-slider slick-dots-mt-0 custom-arrow-spacing-30"
              data-slick-options='{"slidesToShow": 4, "autoplay":true,"dots":true,"responsive":[{"breakpoint": 1600,"settings": {"slidesToShow":3,"arrows":false}},{"breakpoint": 992,"settings": {"slidesToShow":2,"arrows":false}},{"breakpoint": 768,"settings": {"slidesToShow": 2,"arrows":false,"dots":true,"autoplay":true}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"arrows":false,"dots":true,"autoplay":true}}]}'
            >
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-02.jpg"
                      alt="Home in Metric Way"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">
                          featured
                        </span>
                        <span className="badge mr-2 badge-primary">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Home in Metric Way
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $1.250.000
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="fas fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-01.jpg"
                      alt="Affordable Urban House"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-primary">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Affordable Urban House
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $1.250.000
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-03.jpg"
                      alt="Villa on Hollywood Boulevard"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-primary">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Villa on Hollywood Boulevard
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $1.250.000
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-04.jpg"
                      alt="Home in Metric Way"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">
                          featured
                        </span>
                        <span className="badge mr-2 badge-primary">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Home in Metric Way
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $1.250.000
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box pb-7 pt-2">
                <div className="card shadow-hover-2" data-animate="zoomIn">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-02.jpg"
                      alt="Home in Metric Way"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">
                          featured
                        </span>
                        <span className="badge mr-2 badge-primary">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Home in Metric Way
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $1.250.000
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-02 py-lg-13 pt-11 pb-6">
            <div className="container container-xxl">
              <div className="row">
                <div className="col-lg-4 pr-xl-13" data-animate="fadeInLeft">
                  <h2 className="text-heading lh-1625">
                    Explore <br />
                    by Property Type
                  </h2>
                  <span className="heading-divider"></span>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe
                    ndisse suscipit
                  </p>
                  <a
                    href="listing-grid-with-left-filter.html"
                    className="btn btn-lg text-secondary btn-accent"
                  >
                    +2300 Available Properties
                    <i className="far fa-long-arrow-right ml-1"></i>
                  </a>
                </div>
                <div className="col-lg-8" data-animate="fadeInRight">
                  <div
                    className="slick-slider arrow-haft-inner custom-arrow-xxl-hide mx-0"
                    data-slick-options='{"slidesToShow": 4, "autoplay":true,"dots":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":3,"arrows":false}},{"breakpoint": 992,"settings": {"slidesToShow":3,"arrows":false}},{"breakpoint": 768,"settings": {"slidesToShow": 3,"arrows":false,"autoplay":true}},{"breakpoint": 576,"settings": {"slidesToShow": 2,"arrows":false,"autoplay":true}}]}'
                  >
                    <div className="box px-0 py-6">
                      <a
                        href="listing-grid-with-left-filter.html"
                        className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                      >
                        <img
                          src="images/verified.png"
                          className="card-img-top"
                          alt="Apartment"
                        />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">
                            Apartment
                          </h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a
                        href="listing-grid-with-left-filter.html"
                        className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                      >
                        <img
                          src="images/sofa.png"
                          className="card-img-top"
                          alt="House"
                        />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">
                            House
                          </h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a
                        href="listing-grid-with-left-filter.html"
                        className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                      >
                        <img
                          src="images/architecture-and-city.png"
                          className="card-img-top"
                          alt="Office"
                        />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">
                            Office
                          </h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a
                        href="listing-grid-with-left-filter.html"
                        className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                      >
                        <img
                          src="images/eco-house.png"
                          className="card-img-top"
                          alt="Villa"
                        />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">
                            Villa
                          </h4>
                        </div>
                      </a>
                    </div>
                    <div className="box px-0 py-6">
                      <a
                        href="listing-grid-with-left-filter.html"
                        className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                      >
                        <img
                          src="images/verified.png"
                          className="card-img-top"
                          alt="Apartment"
                        />
                        <div className="card-body px-0 pt-5 pb-0">
                          <h4 className="card-title fs-16 lh-2 text-dark mb-0">
                            Apartment
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-lg-12 pb-lg-11 py-11">
          <div className="container container-xxl">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-heading">Best Properties htmlFor Rent</h2>
                <span className="heading-divider"></span>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe
                  ndisse suscipit
                </p>
              </div>
              <div className="col-md-6 text-md-right">
                <a
                  href="listing-grid-with-left-filter.html"
                  className="btn fs-14 text-secondary btn-accent py-3 lh-15 px-7 mb-6 mb-lg-0"
                >
                  See all properties
                  <i className="far fa-long-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
            <div
              className="slick-slider slick-dots-mt-0 custom-arrow-spacing-30"
              data-slick-options='{"slidesToShow": 4,"dots":true,"arrows":false,"responsive":[{"breakpoint": 1600,"settings": {"slidesToShow":3}},{"breakpoint": 992,"settings": {"slidesToShow":2,"arrows":false}},{"breakpoint": 768,"settings": {"slidesToShow": 2,"arrows":false,"dots":true,"autoplay":true}},{"breakpoint": 576,"settings": {"slidesToShow": 1,"arrows":false,"dots":true,"autoplay":true}}]}'
            >
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-02.jpg"
                      alt="Home in Metric Way"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">
                          featured
                        </span>
                        <span className="badge mr-2 badge-indigo">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Home in Metric Way
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $550
                      <span className="text-gray-light font-weight-500 fs-14">
                        / month
                      </span>
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="fas fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-05.jpg"
                      alt="Affordable Urban House"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-indigo">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Affordable Urban House
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $5.700
                      <span className="text-gray-light font-weight-500 fs-14">
                        / year
                      </span>
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-06.jpg"
                      alt="Villa on Hollywood Boulevard"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-indigo">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Villa on Hollywood Boulevard
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $550
                      <span className="text-gray-light font-weight-500 fs-14">
                        / month
                      </span>
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-07.jpg"
                      alt="Home in Metric Way"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">
                          featured
                        </span>
                        <span className="badge mr-2 badge-indigo">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Home in Metric Way
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $5.700
                      <span className="text-gray-light font-weight-500 fs-14">
                        / year
                      </span>
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box box pb-7 pt-2" data-animate="fadeInUp">
                <div className="card shadow-hover-2">
                  <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                    <img
                      src="images/properties-grid-02.jpg"
                      alt="Home in Metric Way"
                    />
                    <div className="card-img-overlay p-2 d-flex flex-column">
                      <div>
                        <span className="badge mr-2 badge-orange">
                          featured
                        </span>
                        <span className="badge mr-2 badge-indigo">
                          htmlFor Sale
                        </span>
                      </div>
                      <ul className="list-inline mb-0 mt-auto hover-image">
                        <li
                          className="list-inline-item mr-2"
                          data-toggle="tooltip"
                          title="9 Images"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-images"></i>
                            <span className="pl-1">9</span>
                          </a>
                        </li>
                        <li
                          className="list-inline-item"
                          data-toggle="tooltip"
                          title="2 Video"
                        >
                          <a href="#" className="text-white hover-primary">
                            <i className="far fa-play-circle"></i>
                            <span className="pl-1">2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <h2 className="card-title fs-16 lh-2 mb-0">
                      <a
                        href="single-property-1.html"
                        className="text-dark hover-primary"
                      >
                        Home in Metric Way
                      </a>
                    </h2>
                    <p className="card-text font-weight-500 text-gray-light mb-2">
                      1421 San Pedro St, Los Angeles
                    </p>
                    <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bedroom"
                      >
                        <svg className="icon icon-bedroom fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-bedroom"></use>
                        </svg>
                        3 Br
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="3 Bathrooms"
                      >
                        <svg className="icon icon-shower fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-shower"></use>
                        </svg>
                        3 Ba
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="Size"
                      >
                        <svg className="icon icon-square fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-square"></use>
                        </svg>
                        2300 Sq.Ft
                      </li>
                      <li
                        className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip"
                        title="1 Garage"
                      >
                        <svg className="icon icon-Garage fs-18 text-primary mr-1">
                          <use xlinkHref="#icon-Garage"></use>
                        </svg>
                        1 Gr
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                    <p className="fs-17 font-weight-bold text-heading mb-0">
                      $550
                      <span className="text-gray-light font-weight-500 fs-14">
                        / month
                      </span>
                    </p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-secondary bg-accent border-accent"
                          data-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="fas fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                          data-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="fas fa-exchange-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-single-image pt-lg-13 pb-lg-12 py-11 bg-secondary">
            <div className="container container-xxl">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 pr-xl-8 pb-lg-0 pb-6"
                  data-animate="fadeInLeft"
                >
                  <a href="#" className="hover-shine d-block">
                    <img
                      src="images/single-image-01.jpg"
                      className="rounded-lg w-100"
                      alt="Find your neighborhood"
                    />
                  </a>
                </div>
                <div className="col-lg-6 pl-xl-8" data-animate="fadeInRight">
                  <h2 className="text-white lh-1625">
                    Find your
                    <br />
                    neighborhood
                  </h2>
                  <span className="heading-divider"></span>
                  <p className="mb-6 text-white">
                    Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe
                    ndisse
                  </p>
                  <div className="input-group input-group-lg pr-sm-17">
                    <input
                      type="text"
                      className="form-control fs-13 font-weight-500 text-gray-light rounded-lg rounded-right-0 border-0 shadow-none h-52 bg-white"
                      name="search"
                      placeholder="Enter an address, neighbourhood"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary fs-18 rounded-left-0 rounded-lg px-6 border-0"
                    >
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-lg-12 pb-lg-15 py-11">
          <div className="container container-xxl">
            <h2 className="text-heading">Destinations We Love The Most</h2>
            <span className="heading-divider"></span>
            <p className="mb-7">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
            <div
              className="slick-slider mx-n2"
              data-slick-options='{"slidesToShow": 5,"arrows":false, "autoplay":false,"dots":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":3}},{"breakpoint": 992,"settings": {"slidesToShow":3}},{"breakpoint": 768,"settings": {"slidesToShow": 2}},{"breakpoint": 576,"settings": {"slidesToShow": 1}}]}'
            >
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img
                    src="images/properties-city-01.jpg"
                    className="card-img"
                    alt="New York"
                  />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182">
                      <a href="single-property-1.html" className="text-white">
                        New York
                      </a>
                    </h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">
                      FROM
                      <span className="ml-2 fs-15 font-weight-bold">
                        $540.000 - $900.000
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img
                    src="images/properties-city-02.jpg"
                    className="card-img"
                    alt="Los Angeles"
                  />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182">
                      <a href="single-property-1.html" className="text-white">
                        Los Angeles
                      </a>
                    </h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">
                      FROM
                      <span className="ml-2 fs-15 font-weight-bold">
                        $520.000 - $700.000
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img
                    src="images/properties-city-03.jpg"
                    className="card-img"
                    alt="San Jose"
                  />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182">
                      <a href="single-property-1.html" className="text-white">
                        San Jose
                      </a>
                    </h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">
                      FROM
                      <span className="ml-2 fs-15 font-weight-bold">
                        $340.000 - $600.000
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img
                    src="images/properties-city-04.jpg"
                    className="card-img"
                    alt="Fort Worth"
                  />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182">
                      <a href="single-property-1.html" className="text-white">
                        Fort Worth
                      </a>
                    </h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">
                      FROM
                      <span className="ml-2 fs-15 font-weight-bold">
                        $240.000 - $660.000
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box px-2" data-animate="fadeInUp">
                <div className="card text-white bg-overlay-gradient-8 hover-zoom-in">
                  <img
                    src="images/properties-city-05.jpg"
                    className="card-img"
                    alt="Kansas City"
                  />
                  <div className="card-img-overlay d-flex justify-content-end flex-column p-4">
                    <h2 className="card-title mb-0 fs-20 lh-182">
                      <a href="single-property-1.html" className="text-white">
                        Kansas City
                      </a>
                    </h2>
                    <p className="card-text fs-13 font-weight-500 letter-spacing-087">
                      FROM
                      <span className="ml-2 fs-15 font-weight-bold">
                        $380.000 - $680.000
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-accent pt-10 pb-lg-11 pb-8 bg-patten-04">
          <div className="container container-xxl">
            <h2 className="text-dark text-center mxw-751 fs-26 lh-184 px-md-8">
              We have the most listings and constant updates. So you’ll never
              miss out.
            </h2>
            <span className="heading-divider mx-auto"></span>
            <div className="row mt-8">
              <div className="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
                <div className="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                  <div className="row no-gutters">
                    <div className="col-sm-3">
                      <img src="images/group-16.png" alt="Buy a new home" />
                    </div>
                    <div className="col-sm-9">
                      <div className="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                        <a
                          href="single-property-1.html"
                          className="d-flex align-items-center text-dark hover-secondary"
                        >
                          <h4 className="fs-20 lh-1625 mb-1">Buy a new home</h4>
                          <span className="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                            <svg className="icon icon-long-arrow">
                              <use xlinkHref="#icon-long-arrow"></use>
                            </svg>
                          </span>
                        </a>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
                <div className="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                  <div className="row no-gutters">
                    <div className="col-sm-3">
                      <img src="images/group-17.png" alt="Sell a home" />
                    </div>
                    <div className="col-sm-9">
                      <div className="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                        <a
                          href="single-property-1.html"
                          className="d-flex align-items-center text-dark hover-secondary"
                        >
                          <h4 className="fs-20 lh-1625 mb-1">Sell a home</h4>
                          <span className="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                            <svg className="icon icon-long-arrow">
                              <use xlinkHref="#icon-long-arrow"></use>
                            </svg>
                          </span>
                        </a>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-6 mb-lg-0" data-animate="zoomIn">
                <div className="card border-hover shadow-2 shadow-hover-lg-1 pl-5 pr-6 py-6 h-100 hover-change-image">
                  <div className="row no-gutters">
                    <div className="col-sm-3">
                      <img src="images/group-21.png" alt="Rent a home" />
                    </div>
                    <div className="col-sm-9">
                      <div className="card-body p-0 pl-0 pl-sm-5 pt-5 pt-sm-0">
                        <a
                          href="single-property-1.html"
                          className="d-flex align-items-center text-dark hover-secondary"
                        >
                          <h4 className="fs-20 lh-1625 mb-1">Rent a home</h4>
                          <span className="ml-2 text-primary fs-42 lh-1 hover-image d-inline-flex align-items-center">
                            <svg className="icon icon-long-arrow">
                              <use xlinkHref="#icon-long-arrow"></use>
                            </svg>
                          </span>
                        </a>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container container-xxl">
            <div className="py-lg-8 py-6 border-top">
              <div
                className="slick-slider mx-0 partners"
                data-slick-options='{"slidesToShow": 6, "autoplay":true,"dots":false,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":4}},{"breakpoint": 992,"settings": {"slidesToShow":3}},{"breakpoint": 768,"settings": {"slidesToShow": 3}},{"breakpoint": 576,"settings": {"slidesToShow": 2}}]}'
              >
                <div
                  className="box d-flex align-items-center justify-content-center"
                  data-animate="fadeInUp"
                >
                  <a
                    href="#"
                    className="item position-relative hover-change-image"
                  >
                    <img
                      src="images/partner-hover-1.png"
                      className="hover-image position-absolute pos-fixed-top"
                      alt="Partner 1"
                    />
                    <img
                      src="images/partner-1.png"
                      alt="Partner 1"
                      className="image"
                    />
                  </a>
                </div>
                <div
                  className="box d-flex align-items-center justify-content-center"
                  data-animate="fadeInUp"
                >
                  <a
                    href="#"
                    className="item position-relative hover-change-image"
                  >
                    <img
                      src="images/partner-hover-2.png"
                      className="hover-image position-absolute pos-fixed-top"
                      alt="Partner 2"
                    />
                    <img
                      src="images/partner-2.png"
                      alt="Partner 2"
                      className="image"
                    />
                  </a>
                </div>
                <div
                  className="box d-flex align-items-center justify-content-center"
                  data-animate="fadeInUp"
                >
                  <a
                    href="#"
                    className="item position-relative hover-change-image"
                  >
                    <img
                      src="images/partner-hover-3.png"
                      className="hover-image position-absolute pos-fixed-top"
                      alt="Partner 3"
                    />
                    <img
                      src="images/partner-3.png"
                      alt="Partner 3"
                      className="image"
                    />
                  </a>
                </div>
                <div
                  className="box d-flex align-items-center justify-content-center"
                  data-animate="fadeInUp"
                >
                  <a href="#" className="item">
                    <img src="images/partner-4.png" alt="" className="image" />
                  </a>
                </div>
                <div
                  className="box d-flex align-items-center justify-content-center"
                  data-animate="fadeInUp"
                >
                  <a
                    href="#"
                    className="item position-relative hover-change-image"
                  >
                    <img
                      src="images/partner-hover-5.png"
                      className="hover-image position-absolute pos-fixed-top"
                      alt="Partner 5"
                    />
                    <img
                      src="images/partner-5.png"
                      alt="Partner 5"
                      className="image"
                    />
                  </a>
                </div>
                <div
                  className="box d-flex align-items-center justify-content-center"
                  data-animate="fadeInUp"
                >
                  <a href="#" className="item">
                    <img src="images/partner-6.png" alt="" className="image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="compare" className="compare">
          <button className="btn shadow btn-open bg-white bg-hover-accent text-secondary rounded-right-0 d-flex justify-content-center align-items-center w-30px h-140 p-0"></button>
          <div className="list-group list-group-no-border bg-dark py-3">
            <a
              href="#"
              className="list-group-item bg-transparent text-white fs-22 text-center py-0"
            >
              <i className="far fa-bars"></i>
            </a>
            <div className="list-group-item card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img
                  src="images/compare-01.jpg"
                  className="card-img"
                  alt="properties"
                />
                <div className="card-img-overlay">
                  <a
                    href="#"
                    className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"
                  >
                    <i className="fal fa-minus-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="list-group-item card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img
                  src="images/compare-02.jpg"
                  className="card-img"
                  alt="properties"
                />
                <div className="card-img-overlay">
                  <a
                    href="#"
                    className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"
                  >
                    <i className="fal fa-minus-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="list-group-item card card bg-transparent">
              <div className="position-relative hover-change-image bg-hover-overlay">
                <img
                  src="images/compare-03.jpg"
                  className="card-img"
                  alt="properties"
                />
                <div className="card-img-overlay">
                  <a
                    href="#"
                    className="text-white hover-image fs-16 lh-1 pos-fixed-top-right position-absolute m-2"
                  >
                    <i className="fal fa-minus-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="list-group-item bg-transparent">
              <a
                href="compare-details.html"
                className="btn btn-lg btn-primary w-100 px-0 d-flex justify-content-center"
              >
                Compare
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark pt-8 pb-6 footer text-muted">
        <div className="container container-xxl">
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
                    Apartment htmlFor Rent
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
                    Offices htmlFor Buy
                  </a>
                </li>
                <li className="list-group-item bg-transparent p-0">
                  <a
                    href="#"
                    className="text-muted lh-26 font-weight-500 hover-white"
                  >
                    Offices htmlFor Rent
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
                Sign Up htmlFor Our Newsletter
              </h4>
              <p className="font-weight-500 text-muted lh-184">
                Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
                suscipit sagittis
              </p>
              <form>
                <div className="input-group input-group-lg mb-6">
                  <input
                    type="email"
                    name="email"
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
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-skype"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <a
                    href="#"
                    className="text-white opacity-3 fs-25 px-4 opacity-hover-10"
                  >
                    <i className="fab fa-linkedin-in"></i>
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

export default Home
