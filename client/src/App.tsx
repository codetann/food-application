import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const routes: any = [{ path: "/", element: <h1>Home</h1> }];

const renderRoutes = (routes: any) => {
  return routes.map((route: any) => {
    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

function App() {
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
}

export default App;
