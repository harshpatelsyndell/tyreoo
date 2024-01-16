import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Main from "./components/Main";
import Vehiclelist from "./components/Vehiclelist";
import VehicleAssignment from "./components/VehicleAssignment";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate replace to={"main"} />} />
            <Route path="main" element={<Main />} />
            <Route path="vehiclelist" element={<Vehiclelist />} />
            <Route path="vehicleassignment" element={<VehicleAssignment />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
