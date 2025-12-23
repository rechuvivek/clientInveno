import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/CustomerDashboard.css";
import { Outlet, Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3">
        <NavBar />
        <div className="text-center flex-grow-1">
          <Link
            to="/customer/home"
            className="link-no-style"
          >
            <h3 className="fw-bold mb-0">
              <span className="brand-name">INVENO</span>{" "}
              <small className="text-muted">Admin</small>
            </h3>
          </Link>
        </div>
        <div style={{ width: "40px" }}></div>
      </header>

      {/* Dynamic content */}
      <main className="dashboard-content p-3">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardPage;
