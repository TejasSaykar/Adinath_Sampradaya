import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CTAForm = ({ setPopup }) => {
  return (
    <div className="fixed z-10 w-full inset-0 flex items-center justify-center bg-black/90">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          exit={{scale: 0.2, opacity: 0}}
          className="md:w-1/3 relative w-full mx-3 md:mx-auto rounded-lg bg-white px-5 md:px-10 py-5 flex flex-col gap-4"
        >
          <div className="absolute right-5 top-2">
            <h2
              className="text-3xl font-semibold cursor-pointer"
              onClick={() => setPopup(false)}
            >
              &times;
            </h2>
          </div>
          <form className="flex flex-col gap-5">
            <h2 className="text-center text-3xl font-bold">Register</h2>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-base font-semibold text-gray-600"
                htmlFor=""
              >
                First Name
              </label>
              <input
                type="text"
                className="ring-1 ring-gray-400 focus:outline-none p-2 rounded-md"
                placeholder="Enter first name...."
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-base font-semibold text-gray-600"
                htmlFor=""
              >
                Last Name
              </label>
              <input
                type="text"
                className="ring-1 ring-gray-400 focus:outline-none p-2 rounded-md"
                placeholder="Enter last name...."
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-base font-semibold text-gray-600"
                htmlFor=""
              >
                Email
              </label>
              <input
                type="text"
                className="ring-1 ring-gray-400 focus:outline-none p-2 rounded-md"
                placeholder="Enter email...."
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-base font-semibold text-gray-600"
                htmlFor=""
              >
                Phone
              </label>
              <input
                type="text"
                className="ring-1 ring-gray-400 focus:outline-none p-2 rounded-md"
                placeholder="Enter phone..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base font-semibold text-gray-600"
              >
                Country
              </label>
              <select className="ring-1 ring-gray-400 focus:outline-none rounded-md p-2">
                <option value="">India</option>
                <option value="">UK</option>
                <option value="">Europe</option>
                <option value="">Malaysia</option>
              </select>
            </div>
            <div>
              <button className="bg-orange-500 px-6 py-2 rounded-md text-white font-bold">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CTAForm;
