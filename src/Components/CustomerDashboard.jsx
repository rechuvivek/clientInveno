import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/CustomerDashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3">
        <NavBar />  {/* 👈 Hamburger with sidebar */}
        <div className="text-center flex-grow-1">
          <h3 className="fw-bold mb-0">
            <span className="brand-name">INVENO</span> <small className="text-muted">Admin</small>
          </h3>
        </div>
        <div style={{ width: "40px" }}></div>
      </header>

      {/* Dashboard Boxes */}
      <div className="container text-center my-5">
        <div className="row g-4 justify-content-center">
          <div id="daily-entry" className="col-12 col-sm-6 col-md-4">
            <div className="dashboard-box">Daily<br />Entry</div>
          </div>
          <div id="history" className="col-12 col-sm-6 col-md-4">
            <div className="dashboard-box">History</div>
          </div>
          <div id="receipt-print" className="col-12 col-sm-6 col-md-4">
            <div className="dashboard-box">Receipt Print</div>
          </div>
          <div id="credits" className="col-12 col-sm-6 col-md-4">
            <div className="dashboard-box">Credits</div>
          </div>
          <div id="debits" className="col-12 col-sm-6 col-md-4">
            <div className="dashboard-box">Debits</div>
          </div>
          <div id="profits" className="col-12 col-sm-6 col-md-4">
            <div className="dashboard-box">Profits</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
