import React from "react";
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const changeMode = () =>{
    props.changemode();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.logoname}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
            <div className="form-check form-switch">
              <input className="form-check-input" onChange = {changeMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
            </div>
            {/* <button type="button" onClick = {changeMode} className="btn btn-secondary">Enable {props.mode} Mode</button> */}
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
Navbar.propTypes = {
    logoname:Proptypes.string
}
Navbar.defaultProps = {
    logoname:"testing1"
}
export default Navbar;
