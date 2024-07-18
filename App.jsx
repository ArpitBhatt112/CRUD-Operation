import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;