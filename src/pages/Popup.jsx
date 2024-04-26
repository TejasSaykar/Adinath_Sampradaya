import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Popup = ({setModal, setPopup}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay : 4, duration: 1 }}
        className="w-full bg-transparent flex justify-end"
      >
        <div className="bg-black rounded-md text-white w-1/4 p-3">
          <div>
            <div className="w-full mx-auto">
              <img src="/img/avatar.jpg" className="rounded-md" alt="" />
            </div>
            <div className="mt-3 flex justify-between items-center">
              <button onClick={() => {setModal(false), setPopup(true)}} className="bg-orange-700 px-12 py-1 rounded-md">
                Register
              </button>
              <button onClick={() => setModal(false)} className="bg-gray-800 px-4 py-1 rounded-md">
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
