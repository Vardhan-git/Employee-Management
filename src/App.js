// src/App.js
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import EmployeeDetails from "./components/EmployeeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageWrapper />} />
        <Route path="/register" element={<RegisterPageWrapper />} />
        <Route path="/employee" element={<EmployeeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const EmployeeDetailsWrapper = () => {
  return (
    <div>
      <EmployeeDetails />
    </div>
  );
}

const LoginPageWrapper = () => {
  return (
    <div>

      <Login />
    </div>
  );
};

const RegisterPageWrapper = () => {
  return (
    <div>
      <Register />
    </div>
  );
};
