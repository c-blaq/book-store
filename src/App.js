import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import BookDetails from "./components/BookDetails";
import SignUp from "./components/SignUp";
import ReadBook from "./components/ReadBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/details" element={<BookDetails />} />
        <Route path="/book" element={<ReadBook />} />
      </Routes>
    </Router>
  );
}

export default App;
