import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import CTAForm from "@/pages/CTAForm";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState("");
  const [drop, setDrop] = useState({
    drop1: false,
    drop2: false,
  });

  const location = useLocation();
  console.log("Location", location.pathname.split("/")[1]);

  return (
    <motion.nav
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="">
        <div className="w-full bg-orange-700/50 hidden lg:block">
          <div className="w-full flex justify-end items-center pr-32 h-9 gap-5">
            <div className="flex items-center gap-1 text-orange-100 ">
              <HiOutlineMail className="text-lg" />
              <h4 className="text-[14px] flex items-end mt-2 hover:text-gray-300 cursor-pointer">
                Subscribe
              </h4>
            </div>
            <div className="flex items-center gap-1 text-orange-100 ">
              <MdOutlinePeopleOutline className="text-lg" />
              <h4 className="text-[14px] flex items-end mt-2 hover:text-gray-300 cursor-pointer">
                Volunteer
              </h4>
            </div>
            <div className="flex items-center gap-1 text-orange-100 ">
              <BiDonateHeart className="text-lg" />
              <h4 className="text-[14px] flex items-end mt-2 hover:text-gray-300 cursor-pointer">
                Donate
              </h4>
            </div>
            <div className="flex items-center gap-1 text-orange-100">
              <FiShoppingCart className="text-lg text-orange-100" />
              <h4 className="text-[14px] flex items-end mt-2 hover:text-gray-300 cursor-pointer">
                Shop
              </h4>
            </div>
            <div className="flex bg-orange-200 h-full items-center gap-1 hover:bg-orange-800 text-orange-100 cursor-pointer">
              <h2 className="px-3 text-gray-700 font-semibold hover:text-gray-300">
                Adinath Sampradaya
              </h2>
            </div>
            <div className="flex items-center gap-1 text-orange-100 relative">
              <TbWorld className="text-xl" />
              <motion.div
                whileTap={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <MdKeyboardArrowDown
                  onClick={() => setShow(!show)}
                  className="text-xl cursor-pointer"
                />
              </motion.div>
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, y: -30 }}
                    className="absolute bg-white top-7 z-20 px-4 text-red-400 flex flex-col gap-2 py-2 rounded-md"
                  >
                    <h3>Australia</h3>
                    <h3>Canada</h3>
                    <h3>India</h3>
                    <h3>Malaysia</h3>
                    <h3>Singapore</h3>
                    <h3>UK & Europe</h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex gap-3 text-orange-100">
              <button className="hover:text-orange-800 font-semibold">
                Login
              </button>
              <button className="hover:text-orange-800 font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#464038] flex items-center h-24">
          <div className="lg:w-2/3 w-full lg:mx-auto text-[#f7ecde] px-4 lg:px-0 flex items-center justify-between lg:container">
            <div>
              <h2 className="lg:text-2xl font-bold">
                <Link to={"/"} className="cursor-pointer">
                  ADINATH SAMPRADAYA
                </Link>
              </h2>
            </div>
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger className="">
                  <IoIosMenu className="text-4xl" />
                </SheetTrigger>
                <div className="">
                  <SheetContent className="bg-orange-100">
                    <SheetHeader className="w-full bg-orange-200 mt-5">
                      <div className="py-3 flex justify-between items-center px-8">
                        <div className="flex gap-2">
                          <button className="border-r-2 border-[#2d2a26]/80 pr-2 font-bold text-[#2d2a26]">
                            Login
                          </button>
                          <button className=" font-bold text-[#2d2a26]">
                            Sign Up
                          </button>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-[#2d2a26] relative">
                            <TbWorld className="text-xl" />
                            <motion.div
                              whileTap={{ scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <MdKeyboardArrowDown
                                onClick={() => setShow(!show)}
                                className="text-xl cursor-pointer"
                              />
                            </motion.div>
                            <AnimatePresence>
                              {show && (
                                <motion.div
                                  initial={{ opacity: 0, y: -30 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4 }}
                                  exit={{ opacity: 0, y: -30 }}
                                  className="absolute bg-white w-36 -right-5 top-7 z-20 px-4 text-red-400 flex flex-col gap-2 py-2 rounded-md"
                                >
                                  <h3>Australia</h3>
                                  <h3>Canada</h3>
                                  <h3>India</h3>
                                  <h3>Malaysia</h3>
                                  <h3>Singapore</h3>
                                  <h3>UK & Europe</h3>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </SheetHeader>

                    <div className="bg-[#2d2a26] text-[#ffffff]">
                      <div className="flex pl-3 justify-between border-b-2 items-center relative">
                        <div>
                          <h2>
                            <Link to={"/"}>Adinath Sampradaya</Link>
                          </h2>
                        </div>
                        <div className="border-[1.4px] border-b-0 border-t-0 border-gray-400 flex items-center justify-center cursor-pointer h-12 w-12">
                          <IoIosArrowDown className="text-2xl text-gray-300" />
                        </div>
                        <div className="absolute"></div>
                      </div>

                      <div>
                        <div className="flex pl-3 justify-between border-b-2 items-center">
                          <div>
                            <h2>
                              <Link to={"/wisdom"}>Wisdom</Link>
                            </h2>
                          </div>
                          <div
                            onClick={() =>
                              setDrop({
                                ...drop,
                                drop1: !drop.drop1,
                                drop2: false,
                              })
                            }
                            className="border-[1.4px] border-b-0 border-t-0 border-gray-400 flex items-center justify-center cursor-pointer h-12 w-12"
                          >
                            <IoIosArrowDown className="text-2xl text-gray-300" />
                          </div>
                        </div>
                        <AnimatePresence>
                          {drop.drop1 && (
                            <motion.div
                              // initial={{ opacity: 0, y: -30 }}
                              // animate={{ opacity: 1, y: 0 }}
                              // transition={{ duration: 0.1 }}
                              // exit={{ y: -30, opacity: 0 }}
                              className="bg-[#cfc2c2] flex flex-col gap-2 py-4 px-3 font-bold text-[#2d2a26]"
                            >
                              <h2 className="cursor-pointer">Exclusive</h2>
                              <h2 className="cursor-pointer">
                                <Link to={"/quates"}>Quates</Link>
                              </h2>
                              <h2 className="cursor-pointer">Videos</h2>
                              <h2 className="cursor-pointer">Articles</h2>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <div className="flex pl-3 justify-between border-b-2 items-center">
                          <div>
                            <h2>
                              <Link to={"/events"}>Events</Link>
                            </h2>
                          </div>
                          <div
                            onClick={() =>
                              setDrop({
                                ...drop,
                                drop2: !drop.drop2,
                                drop1: false,
                              })
                            }
                            className="border-[1.4px] border-b-0 border-t-0 border-gray-400 flex items-center justify-center cursor-pointer h-12 w-12"
                          >
                            <IoIosArrowDown className="text-2xl text-gray-300" />
                          </div>
                        </div>
                        <AnimatePresence>
                          {drop.drop2 && (
                            <motion.div
                              // initial={{ opacity: 0, y: -30 }}
                              // animate={{ opacity: 1, y: 0 }}
                              // transition={{ duration: 0.1 }}
                              // exit={{ y: -30, opacity: 0 }}
                              className="bg-[#cfc2c2] flex flex-col gap-2 py-4 px-3 font-bold text-[#2d2a26]"
                            >
                              <h2 className="cursor-pointer">
                                <Link to={"/events"}>Annual Events</Link>
                              </h2>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="fixed w-full bottom-0">
                      <div className="bg-[#e3cab6] px-5 py-4">
                        <h3 className="text-xl font-bold border-b-2 w-fit border-[#5d5752]">Adinath Sampradaya</h3>
                      </div>
                      <div className="flex justify-between items-center py-4 px-5 w-full">
                        <div className="flex items-center gap-1">
                          <MdOutlinePeopleOutline className="text-lg" />
                          <h4 className="text-[14px] flex font-bold items-end mt-2 hover:text-orange-700 cursor-pointer">
                            Volunteer
                          </h4>
                        </div>
                        <div className="flex items-center gap-1 ">
                          <BiDonateHeart className="text-lg" />
                          <h4 className="text-[14px] flex font-bold items-end mt-2 hover:text-orange-700 cursor-pointer">
                            Donate
                          </h4>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiShoppingCart className="text-lg" />
                          <h4 className="text-[14px] flex font-bold items-end mt-2 hover:text-orange-700 cursor-pointer">
                            Shop
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </div>
              </Sheet>
            </div>
            <div className="lg:flex gap-6 hidden">
              <div className="relative">
                <h2
                  onMouseEnter={() => setTab("one")}
                  onMouseLeave={() => setTab("")}
                  className="border-r-[1px] pr-4 cursor-pointer hover:underline hover:text-[#f0bb77]"
                >
                  <Link to={"/"}>Adinath Sampradaya</Link>
                </h2>
                {tab === "one" && <div className="absolute"></div>}
              </div>
              <div className="relative">
                <h2
                  onMouseEnter={() => setTab("two")}
                  onMouseLeave={() => setTab("")}
                  className="border-r-[1px] pr-4 cursor-pointer hover:underline hover:text-[#f0bb77]"
                >
                  <Link to={"/wisdom"} className="" onClick={() => setTab("")}>
                    Wisdom
                  </Link>
                </h2>
                <AnimatePresence>
                  {tab === "two" && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      exit={{ y: 40, opacity: 0 }}
                      className="absolute bg-white text-red-400 px-6 left-1 top-8 flex flex-col gap-2 py-5"
                      onMouseEnter={() => setTab("two")}
                      onMouseLeave={() => setTab("")}
                    >
                      <h2 className="cursor-pointer hover:text-red-600 font-semibold">
                        Exclusive
                      </h2>
                      <h2 className="cursor-pointer hover:text-red-600 font-semibold">
                        <Link
                          to={"/quates"}
                          className={`${
                            location.pathname.split("/")[1] === "quates" &&
                            "text-red-600 font-bold"
                          }`}
                        >
                          Qoutes
                        </Link>
                      </h2>
                      <h2 className="cursor-pointer hover:text-red-600 font-semibold">
                        Videos
                      </h2>
                      <h2 className="cursor-pointer hover:text-red-600 font-semibold">
                        Articles
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div
                className="relative"
                onMouseEnter={() => setTab("three")}
                onMouseLeave={() => setTab("")}
              >
                <h2
                  onMouseEnter={() => setTab("three")}
                  onMouseLeave={() => setTab("")}
                  className="border-r-[1px] pr-4 cursor-pointer hover:underline hover:text-[#f0bb77]"
                >
                  <Link to={"/events"}>Events</Link>
                </h2>
                <AnimatePresence>
                  {tab === "three" && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      exit={{ y: 40, opacity: 0 }}
                      className="absolute bg-white text-red-400 top-7 px-3 w-36 py-5"
                      onMouseEnter={() => setTab("three")}
                      onMouseLeave={() => setTab("")}
                    >
                      <h2 className="cursor-pointer hover:text-red-600 font-semibold">
                        <Link to={"/events"}>Annual Events</Link>
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {/* <div></div> */}
          </div>
        </div>
      </div>

      {/* <CTAForm/> */}


      {/* <div className="w-full flex h-24 justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          <Link to={"/"} className="flex items-center gap-3">
            <img src="/img/logo.webp" className="h-10 w-10" alt="" />
            <h2 className="text-2xl text-gray-800">ADINATH SAMPRADY</h2>
          </Link>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  <Link to={"/"} className="text-base">
                    <motion.h3
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="flex gap-1 items-center"
                    >
                      Home
                    </motion.h3>
                  </Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  <Link to={"/adinath"} className="text-base">
                    <motion.h3
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      Adinath
                    </motion.h3>
                  </Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  <Link to={"/message"} className="text-base">
                    <motion.h3
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      A Message
                    </motion.h3>
                  </Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  <Link to={"/about"} className="text-base">
                    <motion.h3
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      About Us
                    </motion.h3>
                  </Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <IoIosMenu className="text-4xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div> */}
    </motion.nav>
  );
};

export default Navbar;
