import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LegalPage from "./pages/LegalPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import SmoothScroll from "./components/SmoothScroll";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function App() {
  return (
    <SmoothScroll>
      <SmoothCursor />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </Router>
    </SmoothScroll>
  );
}
