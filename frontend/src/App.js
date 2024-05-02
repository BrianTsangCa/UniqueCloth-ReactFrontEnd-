import './App.css';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
