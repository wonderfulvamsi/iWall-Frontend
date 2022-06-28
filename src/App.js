import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPg from './screens/LandingPg'
import AdminPg from './screens/AdminPg'
import TechPg from './screens/TechPg'
import CareerPg from './screens/CareerPg'
import LifePg from './screens/LifePg'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/admin" element={<AdminPg />} />
        <Route path="/tech" element={<TechPg />} />
        <Route path="/career" element={<CareerPg />} />
        <Route path="/life" element={<LifePg />} />
      </Routes>
    </Router>
  );
}

export default App;
