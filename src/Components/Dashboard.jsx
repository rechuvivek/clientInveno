import React from "react";
import { Link } from "react-router-dom";
import "./styles/CustomerDashboard.css"; // Assuming your styles

function Dashboard() {
  return (
    <div className="container text-center my-5">
      <div className="row g-4 justify-content-center">

        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/customer/data-entry" className="dashboard-box link-no-style">
            Daily Entry
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/customer/history" className="dashboard-box link-no-style">
            History
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/customer/receipts" className="dashboard-box link-no-style">
            Receipt Print
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/customer/credit-entry" className="dashboard-box link-no-style">
            Credit Entry
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/customer/debit-entry" className="dashboard-box link-no-style">
            Debit Entry
          </Link>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Link to="/customer/profits" className="dashboard-box link-no-style">
            Profits
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
