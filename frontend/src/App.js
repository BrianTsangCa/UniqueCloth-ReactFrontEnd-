import './App.css';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
