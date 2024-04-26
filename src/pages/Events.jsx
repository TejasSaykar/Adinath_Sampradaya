import Layout from "@/components/Layout";
import React from "react";
import { LuShare2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-2/4 mx-auto py-2">
          <h2 className="pt-3 text-[12px]">
            <span className="hover:underline hover:text-orange-700 cursor-pointer">
              <Link to="/">Home</Link>
            </span>{" "}
            &nbsp; / &nbsp;{" "}
            <span className="text-orange-700">Events - Adinath Sampradaya</span>
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="w-[86%] mx-auto p-8 text-4xl lg:text-7xl py-16 bg-orange-900 text-[#e9ceac]">
            <h2 className="text-center">Adinath Events</h2>
          </div>
        </motion.div>

        <div className="w-full mt-8 pb-4">
          <div className="md:w-[75vw] px-4 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            <div className="p-1 shadow-xl">
              <div className="bg-orange-50/50 w-full h-full">
                <div className="w-full flex items-center justify-center">
                  <img
                    src="https://static.sadhguru.org/d/46272/1651831760-gurupurnimaatlb-lp_thumb.jpg"
                    className="text-center w-full h-full"
                    alt=""
                  />
                </div>
                <p className="text-2xl px-5 py-2">
                  The best thing that you can do for the world is to be a joyful
                  and blissful human being.
                </p>
                <div className="flex justify-between mt-5 px-5">
                  <h2 className="text-[#a0988c] font-bold">Apr 16, 2024</h2>
                  <span className="font-semibold cursor-pointer">
                    <LuShare2 className="text-3xl text-[#a0988c] font-bold" />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 shadow-xl">
              <div className="bg-orange-50/50 w-full h-full">
                <div className="w-full flex items-center justify-center">
                  <img
                    src="https://static.sadhguru.org/d/46272/1651955846-diwali-and-karthigai-deepam-thumb.jpg"
                    className="text-center"
                    alt=""
                  />
                </div>
                <p className="text-2xl px-5 py-2">
                  Making assumptions about something that you do not know is a
                  sure way to remain ignorant.
                </p>
                <div className="flex justify-between mt-5 px-5 py-2">
                  <h2 className="text-[#a0988c] font-bold">Apr 16, 2024</h2>
                  <span className="font-semibold cursor-pointer">
                    <LuShare2 className="text-3xl text-[#a0988c] font-bold" />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 shadow-xl">
              <div className="bg-orange-50/50 w-full h-full">
                <div className="w-full flex items-center justify-center">
                  <img
                    src="https://static.sadhguru.org/d/46272/1651963577-mahalayaamavasya_thumb.jpg"
                    className="text-center"
                    alt=""
                  />
                </div>
                <p className="text-2xl px-5 py-2">
                  For effective functioning in the world, knowledge is not the
                  main factor, but clarity of perception.
                </p>
                <div className="flex justify-between px-5 mt-5">
                  <h2 className="text-[#a0988c] font-bold">Apr 16, 2024</h2>
                  <span className="font-semibold cursor-pointer">
                    <LuShare2 className="text-3xl text-[#a0988c] font-bold" />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 shadow-xl">
              <div className="bg-orange-50/50 p-8 w-full h-full">
                <div className="w-full py-5 flex items-center justify-center">
                  <img
                    src="/img/quatation.svg"
                    className="text-center"
                    alt=""
                  />
                </div>
                <p className="text-2xl">
                  Being human means being capable of looking at every life form
                  with a sense of tenderness.
                </p>
                <div className="flex justify-between mt-5">
                  <h2 className="text-[#a0988c] font-bold">Apr 16, 2024</h2>
                  <span className="font-semibold cursor-pointer">
                    <LuShare2 className="text-3xl text-[#a0988c] font-bold" />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 shadow-xl">
              <div className="bg-orange-50/50 p-8 w-full h-full">
                <div className="w-full py-5 flex items-center justify-center">
                  <img
                    src="/img/quatation.svg"
                    className="text-center"
                    alt=""
                  />
                </div>
                <p className="text-2xl">
                  The only real wealth you can carry through life and death is
                  profoundness of experience.
                </p>
                <div className="flex justify-between mt-5">
                  <h2 className="text-[#a0988c] font-bold">Apr 16, 2024</h2>
                  <span className="font-semibold cursor-pointer">
                    <LuShare2 className="text-3xl text-[#a0988c] font-bold" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
