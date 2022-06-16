import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import BookDetails from "./components/BookDetails";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ReadBook from "./components/ReadBook";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="w-11/12 sm:w-5/6 my-10 mx-auto max-w-7xl">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<BookDetails />} />
          <Route path="/book" element={<ReadBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
