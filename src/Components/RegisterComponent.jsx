import WelcomeText from "./WelcomeText";
import AuthCard from "./AuthCard";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-custom">
      <div className="row w-100 flex-column flex-md-row align-items-center justify-content-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <WelcomeText />
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center">
          <AuthCard title="Register">
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: "#decbd7" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  style={{ backgroundColor: "#decbd7" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Re-Enter password</label>
                <input
                  type="password"
                  className="form-control"
                  style={{ backgroundColor: "#decbd7" }}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="keepLoggedIn"
                />
                <label className="form-check-label" htmlFor="keepLoggedIn">
                  Keep me logged in
                </label>
              </div>
              <div className="d-grid mb-2">
                <button
                  className="btn text-white"
                  type="submit"
                  style={{ backgroundColor: "#b892a9" }}
                >
                  Signup
                </button>
              </div>
              <div className="text-center">
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{ fontSize: "0.85rem" }}
                >
                  Login
                </Link>
              </div>
            </form>
          </AuthCard>
        </div>
      </div>
    </div>
  );
}

export default Register;
