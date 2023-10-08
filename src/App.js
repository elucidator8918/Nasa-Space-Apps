import Landing from "./pages/Landing";
import Assistant from "./components/Assistant";
import {
  Routes,
  Route
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Assistant" element={<Assistant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
