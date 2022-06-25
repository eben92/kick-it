import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='p-11 '>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
