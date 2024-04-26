import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import CTAForm from "./CTAForm";

const Home = () => {
  const { scrollY, scrollX } = useScroll();

  const imgOpacit = useTransform(scrollY, [0, 100, 300, 500], [1, 0.5, 0.3, 0]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.2]);
  const yText = useTransform(scrollY, [0, 200], [0, 150]);
  const lImg = useTransform(
    scrollY,
    [500, 600, 700, 800],
    [-300, -200, -100, 0]
  );
  const lImgScale = useTransform(
    scrollY,
    [500, 600, 700, 800],
    [0.2, 0.6, 0.8, 1]
  );
  const rDiv = useTransform(scrollY, [500, 600, 700, 800], [0, 0.3, 0.6, 1]);

  return (
    <Layout>
      <div className="w-full -z-5">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.2 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", duration: 1.5 }}
          className="relative w-full"
        >
          <motion.img
            style={{ opacity: imgOpacit }}
            src="/img/kalki.jpeg"
            className="w-full object-cover bg-cover h-[90vh]"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {/* <motion.div
            style={{ scale: scaleText, y: yText }}
            className="absolute hidden  top-[10rem] md:right-[30rem] text-center md:flex justify-center items-center flex-col gap-4 text-orange-600 text-2xl md:text-4xl font-black overflow-hidden"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="text-center"
              style={{ textShadow: "1px 1px black" }}
            >
              SAVE THE UNIVERSE FROM KALI PURUSH IS EQUAL TO
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="text-center"
              style={{ textShadow: "1px 1px black" }}
            >
              ||OM NAMO BHAGAVATE KALKI RAMAYA NAMAHA||
            </motion.h3>
          </motion.div> */}
          <motion.div
            // style={{ scale: scaleText, y: yText }}
            className="absolute md:hidden top-[10rem] md:right-[30rem] text-start flex flex-col gap-4 text-orange-600 text-2xl md:text-4xl font-black overflow-hidden"
          >
            <motion.h2
              // initial={{ opacity: 0, scale: 0.2 }}
              // animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="text-center"
              style={{ textShadow: "1px 1px white" }}
            >
              SAVE THE UNIVERSE FROM KALI PURUSH IS EQUAL TO
            </motion.h2>
            <motion.h3
              // initial={{ opacity: 0, scale: 0.2 }}
              // animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="text-center"
              style={{ textShadow: "1px 1px white" }}
            >
              ||OM NAMO BHAGAVATE KALKI RAMAYA NAMAHA||
            </motion.h3>
          </motion.div>
        </motion.div>

        <div className="w-full grid md:grid-cols-2 items-center container py-10 md:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full md:px-10 mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.2, x: -300 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl font-bold pb-5 text-[#c09b55]"
            >
              Aadinath Sampraday
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
              className="text-2xl pb-4 font-medium text-[#c09b55]"
            >
              What is the Definition of Adinath Sampradaya?
            </motion.h3>
          </motion.div>
          <div>
            <div className="flex flex-col text-[18px] gap-4">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                The term{" "}
                <span className="font-bold text-[#c09b55]">“Aadi”</span> means
                "first" or "first god in hindu religion”(Sanskrit) .In Hindu
                religion its similar for shiva Mahadeva, or Maheshvara, and
                beyond these mental concepts, the Supreme Reality as the
                originator of all things.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                The <span className="font-bold text-[#c09b55]">“Nath”</span>{" "}
                means "God, protector, grand master" (Sanskrit).The related
                Sanskrit term Aadi Nath means first or original God, and is a
                synonym for Shiva, the founder of the Nath..
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                In Sanskrit{" "}
                <span className="font-bold text-[#c09b55]">“Sampraday”</span>{" "}
                means spiritual lineage or a spiritual believers community.
                Sampradayas are living traditions of both teaching and practice
                within a specific religious-spiritual tradition. They are
                generally composed of a monastic order within a specific guru
                lineage, with ideas developed and transmitted, redefined and
                reviewed by each successive generation of followers. Read More..
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full flex h-full items-center justify-center bg-red-300">
          <div className="w-full h-full">
            <div className="w-full md:gap-10 h-full gap-5">
              <motion.div className="w-full h-full md:h-[90vh] text-white relative">
                <motion.img
                  src="https://www.learnreligions.com/thmb/9X3gLTQoakHFwLcKOxGPGWtm924=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/evening-at-varanasi-610625330-58e54bd25f9b58ef7e7c8bb9.jpg"
                  className="w-full mx-auto h-full object-cover bg-center mix-blend-multiply"
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="flex flex-col px-2 py-4 md:py-0 absolute text-center w-full gap-8 items-center top-0 md:top-[12rem] justify-center"
                >
                  <div className="flex flex-col md:gap-2">
                    <h1
                      className="md:text-3xl text-xl font-extrabold text-[#c09b55]"
                      style={{ textShadow: "1px 1px white" }}
                    >
                      KOTI PARTHIVA LINGARCHANA
                    </h1>
                    <p className="md:text-xl">
                      A Prestigious Largest Ritual in the Earth
                    </p>
                  </div>
                  <div className="flex flex-col md:gap-2">
                    <h3 className="text-base font-medium">VENUE</h3>
                    <h2
                      className="md:text-2xl font-bold text-[#c09b55]"
                      style={{ textShadow: "1px 1px white" }}
                    >
                      SHIVALA GHAT, VARANASI
                    </h2>
                    <h3 className="md:text-lg font-medium">NOV 19-27, 2023</h3>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full my-10">
          <div className="w-full md:w-[80%] mx-auto container grid md:grid-cols-2 gap-10 md:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
              }}
              className="w-full flex flex-col"
            >
              <div className="shadow-xl order-2 h-2/3 md:order-1">
                <img
                  src="/img/avatar.jpg"
                  className="aspect-video object-cover h-full w-full bg-cover"
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col gap-2 order-1">
                <h2 className="text-2xl font-bold text-[#c09b55]">
                  What is Avatar ?
                </h2>
                <p>
                  The Dashavatara (Sanskrit: Daśāvatāra) are the ten primary
                  avatars of Vishnu, a principal Hindu god. Vishnu is said to be
                  descendent in the form of an Avatar (superpower) to restore
                  cosmic order
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
              }}
              className="w-full flex flex-col"
            >
              <div className="shadow-xl order-2 h-2/3 md:order-1">
                <img
                  src="/img/kalki.jpg"
                  className="aspect-video object-cover h-full w-full bg-cover"
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col gap-2 order-1">
                <h2 className="text-2xl font-bold text-[#c09b55]">
                  When the God Kalki is came to Earth ?
                </h2>
                <p>
                  It is considered as the 10th incarnation and future
                  incarnation of Lord Vishnu in Hinduism. Many religions of the
                  world refer to the incarnation of Lord Kalki.
                </p>
                <Link>Read More...</Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full mt-10">
          <motion.div
            // initial={{ opacity: 0, x: -100 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{
            //   duration: 0.7,
            // }}
            className="overflow-x-hidden bg-gradient-to-bl from-orange-400 from-10% via-orange-100 via-35% to-orange-100 to-90%"
          >
            <div className="flex flex-col gap-3 items-center justify-center w-1/2 mx-auto py-10">
              <motion.h2
                // initial={{ opacity: 0, y: -100 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{
                //   duration: 1,
                // }}
                className="text-2xl font-bold text-black"
              >
                Aadinath Sampraday
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
                className="text-xl font-semibold text-black"
              >
                ||Parabramha Parmeshwar Mahaawtar Sarvadhnya Shri. Kalkiramji ||
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                Aadhinath Sampraday Samajik Shekshanik Bauddeshiya Sanstha is a
                Spiritual, Educational, (NGO) social organisation which is
                traditional By method means Gurukul teaches many things like
                spiritual, sadhana, types of yoga sadhana. This organisation was
                founded by Parabramha Parmeshwar Mahaawtar Sarvadhnya Shri.
                Kalkiramji did it
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
