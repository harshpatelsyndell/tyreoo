import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
