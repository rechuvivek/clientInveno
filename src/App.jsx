import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from "./Components/LoginComponent";
import Register from './Components/RegisterComponent';
import AdminDashboard from './Components/AdminDashboard';
import CustomerDashboard from './Components/CustomerDashboard';

function App() {
  return (
    <Router>
      <div className='app-wrapper bg-custom'>
        <Routes>
          <Route path="/" element={<LoginComponent type = "customer" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/home" element={<AdminDashboard />} />
          <Route path="/customer/home" element={<CustomerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
