import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Blob } from "./components/Blob"
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home></Home>} />
    </Routes>
  </Router>
  );
}

export default App;
