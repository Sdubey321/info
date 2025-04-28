import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
