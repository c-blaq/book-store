import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import BookDetails from "./components/BookDetails";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ReadBook from "./components/ReadBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/details" element={<BookDetails />} />
        <Route path="/book" element={<ReadBook />} />
      </Routes>
    </Router>
  );
}

export default App;
