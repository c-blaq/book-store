import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
