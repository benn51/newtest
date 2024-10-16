import { BrowserRouter } from "react-router-dom";
import Top from "./pages/Top";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Top />
    </BrowserRouter>
  );
}

export default App;
