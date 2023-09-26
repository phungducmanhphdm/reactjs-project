import { BrowserRouter, Routes } from "react-router-dom";
import { PageRoute } from "src/routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{PageRoute}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
