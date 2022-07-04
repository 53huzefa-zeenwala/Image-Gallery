import { Routes, Route, BrowserRouter } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar";
import Home from "./pages/Home";

import Images from "./pages/Images";
import Videos from "./pages/Videos";

function App() {


  return (
    <div >


      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="images" element={<Images />} />
            <Route path="videos" element={<Videos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
