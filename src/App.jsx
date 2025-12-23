import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from "./Components/LoginComponent";
import Register from './Components/RegisterComponent';
import DashboardPage from './Components/CustomerDashboard';
import DataEntry from './Components/DashboardComponents/DataEntry';
import History from './Components/DashboardComponents/History';
import CreditEntry from './Components/DashboardComponents/CreditEntry';
import DebitEntry from './Components/DashboardComponents/DebitEntry';
import Profits from './Components/DashboardComponents/Profits';
import Receipts from './Components/DashboardComponents/Receipts';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <div className='app-wrapper bg-custom'>
        <Routes>
          <Route path="/" element={<LoginComponent type="customer" />} />
          <Route path="/register" element={<Register />} />

          {/* Nested Dashboard Routes */}
          <Route path="/customer" element={<DashboardPage />}>
            <Route path="home" element={<Dashboard />} />      {/* Default content */}
            <Route path="data-entry" element={<DataEntry />} />
            <Route path="profits" element={<Profits />} />
            <Route path="receipts" element={<Receipts />} />
            <Route path="credit-entry" element={<CreditEntry />} />
            <Route path="debit-entry" element={<DebitEntry />} />
            <Route path="history" element={<History />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
