import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Adinath from "./pages/Adinath";
import { useEffect, useState } from "react";
import Message from "./pages/Message";
import Wisdom from "./pages/Wisdom";
import Quates from "./pages/Quates";
import { IoIosArrowUp } from "react-icons/io";
import Events from "./pages/Events";
import CTAForm from "./pages/CTAForm";
import Popup from "./pages/Popup";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const [modal, setModal] = useState(true);
  const [popup, setPopup] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [scrollValue, setScrollValue] = useState(0);
  console.log("Scroll : ", scrollValue);

  const handleScroll = () => {
    const newScrollValue = window.scrollY;
    setScrollValue(newScrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ scale: 0.2, opacity: 0 }}
            className="w-full flex justify-end fixed bottom-2 right-2"
          >
            <div
              className="bg-[#464038]/80 h-14 w-14 flex items-center justify-center rounded-full cursor-pointer"
              onClick={scrollToTop}
            >
              <IoIosArrowUp className="text-4xl text-gray-200" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <CTAForm/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adinath" element={<Adinath />} />
        <Route path="/wisdom" element={<Wisdom />} />
        <Route path="/quates" element={<Quates />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/message" element={<Message />} />
      </Routes>

      {modal && (
        <div className="fixed bottom-3 right-20">
          <Popup setModal={setModal} setPopup={setPopup} />
        </div>
      )}
      {popup && (
        <div>
          <CTAForm setPopup={setPopup} />
        </div>
      )}
    </>
  );
}

export default App;
