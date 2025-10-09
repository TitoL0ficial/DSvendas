import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="dashboard" element={<Dashboard/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App
