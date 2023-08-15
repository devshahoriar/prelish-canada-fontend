/* eslint-disable react/no-unescaped-entities */

const AddNewInvoice = () => {
  return (
    <>
      <main id="content" className="bg-gray-01">
        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 add-new-invoice">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <form method="get">
                <div className="row">
                  <div className="col-xl-9 mb-6 mb-xl-0">
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="row mb-6">
                          <div className="invoice-logo col-md-6 mb-3 mb-md-0">
                            <h4 className="card-title mb-5 text-heading fs-22 lh-15">
                              Invoice Logo
                            </h4>
                            <div
                              className="dropzone upload-file text-center py-5"
                              data-uploader="true"
                              id="myDropzone"
                              data-uploader-url="./dashboard-add-new-invoice.html"
                            >
                              <div className="dz-default dz-message">
                                <span className="upload-icon lh-1 d-inline-block mb-4">
                                  <i className="fal fa-cloud-upload-alt" />
                                </span>
                                <p className="text-heading fs-22 lh-15 mb-4">
                                  Drag and drop image or
                                </p>
                                <button
                                  className="btn btn-indigo px-7 mb-2"
                                  type="button"
                                >
                                  Browse file
                                </button>
                                <input type="file" hidden name="file" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h4 className="card-title mb-5 text-heading fs-22 lh-15">
                              Invoice Label
                            </h4>
                            <input
                              type="text"
                              className="form-control border-0 shadow-none form-control-lg"
                              placeholder="Invoice Label"
                              name="invoice-label"
                              defaultValue="Invoice Label"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 invoice-address-company">
                            <h4 className="card-title mb-5 text-heading fs-22 lh-15">
                              From
                            </h4>
                            <div className="invoice-address-company-fields">
                              <div className="form-group">
                                <label
                                  htmlFor="company-name"
                                  className="text-heading"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="company-name"
                                  placeholder="Business Name"
                                  name="name"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="company-email"
                                  className="text-heading"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="company-email"
                                  placeholder="name@company.com"
                                  name="email"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="company-address"
                                  className="text-heading"
                                >
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="company-address"
                                  placeholder="XYZ Street"
                                  name="address"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="company-phone"
                                  className="text-heading"
                                >
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="company-phone"
                                  placeholder="(123) 456 789"
                                  name="phone"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 invoice-address-client">
                            <h4 className="card-title mb-5 text-heading fs-22 lh-15">
                              Bill To
                            </h4>
                            <div className="invoice-address-client-fields">
                              <div className="form-group">
                                <label
                                  htmlFor="client-name"
                                  className="text-heading"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="client-name"
                                  name="client-name"
                                  placeholder="Client Name"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="client-email"
                                  className="text-heading"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="client-email"
                                  placeholder="name@company.com"
                                  name="client-email"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="client-address"
                                  className="text-heading"
                                >
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="client-address"
                                  placeholder="XYZ Street"
                                  name="client-address"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="client-phone"
                                  className="text-heading"
                                >
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  className="form-control border-0 shadow-none form-control-lg"
                                  id="client-phone"
                                  placeholder="(123) 456 789"
                                  name="client-phone"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group mb-4">
                              <label htmlFor="number">Invoice Number</label>
                              <input
                                type="text"
                                className="form-control border-0 shadow-none form-control-lg"
                                id="number"
                                placeholder="#0001"
                                name="invoice-number"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-4">
                              <label htmlFor="date">Invoice Date</label>
                              <input
                                type="date"
                                className="form-control form-control-lg border-0"
                                id="date"
                                placeholder="Add date picker"
                                name="available-from"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-4">
                              <label htmlFor="due">Due Date</label>
                              <input
                                type="date"
                                className="form-control form-control-lg border-0"
                                id="due"
                                placeholder="None"
                                name="available-to"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <div className="table-responsive">
                            <table className="table table-bordered item-table">
                              <thead>
                                <tr>
                                  <th className="" />
                                  <th>Items</th>
                                  <th className="">Rate</th>
                                  <th className="">Qty</th>
                                  <th className="text-right">Price</th>
                                  <th className="text-center">Tax</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="delete-item-row d-block d-md-table-cell w-100 w-md-auto">
                                    <ul className="table-controls list-unstyled">
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          className="delete-item"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title=""
                                          data-original-title="Delete"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-x-circle"
                                          >
                                            <circle cx={12} cy={12} r={10} />
                                            <line
                                              x1={15}
                                              y1={9}
                                              x2={9}
                                              y2={15}
                                            />
                                            <line
                                              x1={9}
                                              y1={9}
                                              x2={15}
                                              y2={15}
                                            />
                                          </svg>
                                        </a>
                                      </li>
                                    </ul>
                                  </td>
                                  <td className="description d-block d-md-table-cell w-100 w-md-auto">
                                    <input
                                      type="text"
                                      className="form-control border-0 shadow-none form-control-lg mb-3"
                                      placeholder="Item Name"
                                      name="description[]"
                                    />
                                    <select
                                      className="form-control border-0 shadow-none form-control-lg"
                                      title="Select"
                                      id="country"
                                      name="unit[]"
                                    >
                                      <option>Select your unit</option>
                                      <option>Hours</option>
                                      <option>Months</option>
                                    </select>
                                  </td>
                                  <td className="rate d-inline-block d-md-table-cell">
                                    <input
                                      type="text"
                                      className="form-control border-0 shadow-none form-control-lg"
                                      placeholder="Price"
                                      name="price[]"
                                    />
                                  </td>
                                  <td className="text-md-right qty d-inline-block d-md-table-cell">
                                    <input
                                      type="text"
                                      className="form-control border-0 shadow-none form-control-lg"
                                      placeholder="Quantity"
                                      name="quality[]"
                                    />
                                  </td>
                                  <td className="text-md-right amount d-inline-block d-md-table-cell">
                                    <span className="editable-amount">
                                      <span className="currency">$</span>{' '}
                                      <span className="amount">100.00</span>
                                    </span>
                                  </td>
                                  <td className="text-md-center tax d-inline-block d-md-table-cell">
                                    <div className="n-chk">
                                      <label className="new-control new-checkbox new-checkbox-text checkbox-primary h-18 mx-auto my-0">
                                        <input
                                          type="checkbox"
                                          className="new-control-input"
                                          name="tax[]"
                                        />
                                        <span className="d-inline-block d-md-none">
                                          Tax
                                        </span>
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <button
                            type="button"
                            className="btn btn-secondary btn-invoice-add-item"
                          >
                            Add Item
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-6">
                            <div className="shadow-xxs-2 pt-1 pb-2 px-6 border-bottom border-primary border-5x rounded-lg">
                              <div className="list-group list-group-flush">
                                <div className="list-group-item d-flex py-2 px-0">
                                  <div className="invoice-summary-label">
                                    Subtotal
                                  </div>
                                  <div className="font-weight-500 text-heading ml-auto">
                                    <span className="currency">$</span>
                                    <span className="amount">100</span>
                                  </div>
                                </div>
                                <div className="list-group-item d-flex py-2 px-0">
                                  <div className="invoice-summary-label">
                                    Discount
                                  </div>
                                  <div className="font-weight-500 text-heading ml-auto">
                                    <span className="currency">$</span>
                                    <span>10</span>
                                  </div>
                                </div>
                                <div className="list-group-item d-flex py-2 px-0">
                                  <div className="invoice-summary-label">
                                    Tax
                                  </div>
                                  <div className="font-weight-500 text-heading ml-auto">
                                    <span>0%</span>
                                  </div>
                                </div>
                                <div className="list-group-item d-flex py-2 px-0">
                                  <div className="invoice-summary-label">
                                    Total
                                  </div>
                                  <div className="font-weight-500 text-heading ml-auto">
                                    <span className="currency">$</span>
                                    <span>90</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="invoice-detail-notes"
                            className="text-heading"
                          >
                            Notes
                          </label>
                          <textarea
                            className="form-control border-0 shadow-none form-control-lg"
                            name="note"
                            id="invoice-detail-notes"
                            placeholder='Notes - For example, "Thank you for doing business with us"'
                            style={{ height: 88 }}
                            defaultValue={''}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="card card-body mb-6 p-6">
                      <div className="invoice-action-currency mb-5">
                        <h5 className="card-title fs-16 lh-2 text-dark mb-3">
                          Currency
                        </h5>
                        <div className="form-group mb-0">
                          <input name="currency" hidden="" type="text" />
                          <div className="dropdown selectable-dropdown invoice-select-currency no-caret">
                            <a
                              id="currencyDropdown"
                              className="d-flex dropdown-toggle form-control bg-transparent form-control-lg bg-input"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <div className="w-18px mr-1 image-flag">
                                <img src="/images/svg/flag-us.svg" alt="flag" />
                              </div>
                              <span className="selectable-text text-truncate">
                                USD - US Dollar
                              </span>
                              <span className="d-inline-block ml-auto">
                                <i className="fal fa-angle-down" />
                              </span>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="currencyDropdown"
                            >
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-us.svg"
                                data-value="USD - US Dollar"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-us.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  USD - US Dollar
                                </span>
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-gbp.svg"
                                data-value="GBP - British Pound"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-gbp.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  {' '}
                                  GBP - British Pound
                                </span>
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-idr.svg"
                                data-value="IDR - Indonesian Rupiah"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-idr.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  IDR - Indonesian Rupiah
                                </span>
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-inr.svg"
                                data-value="INR - Indian Rupee"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-inr.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  INR - Indian Rupee
                                </span>
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-brl.svg"
                                data-value="BRL - Brazilian Real"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-brl.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  BRL - Brazilian Real
                                </span>
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-de.svg"
                                data-value="EUR - Germany (Euro)"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-de.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  EUR - Germany (Euro)
                                </span>
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-img-value="assets/img/flag-try.svg"
                                data-value="TRY - Turkish Lira"
                                href="javascript:void(0);"
                              >
                                <div className="w-18px mr-1 image-flag">
                                  <img
                                    src="/images/svg/flag-try.svg"
                                    className="flag-width"
                                    alt="flag"
                                  />
                                </div>
                                <span className="selectable-text">
                                  TRY - Turkish Lira
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-action-tax mb-5">
                        <h5 className="card-title fs-16 lh-2 text-dark mb-3">
                          Tax
                        </h5>
                        <div className="invoice-action-tax-fields">
                          <div className="form-group mb-0">
                            <label>Type</label>
                            <div className="dropdown selectable-dropdown invoice-tax-select no-caret">
                              <a
                                id="typeDropdown"
                                className="dropdown-toggle form-control bg-transparent form-control-lg d-flex bg-input"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="selectable-text d-inline-block mr-auto text-truncate">
                                  None
                                </span>
                                <span>
                                  <i className="fal fa-angle-down" />
                                </span>
                              </a>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="typeDropdown"
                              >
                                <a
                                  className="dropdown-item"
                                  data-value={10}
                                  href="javascript:void(0);"
                                >
                                  Deducted
                                </a>
                                <a
                                  className="dropdown-item"
                                  data-value={5}
                                  href="javascript:void(0);"
                                >
                                  Per Item
                                </a>
                                <a
                                  className="dropdown-item"
                                  data-value={25}
                                  href="javascript:void(0);"
                                >
                                  On Total
                                </a>
                                <a
                                  className="dropdown-item"
                                  data-value={0}
                                  href="javascript:void(0);"
                                >
                                  None
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="form-group mb-0 mt-3 tax-rate"
                            style={{ display: 'none' }}
                          >
                            <label htmlFor="rate1">Rate (%)</label>
                            <input
                              type="number"
                              className="form-control border-0 shadow-none form-control-lg input-rate"
                              name="tax-rate"
                              id="rate1"
                              placeholder="Rate"
                              defaultValue={0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="invoice-action-discount mb-5">
                        <h5 className="card-title fs-16 lh-2 text-dark mb-3">
                          Discount
                        </h5>
                        <div className="form-group mb-0">
                          <label>Type</label>
                          <div className="dropdown selectable-dropdown invoice-discount-select no-caret">
                            <a
                              id="discountDropdown"
                              className="d-flex dropdown-toggle form-control bg-transparent form-control-lg d-block bg-input"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {' '}
                              <span className="selectable-text d-inline-block mr-auto text-truncate">
                                None
                              </span>
                              <span>
                                <i className="fal fa-angle-down" />
                              </span>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="discountDropdown"
                            >
                              <a
                                className="dropdown-item d-flex"
                                data-value={10}
                                href="javascript:void(0);"
                              >
                                Percent
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-value={25}
                                href="javascript:void(0);"
                              >
                                Flat Amount
                              </a>
                              <a
                                className="dropdown-item d-flex"
                                data-value={0}
                                href="javascript:void(0);"
                              >
                                None
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="form-group mb-0 mt-3 discount-amount"
                          style={{ display: 'none' }}
                        >
                          <label htmlFor="amount">Amount</label>
                          <input
                            type="number"
                            className="form-control border-0 shadow-none form-control-lg input-rate"
                            name="discount-rate"
                            id="amount"
                            placeholder="Rate"
                            defaultValue={25}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="invoice-actions-btn card card-body p-6">
                      <div className="invoice-action-btn">
                        <div className="mb-3">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-primary btn-send btn-block btn-lg"
                          >
                            Send Invoice
                          </a>
                        </div>
                        <div className="mb-3">
                          <a
                            href="dashboard-preview-invoice.html"
                            className="btn btn-secondary btn-preview btn-block btn-lg"
                          >
                            Preview
                          </a>
                        </div>
                        <div>
                          <button className="btn btn-success btn-download btn-block btn-lg">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div
        className="modal fade login-register login-register-modal"
        id="login-register-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="login-register-modal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered mxw-571"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header border-0 p-0">
              <div
                className="nav nav-tabs row w-100 no-gutters"
                id="myTab"
                role="tablist"
              >
                <a
                  className="nav-item col-sm-3 ml-0 nav-link pr-6 py-4 pl-9 active fs-18"
                  id="login-tab"
                  data-toggle="tab"
                  href="#login"
                  role="tab"
                  aria-controls="login"
                  aria-selected="true"
                >
                  Login
                </a>
                <a
                  className="nav-item col-sm-3 ml-0 nav-link py-4 px-6 fs-18"
                  id="register-tab"
                  data-toggle="tab"
                  href="#register"
                  role="tab"
                  aria-controls="register"
                  aria-selected="false"
                >
                  Register
                </a>
                <div className="nav-item col-sm-6 ml-0 d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="close m-0 fs-23"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-body p-4 py-sm-7 px-sm-8">
              <div className="tab-content shadow-none p-0" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <form className="form">
                    <div className="form-group mb-4">
                      <label htmlFor="username" className="sr-only">
                        Username
                      </label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span
                            className="input-group-text bg-gray-01 border-0 text-muted fs-18"
                            id="inputGroup-sizing-lg"
                          >
                            <i className="far fa-user" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 shadow-none fs-13"
                          id="username"
                          name="username"
                          required=""
                          placeholder="Username / Your email"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-lock" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 shadow-none fs-13"
                          id="password"
                          name="password"
                          required=""
                          placeholder="Password"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i className="far fa-eye-slash" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="remember-me"
                          name="remember-me"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-me"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="password-recovery.html"
                        className="d-inline-block ml-auto text-orange fs-15"
                      >
                        Lost password?
                      </a>
                    </div>
                    <div className="d-flex p-2 border re-capchar align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="verify"
                          name="verify"
                        />
                        <label className="form-check-label" htmlFor="verify">
                          I'm not a robot
                        </label>
                      </div>
                      <a href="#" className="d-inline-block ml-auto">
                        <img src="/images/re-captcha.png" alt="Re-capcha" />
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Log in
                    </button>
                  </form>
                  <div className="divider text-center my-2">
                    <span className="px-4 bg-white lh-17 text">
                      or continue with
                    </span>
                  </div>
                  <div className="row no-gutters mx-n2">
                    <div className="col-4 px-2 mb-4">
                      <a
                        href="#"
                        className="btn btn-lg btn-block facebook text-white px-0"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block google px-0">
                        <img src="/images/google.png" alt="Google" />
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a
                        href="#"
                        className="btn btn-lg btn-block twitter text-white px-0"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form className="form">
                    <div className="form-group mb-4">
                      <label htmlFor="full-name" className="sr-only">
                        Full name
                      </label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-address-card" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 shadow-none fs-13"
                          id="full-name"
                          name="full-name"
                          required=""
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="username01" className="sr-only">
                        Username
                      </label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-user" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 shadow-none fs-13"
                          id="username01"
                          name="username01"
                          required=""
                          placeholder="Username / Your email"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password01" className="sr-only">
                        Password
                      </label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend ">
                          <span className="input-group-text bg-gray-01 border-0 text-muted fs-18">
                            <i className="far fa-lock" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 shadow-none fs-13"
                          id="password01"
                          name="password01"
                          required=""
                          placeholder="Password"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                            <i className="far fa-eye-slash" />
                          </span>
                        </div>
                      </div>
                      <p className="form-text">
                        Minimum 8 characters with 1 number and 1 letter
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Sign up
                    </button>
                  </form>
                  <div className="divider text-center my-2">
                    <span className="px-4 bg-white lh-17 text">
                      or continue with
                    </span>
                  </div>
                  <div className="row no-gutters mx-n2">
                    <div className="col-4 px-2 mb-4">
                      <a
                        href="#"
                        className="btn btn-lg btn-block facebook text-white px-0"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a href="#" className="btn btn-lg btn-block google px-0">
                        <img src="/images/google.png" alt="Google" />
                      </a>
                    </div>
                    <div className="col-4 px-2 mb-4">
                      <a
                        href="#"
                        className="btn btn-lg btn-block twitter text-white px-0"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    By creating an account, you agree to HomeID
                    <a className="text-heading" href="#">
                      <u>Terms of Use</u>{' '}
                    </a>{' '}
                    and
                    <a className="text-heading" href="#">
                      <u>Privacy Policy</u>
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default AddNewInvoice
