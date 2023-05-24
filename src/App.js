import logo from "./logo.svg";
import "./App.css";
import Something from "./Something";
import Error from "./Error";
import Car from "./Car";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact index element={<MainPage />} />
        <Route path="car/:id" element={<Car />} />
        <Route path="something" element={<Something />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
