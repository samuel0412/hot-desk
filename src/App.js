import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="log-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
