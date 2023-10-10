import { Route, Routes } from "react-router-dom";
import Customer from "./screens/Customer";
import Admin from "./screens/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Customer />} />
      <Route path="/quan-tri" element={<Admin />} />
    </Routes>
    // <h1>heloo</h1>
  );
}

export default App;
