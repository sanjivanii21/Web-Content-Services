import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Branding from "./pages/Branding";
import Careers from "./pages/Careers";
import Consulting from "./pages/Consulting";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Learning from "./pages/Learning";
import MediaGallery from "./pages/MediaGallery";
import Solutions from "./pages/Solutions";
import Technology from "./pages/Technology";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import Chatbot from "./chatbot/Chatbot";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/media-gallery" element={<MediaGallery />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
    </>
  );
}
