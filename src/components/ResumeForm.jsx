import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/resume_form.css";

const ResumeForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    Profession: "",
    city: "",
    country: "",
    pinCode: "",
    phone: "",
    email: "",
    summary: "",
  });
  const nav = useNavigate();

  const handelSubmit = () => {
    localStorage.setItem("data", JSON.stringify(data));
    setTimeout(() => {
      nav("/result");
    }, 1000);
  };

  return (
    <div className=" container container-body">
      <div className="row">
        <div className="col-cntc-img col-md-2 p-0 ">
          <div className="upload-photo-section">
            <div className="upload-image-wraper">
              <div className=" upload-image ">
                <img
                  alt="Sample Image for Photo Upload"
                  className="rect thumbnail-img"
                  id="uploadimage"
                  src=""
                />
              </div>
              <button type="button" className="btn upload-img-btn">
                Upload Photo
              </button>
            </div>
          </div>
        </div>
        <div className="col-cntc-form col-md-7 ">
          <form action="/">
            <div className="cntc-fields-wrap">
              <div className="row row-full-name">
                <div className="col-6 col-first-name">
                  <div className="form-group placeholder-wrap  bold-FNAM  is-valid">
                    <label className="control-label ">First Name</label>
                    <input
                      type="text"
                      name="FNAM"
                      placeholder="Mohammad"
                      maxLength="35"
                      className="form-control"
                      id="textFNAM"
                      autoComplete="given-name"
                      aria-label="First Name"
                      onChange={(e) => {
                        setData({ ...data, firstName: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.firstName}
                    />
                  </div>
                </div>
                <div className="col-6 col-last-name">
                  <div className="form-group placeholder-wrap  bold-LNAM  is-valid">
                    <label className="control-label ">Surname</label>
                    <input
                      type="text"
                      name="LNAM"
                      placeholder="Daniyal "
                      maxLength="35"
                      className="form-control"
                      id="textLNAM"
                      autoComplete="family-name"
                      aria-label="Surname"
                      onChange={(e) => {
                        setData({ ...data, lastName: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.lastName}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-doc-title">
                <div className="col-md-12 col-doc-title">
                  <div className="form-group placeholder-wrap  bold-DCTL  is-valid">
                    <label className="control-label ">Profession</label>
                    <input
                      type="text"
                      name="DCTL"
                      placeholder="e.g. Software Engineer"
                      className="form-control"
                      id="textDCTL"
                      autoComplete="additional-name"
                      aria-label="Profession"
                      onChange={(e) => {
                        setData({ ...data, Profession: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.Profession}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-doc-title">
                <div className="col-md-12 col-doc-title">
                  <div className="form-group placeholder-wrap  bold-DCTL  is-valid">
                    <label className="control-label ">Summary/About</label>
                    <input
                      type="text"
                      name="Summary"
                      placeholder="e.g. i am a quick lerner and good at problam solving..."
                      className="form-control"
                      id="textsummary"
                      autoComplete=""
                      aria-label="Summary"
                      onChange={(e) => {
                        setData({ ...data, summary: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.summary}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-city-state-zip">
                <div className="col-city col-6 field-1">
                  <div className="form-group placeholder-wrap  bold-CITY  is-valid">
                    <label className="control-label ">City</label>
                    <input
                      type="city"
                      name="CITY"
                      placeholder="e.g. New Delhi"
                      maxLength="100"
                      className="form-control"
                      id="city"
                      autoComplete="address-level2"
                      aria-label="City"
                      onChange={(e) => {
                        setData({ ...data, city: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.city}
                    />
                  </div>
                </div>
                <div className="col-6 col-country col-xl-3  field-2">
                  <div className="form-group placeholder-wrap  bold-CNTY  is-valid">
                    <label className="control-label ">Country</label>
                    <input
                      type="country"
                      name="CNTY"
                      placeholder="e.g. India"
                      maxLength="50"
                      className="form-control"
                      id="country"
                      aria-label="Country"
                      onChange={(e) => {
                        setData({ ...data, country: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.country}
                    />
                  </div>
                </div>
                <div className="col-6 col-zip col-xl-3  field-3">
                  <div className="form-group placeholder-wrap  bold-ZIPC  is-valid">
                    <label className="control-label ">Pin Code</label>
                    <input
                      type="zip"
                      name="ZIPC"
                      placeholder="e.g. 110034"
                      maxLength="10"
                      className="form-control"
                      id="zip"
                      autoComplete="shipping postal-code"
                      aria-label="Pin Code"
                      onChange={(e) => {
                        setData({ ...data, pinCode: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.pinCode}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-extra-field"></div>
              <div className="row row-phone-email">
                <div className="col-sm-6 col-phone">
                  <div className="form-group placeholder-wrap  bold-HPHN  is-valid">
                    <label className="control-label ">Phone</label>
                    <input
                      type="tel"
                      name="HPHN"
                      placeholder="e.g. +91 22 1234 5677"
                      maxLength="20"
                      className="form-control"
                      id="HPHN"
                      autoComplete="tel"
                      aria-label="Phone"
                      onChange={(e) => {
                        setData({ ...data, phone: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.phone}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-email">
                  <div className="form-group placeholder-wrap  bold-EMAI  is-valid">
                    <label className="control-label ">Email</label>
                    <input
                      type="email"
                      name="EMAI"
                      placeholder="e.g. exampal@email.com"
                      maxLength="50"
                      className="form-control"
                      id="EMAI"
                      autoComplete="email"
                      aria-label="Email"
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                        console.log(e.target.value);
                      }}
                      value={data.email}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="clearfix pt-3 add-social-links">
                  <a className="link mb-4 d-inline-block" href="#">
                    <i className="fa mr-2  fa-plus"></i>Add Social Links
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <button onClick={handelSubmit}>submit</button>
      </div>
    </div>
  );
};

export default ResumeForm;
