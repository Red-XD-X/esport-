import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Abouthero from "./components/aboutUS/Abouthero";
import Aboutus from "./pages/Aboutus";
import SignUp from "./pages/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-100">
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route
            path="/contacte"
            element={<Contacte />}
          />
          <Route
            path="/signin"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <SignIn onSignIn={handleSignIn} />
              )
            }
          />
          <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
