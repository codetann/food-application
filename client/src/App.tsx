import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import { LandingPage } from "@routes";

const socket = io("http://localhost:4000");

function App() {
  return (
    <Router>
      <Routes>
        {/* onboarding routes */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
