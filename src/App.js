import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./components/Home";
import BookDetails from "./components/BookDetails";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ReadBook from "./components/ReadBook";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import { useAuth } from "./firebase";

function App() {
  const currentUser = useAuth();

  return (
    <div className="w-11/12 sm:w-5/6 my-10 mx-auto max-w-7xl">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-up"
            element={
              !currentUser ? <SignUp /> : <Navigate to="/dashboard" replace />
            }
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book/details/:isbn" element={<BookDetails />} />
          <Route path="/book" element={<ReadBook />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
