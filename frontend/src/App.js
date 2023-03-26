
import Layout from "./components/Layout"
import EVData from "./components/EVData"
import CIPData from "./components/CIPData"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/CIPData" element={<CIPData />} />
      <Route path="/EVData" element={<EVData />} />
    </Routes>
  </BrowserRouter>


    // <div>
    //   <CIPData/>
    //   <Title/>
    //   <LAMap/>
    // </div>
  );
}

export default App;
