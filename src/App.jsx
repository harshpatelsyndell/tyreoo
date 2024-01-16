import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Main from "./components/Main";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate replace to={"main"} />} />
            <Route path="main" element={<Main />} />
            <Route path="vehiclelist" element={<Vehiclelist />} />
            {/* <Route path="analytics" element={<Analytics />} /> */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

function Vehiclelist() {
  return <div>Vehiclelist</div>;
}
