import { useState } from "react";
import WelcomeText from "./WelcomeText";
import AuthCard from "./AuthCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URI = import.meta.env.VITE_API_BASE_URI;

function LoginComponent({ type = "customer" }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.password) {
      return setError("Username and password are required");
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API_URI}/login`, {
        username: form.username,
        password: form.password,
      });

      // Adjust based on your backend response format
      if (res.data?.status === 200) {

        // If token comes, store it
        if (res.data?.token) {
          localStorage.setItem("authToken", res.data.token);
        }

        // Navigate based on type prop or role
        if (type === "admin") {
          navigate("/admin/home");
        } else {
          navigate("/customer/home");
        }

      } else {
        setError(res.data?.message || "Invalid credentials");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-custom">
      <div className="row w-100 flex-column flex-md-row align-items-center justify-content-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <WelcomeText />
        </div>

        <div className="col-12 col-md-5 d-flex justify-content-center">
          <AuthCard title="Login">
            <form onSubmit={handleLogin}>
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

              {error && (
                <p className="text-danger text-center">{error}</p>
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
                  style={{ backgroundColor: "#b892a9" }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>

              <div className="text-center">
                <Link
                  to="/register"
                  className="text-center mt-3 d-block text-decoration-none"
                >
                  Don't have an account? Register here
                </Link>
              </div>
            </form>
          </AuthCard>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
