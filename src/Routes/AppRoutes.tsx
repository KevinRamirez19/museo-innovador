import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Exposiciones from "../Pages/Exposiciones";
import SobreMuseo from "../Pages/SobreMuseo";
import Contacto from "../Pages/Contacto";

import Footer from "../assets/Components/Footer";
import VisitaVirtual from "../Pages/VisitaVirtual";

const AppRoutes = () => {
  return (
   
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Exposiciones" element={<Exposiciones />} />
    <Route path="/SobreMuseo" element={<SobreMuseo />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/VisitaVirtual" element={<VisitaVirtual />} />
  </Routes>
  <Footer />
</BrowserRouter>
  );
};

export default AppRoutes;
