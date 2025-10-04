import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/NavBar.css";

function NavBar() {
  return (
    <>
      {/* Hamburger Button */}
      <button
        className="btn p-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start custom-offcanvas"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header py-3">
          <h5 className="offcanvas-title fw-semibold" id="sidebarMenuLabel">
            Dashboard Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <nav className="nav flex-column elegant-nav">
            <a className="nav-link elegant-link" href="#daily-entry">
              <i className="bi bi-pencil-square me-2"></i> Daily Entry
            </a>
            <a className="nav-link elegant-link" href="#history">
              <i className="bi bi-clock-history me-2"></i> History
            </a>
            <a className="nav-link elegant-link" href="#receipt-print">
              <i className="bi bi-receipt-cutoff me-2"></i> Receipt Print
            </a>
            <a className="nav-link elegant-link" href="#credits">
              <i className="bi bi-arrow-up-circle me-2"></i> Credits
            </a>
            <a className="nav-link elegant-link" href="#debits">
              <i className="bi bi-arrow-down-circle me-2"></i> Debits
            </a>
            <a className="nav-link elegant-link" href="#profits">
              <i className="bi bi-graph-up me-2"></i> Profits
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
