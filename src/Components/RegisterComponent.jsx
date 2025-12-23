import { useState } from "react";
import WelcomeText from "./WelcomeText";
import AuthCard from "./AuthCard";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URI = import.meta.env.VITE_API_BASE_URI;

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Live password validation
    if (name === "password" || name === "confirmPassword") {
      const pwd = name === "password" ? value : form.password;
      const confirm = name === "confirmPassword" ? value : form.confirmPassword;

      if (pwd && confirm && pwd !== confirm) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.username || !form.password || !form.confirmPassword) {
      return setError("All fields are required");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await axios.post(`${API_URI}/register`, {
        username: form.username,
        password: form.password,
      });

      if (res.data?.status === 200) {
        setSuccess("Registered successfully! You can login now.");
        setForm({ username: "", password: "", confirmPassword: "" });
      } else {
        setError(res.data?.message || "Registration failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-custom">
      <div className="row w-100 flex-column flex-md-row align-items-center justify-content-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <WelcomeText />
        </div>

        <div className="col-12 col-md-5 d-flex justify-content-center">
          <AuthCard title="Register">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="form-control"
                  style={{ backgroundColor: "#decbd7" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  style={{ backgroundColor: "#decbd7" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Re-Enter password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  style={{ backgroundColor: "#decbd7" }}
                />
              </div>

              {error && (
                <p className="text-danger text-center mb-2">{error}</p>
              )}
              {success && (
                <p className="text-success text-center mb-2">{success}</p>
              )}

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
                  disabled={
                    !form.username ||
                    !form.password ||
                    !form.confirmPassword ||
                    error
                  }
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
