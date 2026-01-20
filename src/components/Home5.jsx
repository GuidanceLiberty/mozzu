/* eslint-disable no-unused-vars */
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import React from "react";
import logo from "@/assets/img/logo/logo-black3.png";
import logoIcon from "@/assets/img/logo/favicon.png";
import {
  blockLinks,
  homeLinks,
  menuLinks,
  pageLinks,
  shopLinks,
} from "@/data/home3Data";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";
import {
  about,
  blogNews,
  caffeno,
  Herosection,
  specialCoffee,
  specialMenu,
  testimonial,
} from "@/data/home5Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
//caffeno video
import Video from "@/assets/img/home-4/coffeeno-vid.png";
import CoffeenoThumb from "@/assets/img/home-4/coffeeno-thumb.jpg";

//Footer Images
import Logo from "@/assets/img/logo/logo-white.png";
import FooterLeftImg from "@/assets/img/home-4/footer4-left.png";
import FooterRightImg from "@/assets/img/home-4/footer4-right.png";
import FotterEle from "@/assets/img/home-3/footer-ele.png";

const Home5 = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= MAIN NAVBAR SECTION ================= */}
      <motion.section
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 left-0 z-50 bg-white  border-b border-white/5"
      >
        <div className="flex items-center justify-between w-full h-[90px]">
          {/* LEFT SIDE: LOGO */}
          <div className="px-3 md:px-10 h-full flex items-center border-r border-white/10">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Mozzu Logo"
                /* Mobile: 64px (h-16) | Desktop: 80px (md:h-20) */
                className="h-16 md:h-20 w-auto object-contain transition-all duration-300 transform hover:scale-105"
              />
            </Link>
          </div>

          {/* CENTER: NAVIGATION LINKS (DESKTOP) */}
          <nav className="hidden xl:flex items-center gap-10 text-black font-bold text-[14px] uppercase tracking-wider h-full">
            {/* HOME MEGA MENU */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <span className="group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                Home <ChevronDown size={14} className="opacity-70" />
              </span>
              <div className="absolute top-[90px] left-[-150px] w-[880px] bg-white shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-70 border-t-2 rounded-sm border-orange-600">
                <div className="grid grid-cols-3 gap-6">
                  {homeLinks.map((home, index) => (
                    <Link
                      key={index}
                      to="/"
                      className="relative overflow-hidden group/item rounded-md border border-gray-100 block"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={home.homelinkImg}
                          alt="Home"
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover/item:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover/item:opacity-100 font-black text-xs border border-white/40 px-3 py-2 rounded">
                            VIEW DEMO
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* MENU DROPDOWN */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <span className="group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                Menu <ChevronDown size={14} className="opacity-70" />
              </span>
              <div className="absolute top-[90px] left-0 w-60 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-70 border-t-2 rounded-md border-orange-600">
                <ul className="flex flex-col">
                  {menuLinks.map((item, index) => (
                    <li
                      key={index}
                      className="border-b border-gray-100 last:border-none"
                    >
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-8 py-4 text-[13px] text-gray-800 hover:bg-[#ff4d00] rounded-sm hover:text-white transition-all duration-200 font-bold uppercase tracking-tight"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SHOP DROPDOWN */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <span className="group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                Shop <ChevronDown size={14} className="opacity-70" />
              </span>
              <div className="absolute top-[90px] left-0 w-60 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-70 border-t-2 rounded-md border-orange-600">
                <ul className="flex flex-col">
                  {shopLinks.map((shop, index) => (
                    <li
                      key={index}
                      className="border-b border-gray-100 last:border-none"
                    >
                      <Link
                        to={`/${shop.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-8 py-4 text-[13px] text-gray-800 hover:bg-[#ff4d00] rounded-sm hover:text-white transition-all duration-200 font-bold uppercase tracking-tight"
                      >
                        {shop}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BLOG DROPDOWN */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <span className="group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                Blog <ChevronDown size={14} className="opacity-70" />
              </span>
              <div className="absolute top-[90px] left-0 w-60 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-70 border-t-2 rounded-md border-orange-600">
                <ul className="flex flex-col">
                  {blockLinks.map((blog, index) => (
                    <li
                      key={index}
                      className="border-b border-gray-100 last:border-none"
                    >
                      <Link
                        to={`/${blog.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-8 py-4 text-[13px] text-gray-800 hover:bg-[#ff4d00] rounded-sm hover:text-white transition-all duration-200 font-bold uppercase tracking-tight"
                      >
                        {blog}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PAGES DROPDOWN */}
            <div className="relative group h-full flex items-center cursor-pointer">
              <span className="group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                Pages <ChevronDown size={14} className="opacity-70" />
              </span>
              <div className="absolute top-[90px] left-0 w-60 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-70 border-t-2 rounded-md border-orange-600">
                <ul className="flex flex-col">
                  {pageLinks.map((page, index) => (
                    <li
                      key={index}
                      className="border-b border-gray-100 last:border-none"
                    >
                      <Link
                        to={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-8 py-4 text-[13px] text-gray-800 hover:bg-[#ff4d00] rounded-sm hover:text-white transition-all duration-200 font-bold uppercase tracking-tight"
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              className="hover:text-orange-600 transition-colors h-full flex items-center"
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE: TOOLS */}
          <div className="flex items-center h-full">
            <div className="flex items-center gap-8 px-8 border-l border-white/5">
              <Search className="text-black w-5 h-5 cursor-pointer hover:text-orange-600 transition-colors hidden sm:block" />
              <div className="relative cursor-pointer group">
                <ShoppingCart className="w-6 h-6 text-black group-hover:text-orange-600 transition-colors" />
                <span className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  02
                </span>
              </div>
            </div>

            <div className="px-6">
              <Button
                variant="mozzu"
                className="hidden md:flex font-black uppercase rounded-xl px-8 py-6 text-sm tracking-wide shadow-lg"
              >
                BOOK A TABLE
              </Button>
            </div>

            {/* MOBILE SIDEBAR */}
            <Sheet>
              <SheetTrigger asChild>
                <div className="cursor-pointer bg-[#1a1a1a] h-[50px] w-[50px] rounded-full flex items-center justify-center transition-all border-l border-white/5 mr-10">
                  <Menu size={28} className="text-white" />
                </div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white w-full max-w-[400px] p-0 border-none outline-none overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* LOGO & CLOSE */}
                  <div className="p-8 pt-14 flex justify-between items-center w-full">
                    <Link to="/">
                      <img
                        src={logoIcon}
                        alt="Logo"
                        className="w-full max-w-[180px] object-contain"
                      />
                    </Link>
                    <SheetClose className="bg-[#ff4d00] p-2.5 rounded-md text-white hover:bg-black transition-all hover:rotate-90">
                      <X size={24} />
                    </SheetClose>
                  </div>

                  <div className="px-10 pb-10 flex-1">
                    {/* ACCORDION NAVIGATION */}
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full mb-10"
                    >
                      {/* HOME */}
                      <AccordionItem
                        value="home"
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="text-2xl font-black uppercase py-4">
                          Home
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col pl-4 space-y-3 font-bold text-[16px] text-gray-700">
                          <Link
                            to="/"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Home 01
                          </Link>
                          <Link
                            to="/home-2"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Home 02
                          </Link>
                          <Link
                            to="/home-3"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Home 03
                          </Link>
                          <Link
                            to="/home-4"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Home 04
                          </Link>
                          <Link
                            to="/home-5"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Home 05
                          </Link>
                          <Link
                            to="/soon"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Coming Soon
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      {/* MENU */}
                      <AccordionItem
                        value="menu"
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="text-2xl font-black uppercase py-4">
                          Menu
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col pl-4 space-y-3 font-bold text-[16px] text-gray-700">
                          <Link
                            to="/single-food-menu"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Single Food Menu
                          </Link>
                          <Link
                            to="/menu-list"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Menu List
                          </Link>
                          <Link
                            to="/restaurant-list"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant List
                          </Link>
                          <Link
                            to="/menu-categories"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Menu Categories
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      {/* SHOP */}
                      <AccordionItem
                        value="shop"
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="text-2xl font-black uppercase py-4">
                          Shop
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col pl-4 space-y-3 font-bold text-[16px] text-gray-700">
                          <Link
                            to="/shop"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Shop
                          </Link>
                          <Link
                            to="/shop-detail"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Shop Details
                          </Link>
                          <Link
                            to="/cart"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Cart
                          </Link>
                          <Link
                            to="/checkout"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Checkout
                          </Link>
                          <Link
                            to="/order-tracking"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Order Tracking
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      {/* BLOG */}
                      <AccordionItem
                        value="blog"
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="text-2xl font-black uppercase py-4">
                          Blog
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col pl-4 space-y-3 font-bold text-[16px] text-gray-700">
                          <Link
                            to="/blog-standard"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Blog Standard
                          </Link>
                          <Link
                            to="/blog-detail"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Blog Details
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      {/* PAGES */}
                      <AccordionItem value="pages" className="border-none">
                        <AccordionTrigger className="text-2xl font-black uppercase py-4">
                          Pages
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col pl-4 space-y-3 font-bold text-[16px] text-gray-700">
                          <Link
                            to="/about"
                            className="hover:text-orange-600 transition-colors"
                          >
                            About Us
                          </Link>
                          <Link
                            to="/faq"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Faqs
                          </Link>
                          <Link
                            to="/team"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Team
                          </Link>
                          <Link
                            to="/team-detail"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Team Details
                          </Link>
                          <Link
                            to="/restaurant-list"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant List
                          </Link>
                          <Link
                            to="/restaurant-details01"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant Details 01
                          </Link>
                          <Link
                            to="/restaurant-details02"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant Details 02
                          </Link>
                          <Link
                            to="/contact"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Contact
                          </Link>
                          <Link
                            to="/error"
                            className="hover:text-orange-600 transition-colors"
                          >
                            404
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* CONTACT INFO */}
                    <div className="space-y-6 pt-6 border-t border-gray-100">
                      <h3 className="text-2xl font-black uppercase text-black tracking-tight">
                        Contact Info
                      </h3>
                      <div className="flex gap-4 items-start group cursor-pointer">
                        <div className="bg-gray-100 p-3 rounded-full text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                          <MapPin size={20} />
                        </div>
                        <p className="text-gray-600 font-bold pt-1">
                          105 Allen Ave/Lagos/Nigeria.
                        </p>
                      </div>
                      <div className="flex gap-4 items-start group cursor-pointer">
                        <div className="bg-gray-100 p-3 rounded-full text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                          <Mail size={20} />
                        </div>
                        <p className="text-gray-600 font-bold pt-1">
                          newguidance@gmail.com
                        </p>
                      </div>
                      <div className="flex gap-4 items-start group cursor-pointer">
                        <div className="bg-gray-100 p-3 rounded-full text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                          <Phone size={20} />
                        </div>
                        <p className="text-gray-600 font-bold pt-1">
                          09112524812
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="mozzu"
                      className="w-full py-8 text-lg font-black uppercase rounded-md flex items-center justify-center gap-3 mt-8 shadow-md"
                    >
                      GET STARTED <span className="text-2xl">→</span>
                    </Button>

                    <div className="flex gap-3 pt-8">
                      {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-11 h-11 border border-gray-100 flex items-center justify-center rounded-md text-gray-500 hover:bg-[#ff4d00] hover:text-white cursor-pointer transition-all shadow-sm"
                        >
                          <Icon size={18} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.section>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-white overflow-hidden pt-8 pb-20 px-4 lg:px-12">
        {/* TOP DECORATION LAYER */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <motion.img
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{
              opacity: 0.2,
              x: 0,
              rotate: 0,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.2,
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            src={Herosection[0].topleftImg}
            className="absolute top-10 left-0 w-32 md:w-64 lg:w-[350px]"
            alt="decoration-left"
          />
          <motion.img
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{
              opacity: 0.9,
              x: 0,
              rotate: 0,
              y: [0, 25, 0],
            }}
            transition={{
              duration: 1.2,
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            src={Herosection[0].toprightImg}
            className="absolute -top-13 -right-10 md:right-0 w-40 md:w-80 lg:w-[480px] object-contain opacity-90"
            alt="coffee-beans"
          />
        </div>

        <div className="max-w-[1550px] mx-auto relative z-20">
          {/* GIANT HEADING - Added Character Stagger Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 lg:mb-14 pt-16 lg:pt-24"
          >
            <h1 className="text-[42px] md:text-[80px] lg:text-[110px] font-serif font-light leading-[0.9] text-[#1a1a1a] tracking-tight uppercase max-w-[90%]">
              {Herosection[0].heading.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT: The Large Image - Added Smooth Hover Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src={Herosection[0].largeImg}
                alt="Barista Craft"
                className="w-full h-auto min-h-[450px] lg:min-h-[700px] object-cover"
              />
            </motion.div>

            {/* RIGHT: Info + 4 Feature Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between min-h-[450px] lg:min-h-[700px] lg:pr-12">
              {/* Title and Button Group */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-md lg:text-left flex flex-col items-start gap-6"
              >
                <p className="text-[#1a1a1a] text-lg md:text-xl font-medium leading-relaxed">
                  {Herosection[0].title}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="mozzu"
                    className="bg-black text-white hover:bg-[#ff4d00] border-none py-7 px-12 rounded-full font-black uppercase tracking-widest text-xs transition-colors duration-300"
                  >
                    BOOK A TABLE
                  </Button>
                </motion.div>
              </motion.div>

              {/* FEATURE CARDS - Added Staggered Slide-in */}
              <div className="flex flex-col gap-4 mt-12 lg:mt-0">
                {[
                  Herosection[0].text1,
                  Herosection[0].text2,
                  Herosection[0].text3,
                  Herosection[0].text4,
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                    whileHover={{
                      x: 15,
                      backgroundColor: "#1a1a1a",
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                    }}
                    className="bg-black text-white p-6 lg:p-8 rounded-3xl flex justify-between items-center group cursor-pointer border border-transparent hover:border-[#ff4d00]/30 transition-all duration-400"
                  >
                    <h3 className="text-xl lg:text-2xl font-serif font-medium tracking-wide">
                      {feature}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: -45 }}
                      className="w-10 h-10 lg:w-14 lg:h-14 bg-white text-black rounded-xl flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:text-white transition-all duration-500 shadow-sm"
                    >
                      <span className="text-xl lg:text-2xl font-bold">→</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAFFENO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-[#fcf8f4]">
        {/* CREAM BACKGROUND OVERLAY (Right Side Only for Desktop) */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#fcf8f4] -z-10" />

        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* LEFT SIDE: Image Container with Arch Animation */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "circOut" }}
              className="py-12 lg:py-24 px-4 lg:pl-12 lg:pr-6 flex justify-center items-center"
            >
              <div className="relative w-full max-w-[750px] group">
                {/* Inverted Arch: Added hover zoom effect inside the clip */}
                <div className="rounded-b-full overflow-hidden border border-black/5 shadow-2xl relative">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.5 }}
                    src={caffeno[0].aboutImg}
                    alt="Caffeno"
                    className="w-full h-auto object-cover min-h-[600px] lg:min-h-[850px]"
                  />
                  {/* Dark overlay that fades on hover */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Decorative thin stroke: Animated to slide out slightly */}
                <motion.div
                  initial={{ x: 0, y: 0 }}
                  whileInView={{ x: 24, y: 24 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute inset-0 border border-black/10 rounded-b-full -z-10"
                />
              </div>
            </motion.div>

            {/* RIGHT SIDE: Content (Staggered Reveal) */}
            <div className="py-20 lg:py-32 px-4 lg:px-20 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 0.8 }}
                className="uppercase text-[12px] font-bold text-[#1a1a1a] mb-8"
              >
                {caffeno[0].heading}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[42px] md:text-[60px] lg:text-[80px] font-serif font-light leading-[1.05] text-[#1a1a1a] uppercase mb-10"
              >
                {caffeno[0].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-gray-600 text-lg leading-relaxed max-w-lg mb-14"
              >
                {caffeno[0].description}
              </motion.p>

              {/* STATS AREA - Staggered Rise */}
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 w-full items-center lg:items-start border-t border-black/10 pt-12 mb-14">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col gap-3"
                >
                  <span className="text-6xl md:text-7xl font-serif font-light text-[#1a1a1a]">
                    {caffeno[0].num1}
                  </span>
                  <p className="text-gray-400 text-[11px] font-bold leading-tight max-w-[130px] uppercase tracking-widest">
                    {caffeno[0].text1}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="hidden md:block w-px h-24 bg-black/10 origin-top"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col gap-3"
                >
                  <span className="text-6xl md:text-7xl font-serif font-light text-[#1a1a1a]">
                    {caffeno[0].num2}
                  </span>
                  <p className="text-gray-400 text-[11px] font-bold leading-tight max-w-[130px] uppercase tracking-widest">
                    {caffeno[0].text2}
                  </p>
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative bg-black text-white py-8 px-14 rounded-full font-bold uppercase tracking-widest text-[11px] overflow-hidden group shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Liquid Hover Effect */}
                <span className="absolute inset-0 w-full h-full bg-[#ff4d00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10">Learn About Us</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section className="relative bg-white overflow-visible border-t border-gray-200">
        {/* FLOATING COFFEE CUP: Parallax effect combined with rotation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.img
              src={about[7].cupImg}
              alt="rotating coffee cup"
              animate={{
                rotate: 360,
                y: [0, -15, 0],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
        </div>

        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* LEFT COLUMN: Large Typography with Parallax Beans */}
            <div className="lg:col-span-5 relative pt-20 lg:pt-32 px-6 lg:pl-16 flex flex-col min-h-[700px] lg:min-h-[900px]">
              <div className="relative z-20">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[0.4em] text-[12px] font-black text-[#1a1a1a] mb-8 block"
                >
                  {about[0].heading}
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-[45px] md:text-[65px] lg:text-[70px] font-serif font-light leading-none text-[#1a1a1a] uppercase max-w-lg"
                >
                  {about[0].title}
                </motion.h2>
              </div>

              {/* BOTTOM LEFT IMAGE: Parallax scroll reveal */}
              <div className="absolute bottom-0 left-0 w-full h-[60%] lg:h-[65%] pointer-events-none z-10 overflow-hidden">
                <motion.img
                  initial={{ y: 100, opacity: 0, scale: 1.2 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1.1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src={about[0].bottomLeftImg}
                  alt="coffee beans"
                  className="w-full h-full object-contain object-bottom-left origin-bottom-left"
                />
              </div>

              {/* FLOATING LEARN MORE BUTTON */}
              <motion.div
                className="absolute top-[60%] right-10 lg:right-20 z-30"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                <Button
                  variant="outline"
                  className="rounded-full px-10 py-7 border-gray-300 bg-white shadow-2xl hover:bg-black hover:text-white transition-all duration-500 text-[11px] font-bold tracking-widest uppercase group"
                >
                  <span className="flex items-center gap-2">
                    Learn About Us
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Feature Grid with Reveal Stagger */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 border-l border-gray-200 pt-16">
              {about.slice(1, 7).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`
              p-12 lg:p-20 flex flex-col items-start gap-8 border-gray-200
              border-b
              ${idx % 2 === 0 ? "md:border-r" : ""} 
              hover:bg-[#fcf8f4]/80 transition-all duration-500 group
            `}
                >
                  {/* ICON: Pop animation on hover */}
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500"
                  >
                    <img
                      src={item.iconImg}
                      alt={item.title}
                      className="w-10 h-10 object-contain brightness-0"
                    />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-[26px] font-serif font-medium text-[#1a1a1a] group-hover:text-[#ff4d00] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-xs">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FIXED MARQUEE SECTION: Variable speed on hover */}
        <div className="w-full overflow-hidden py-16 border-y border-gray-200 bg-white">
          <motion.div
            className="flex flex-nowrap w-fit cursor-default"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 0.98, transition: { duration: 0.5 } }} // Subtle "squeeze" effect
          >
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center flex-nowrap shrink-0 gap-32 px-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              >
                <img
                  src={about[8].shoptextImg1}
                  className="h-12 md:h-16 lg:h-20 object-contain"
                  alt="shop logo"
                />
                <img
                  src={about[8].shoptextImg2}
                  className="h-12 md:h-16 lg:h-20 object-contain"
                  alt="shop logo"
                />
                <img
                  src={about[8].shoptextImg3}
                  className="h-12 md:h-16 lg:h-20 object-contain"
                  alt="shop logo"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SPECIAL MENU SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 flex flex-col items-center">
          {/* SECTION HEADER */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.4em] text-[12px] font-black text-[#1a1a1a] mb-4 block"
            >
              {specialMenu[0].heading}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[60px] font-serif font-light leading-tight text-[#1a1a1a] uppercase max-w-2xl"
            >
              {specialMenu[0].title}
            </motion.h2>
          </div>

          {/* MENU LIST */}
          <div className="w-full max-w-[1300px] flex flex-col">
            {specialMenu.slice(1).map((item, idx) => (
              <motion.div
                key={idx}
                // ANIMATION: Staggered entrance from bottom
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                // ANIMATION: Subtle lift on hover
                whileHover={{ x: 10 }}
                className={`
            group relative flex flex-col md:flex-row items-center justify-between px-8 py-10 md:px-20 min-h-fit md:min-h-[180px] 
            transition-all duration-500 border-b border-gray-600 overflow-hidden
            ${
              idx === 0
                ? "text-white"
                : "text-[#1a1a1a] hover:text-white active:text-white"
            }
          `}
              >
                {/* DARK BACKGROUND OVERLAY */}
                <div
                  className={`
              absolute inset-0 z-0 transition-opacity duration-500 bg-[#1a1a1a]
              ${
                idx === 0
                  ? "opacity-80"
                  : "opacity-0 group-hover:opacity-80 group-active:opacity-80"
              }
            `}
                />

                {/* MENU INFO */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 z-10 text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-5xl font-serif font-light">
                    {item.name}
                  </h3>

                  <motion.div
                    className="hidden md:block w-6 md:w-10 opacity-40"
                    // ANIMATION: Pulse the separator for the active item
                    animate={idx === 0 ? { opacity: [0.4, 1, 0.4] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <img
                      src={item.slashImg}
                      alt="separator"
                      className={`w-full h-auto object-contain transition-all duration-500 ${
                        idx === 0
                          ? "brightness-200"
                          : "brightness-0 group-hover:brightness-200 group-active:brightness-200"
                      }`}
                    />
                  </motion.div>

                  <span className="text-2xl md:text-5xl font-serif font-light">
                    {item.price}
                  </span>
                </div>

                {/* BOOK BUTTON */}
                <motion.div
                  className="z-10 w-full md:w-auto flex justify-center"
                  // ANIMATION: Button pops on hover
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="mozzu"
                    className={`
                rounded-full px-10 py-7 text-[11px] font-bold tracking-widest uppercase transition-all duration-500 bg-transparent
                ${
                  idx === 0
                    ? "border-white/20 text-white hover:bg-white hover:text-white! active:bg-white active:text-black!"
                    : "border-black/10 text-black group-hover:border-white/20 group-hover:text-white group-active:text-black hover:bg-white! active:bg-white!"
                }
              `}
                  >
                    Book Now
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="w-full bg-black py-24 px-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="uppercase tracking-[0.4em] text-[12px] font-black text-white/60 mb-4 block">
              Our Special Menu
            </span>
            <h2 className="text-[40px] md:text-[60px] font-serif font-light text-white uppercase">
              Users Feedback
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* LEFT SIDE: MAIN TESTIMONIAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-3 bg-white/95 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-sm"
            >
              {/* Background Quote Image - Floating Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 pointer-events-none z-0 translate-x-4 translate-y-4"
              >
                <img
                  src={testimonial[0].quoteImg}
                  className="w-48 h-48 md:w-80 md:h-80 opacity-100 object-contain select-none"
                  alt=""
                />
              </motion.div>

              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="testimonial-swiper relative z-10"
              >
                {testimonial.map((item, idx) => (
                  <SwiperSlide key={idx} className="relative h-auto!">
                    <div className="flex flex-col md:flex-row items-center gap-12 pb-14">
                      {/* CIRCULAR CLIENT IMAGE with Entrance Effect */}
                      <div className="relative shrink-0">
                        <motion.div
                          initial={{ scale: 0.8, rotate: -5 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-15 border-[#f9f9f9] shadow-2xl relative z-10"
                        >
                          <img
                            src={item.biglientImg}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        {/* Floating Deco Flower */}
                        <motion.img
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          src={item.rightflowerImg}
                          className="absolute top-4 left-4 w-10 h-10 z-20"
                          alt="deco"
                        />
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="flex-1 text-center md:text-left relative z-10">
                        <div className="flex justify-center md:justify-start gap-1 mb-6">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <motion.span
                              key={s}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: s * 0.1 }}
                              className="text-[#facc15] text-xl"
                            >
                              ★
                            </motion.span>
                          ))}
                        </div>

                        <h3 className="text-2xl md:text-[32px] font-serif font-bold text-[#1a1a1a] mb-4 leading-tight">
                          {item.heading}
                        </h3>

                        <p className="text-gray-500 text-lg leading-relaxed mb-8 italic max-w-xl">
                          "{item.text}"
                        </p>

                        <div className="flex items-center gap-4 justify-center md:justify-start">
                          <img
                            src={item.smalladminImg}
                            className="w-12 h-12 rounded-full object-cover"
                            alt="admin"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-[#1a1a1a] text-lg leading-none">
                              {item.name}
                            </h4>
                            <p className="text-gray-400 text-sm mt-1">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="custom-pagination absolute bottom-10 right-10 md:right-16 flex gap-2 z-20"></div>
            </motion.div>

            {/* RIGHT SIDE: SATISFACTION BOX - Spring Pop Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="flex-1 bg-white rounded-[40px] p-10 flex flex-col items-center justify-center text-center shadow-lg border border-gray-100 group hover:shadow-2xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="mb-6"
              >
                <img
                  src={testimonial[0].likeImg}
                  alt="Satisfaction"
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
              <p className="text-[#1a1a1a] font-bold text-lg mb-2">
                {testimonial[0].testimonytext}
              </p>
              <motion.h2
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                className="text-[#1a1a1a] text-7xl md:text-9xl font-serif font-black"
              >
                {testimonial[0].percent}
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="w-full bg-white relative overflow-hidden flex flex-col items-center">
        {/* SMALL CENTERED DECORATIVE TEXT: Added Parallax Scroll effect */}
        <div className="w-full flex justify-center pointer-events-none select-none py-8 md:py-16">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[40px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-serif font-light leading-none"
            style={{
              WebkitTextStroke: "0.5px #b1b1b1",
              color: "transparent",
              textTransform: "uppercase",
            }}
          >
            COFFEENO
          </motion.h2>
        </div>

        {/* FULL WIDTH VIDEO CONTAINER */}
        <motion.div
          initial={{ clipPath: "inset(10% 0% 10% 0%)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative z-10 w-full -mt-2.5 md:-mt-5"
        >
          <div className="relative w-full group cursor-pointer overflow-hidden">
            {/* Main Thumbnail: Added subtle zoom on hover */}
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.5 }}
              src={CoffeenoThumb}
              alt="Coffee"
              className="w-full h-[350px] md:h-[600px] lg:h-[750px] object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/0 transition-colors duration-500">
              <div className="relative">
                {/* Subtle Pulse: Enhanced with Framer Motion for better performance */}
                <motion.div
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-white"
                />

                {/* Play Icon: Added Magnetic Effect on hover */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 md:w-28 lg:w-36 flex items-center justify-center relative z-10"
                >
                  <img
                    src={Video}
                    alt="Play"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SPECIAL COFFEE SECTION ================= */}
      <section className="w-full bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          {/* MAIN HEADING */}
          <div className="w-full flex justify-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[45px] md:text-[85px] font-serif font-light text-[#1a1a1a] tracking-tight"
            >
              {specialCoffee[0].heading}
            </motion.h2>
          </div>

          {/* TOP LAYOUT: MENU LEFT*/}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
            {/* LEFT SIDE: MENU GRID */}
            <div className="w-full lg:w-[58%] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {specialCoffee.slice(1, 11).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={item.menuImg}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-end justify-between border-b border-dotted border-gray-400 pb-1 mb-1">
                      <h4 className="font-serif font-bold text-[#1a1a1a] tracking-wide text-lg uppercase group-hover:text-[#ff4d00] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-[#1a1a1a] text-lg">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm italic leading-tight">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE: Parallax Image Reveal */}
            <div className="w-full lg:w-[38%] relative mt-16 lg:mt-0 flex justify-end lg:-mr-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-[480px]"
              >
                <img
                  src={specialCoffee[0].bigRightImg}
                  className="w-full h-auto rounded-[20px] shadow-2xl block border border-gray-100"
                  alt="special-main"
                />

                {/* SMALL OVERLAY IMAGE: Sliding entrance */}
                <motion.div
                  initial={{ x: 60, opacity: 0, rotate: 5 }}
                  whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                  className="absolute -bottom-10 -left-10 md:-left-20 w-[180px] md:w-[280px] z-20"
                >
                  <img
                    src={specialCoffee[0].smallRightImg}
                    className="w-full h-auto rounded-[20px] border-10 border-white shadow-2xl"
                    alt="brand-thumb"
                  />
                </motion.div>
              </motion.div>

              {/* VERTICAL WATERMARK: Floating motion */}
              <div className="absolute top-0 -right-6 md:-right-12 h-full flex items-center pointer-events-none">
                <motion.h2
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[100px] md:text-[180px] font-serif font-black text-transparent rotate-90 leading-none"
                  style={{ WebkitTextStroke: "1px #1a1a1a", opacity: "0.08" }}
                >
                  {specialCoffee[0].rightendmenu}
                </motion.h2>
              </div>
            </div>
          </div>

          {/* BOTTOM LAYOUT: Grid reveal */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20">
            {specialCoffee.slice(11).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative group h-[400px] md:h-[500px] overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                  src={item.coffeeImg1 || item.coffeeImg2}
                  className="w-full h-full object-cover"
                  alt={item.name}
                />
                {/* Text Overlay with sliding reveal */}
                <div className="absolute inset-0 bg-black/40 flex items-end p-10 group-hover:bg-black/20 transition-colors duration-500">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-white text-3xl md:text-4xl font-serif leading-tight"
                  >
                    {item.name.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG & NEWS SECTION ================= */}
      <section className="w-full bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          {/* SECTION HEADERS */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="uppercase text-sm text-gray-500 font-medium block mb-4"
            >
              {blogNews[0].heading}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[40px] md:text-[75px] font-serif font-light text-[#1a1a1a] capitalize"
            >
              {blogNews[0].title}
            </motion.h2>
          </div>

          {/* BLOG GRID - 3-6-3 Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT BLOG ITEM: Slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3 lg:pt-24 group"
            >
              <div className="rounded-[25px] overflow-hidden mb-8 cursor-pointer shadow-sm">
                <img
                  src={blogNews[1].leftblogImg}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="blog-1"
                />
              </div>
              <h3 className="text-[28px] font-serif text-[#1a1a1a] mb-6 leading-[1.2] hover:text-gray-500 cursor-pointer transition-colors">
                {blogNews[1].description}
              </h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="mozzu"
                  className="px-7 py-3 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  Coffee Culture
                </Button>
                <motion.div
                  whileHover={{ width: 60 }}
                  className="h-px w-10 bg-gray-300 transition-all"
                />
                <span className="text-gray-400 text-xs font-semibold">
                  {blogNews[1].date}
                </span>
              </div>
            </motion.div>

            {/* CENTER FEATURED BLOG ITEM: Rises from center */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="lg:col-span-6 group"
            >
              <div className="rounded-[30px] overflow-hidden mb-10 cursor-pointer shadow-md">
                <img
                  src={blogNews[2].centerblogImg}
                  className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="featured-blog"
                />
              </div>
              <h3 className="text-[38px] md:text-[56px] font-serif text-[#1a1a1a] mb-8 leading-[1.1] text-center lg:text-left hover:text-gray-500 cursor-pointer transition-colors">
                {blogNews[2].description}
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-5">
                <Button
                  variant="mozzu"
                  className="px-9 py-4 border border-gray-200 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  Behind The Beans
                </Button>
                <motion.div
                  whileInView={{ width: [0, 64] }}
                  className="h-px w-16 bg-gray-300"
                />
                <span className="text-gray-400 text-sm font-semibold">
                  {blogNews[2].date}
                </span>
              </div>
            </motion.div>

            {/* RIGHT BLOG ITEM: Slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3 lg:pt-24 group"
            >
              <div className="rounded-[25px] overflow-hidden mb-8 cursor-pointer shadow-sm">
                <img
                  src={blogNews[3].rightblogImg}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="blog-3"
                />
              </div>
              <h3 className="text-[28px] font-serif text-[#1a1a1a] mb-6 leading-[1.2] hover:text-gray-500 cursor-pointer transition-colors">
                {blogNews[3].description}
              </h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="mozzu"
                  className="px-7 py-3 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
                >
                  Tips & Recipes
                </Button>
                <motion.div
                  whileHover={{ width: 60 }}
                  className="h-px w-10 bg-gray-300 transition-all"
                />
                <span className="text-gray-400 text-xs font-semibold">
                  {blogNews[3].date}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-10 overflow-hidden">
        {/* Left Floating Coffee Illustration */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-10 opacity-40 pointer-events-none z-0"
        >
          <img src={FooterLeftImg} alt="decoration" className="max-w-[300px]" />
        </motion.div>

        {/* Right Floating Coffee Illustration */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-20 opacity-40 pointer-events-none z-0"
        >
          <img
            src={FooterRightImg}
            alt="decoration"
            className="max-w-[350px]"
          />
        </motion.div>

        {/* Small element near the left image */}
        <div className="absolute left-[15%] -top-10 -ml-22 opacity-100 pointer-events-none z-0">
          <img src={FotterEle} alt="element" className="w-full" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Top Centered Logo Divider */}
          <div className="flex items-center justify-center mb-24">
            {/* Dashed Line Left */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="flex-1 h-px border-t border-dashed border-white/20 origin-right"
            ></motion.div>

            {/* Logo Group */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-10 flex flex-col items-center"
            >
              <img src={Logo} alt="Mozzo" className="h-12 w-auto mb-2" />
            </motion.div>

            {/* Dashed Line Right */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="flex-1 h-px border-t border-dashed border-white/20 origin-left"
            ></motion.div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {[
              {
                title: "Help",
                links: ["FAQs", "Delivery", "Contact", "Store Locator"],
              },
              {
                title: "About Us",
                links: ["Our Story", "Delivery", "Contact", "Store Locator"],
              },
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-2xl font-serif mb-10 tracking-widest uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-5 text-gray-400 font-medium">
                  {col.links.map((link) => (
                    <li
                      key={link}
                      className="hover:text-[#bc996d] cursor-pointer transition-colors duration-300"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-2xl font-serif mb-10 tracking-widest uppercase">
                Address
              </h4>
              <div className="space-y-6 text-gray-400 font-medium">
                <p className="leading-relaxed text-lg">
                  1487 Rocky Horse Carre 1487Rocky
                  <br />
                  Arlington, TX 16819 United
                </p>
                <p className="text-white text-2xl font-bold tracking-tight">
                  1800 6565 222
                </p>
                <p className="hover:text-[#bc996d] cursor-pointer transition-colors text-lg">
                  info@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Connect (Newsletter) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-2xl font-serif mb-10 tracking-widest uppercase">
                Connect
              </h4>
              <p className="text-gray-400 mb-8 italic text-lg leading-relaxed">
                Absolutely loved the cozy vibe and Rich aroma! The coffee was
                perfectly brewed
              </p>
              <div className="relative border-b-2 border-white/20 pb-4 group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent w-full focus:outline-none text-white placeholder:text-gray-500 text-lg"
                />
                <button className="absolute right-0 top-0 text-white group-hover:text-[#bc996d] transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
          >
            <p className="text-gray-500 font-medium">
              Copyright © 2025 <span className="text-[#bc996d]">Mozzo</span> all
              Right Reserved
            </p>
            <div className="flex gap-10 text-gray-500 font-medium">
              <span className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Terms & Conditions
              </span>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
};

export default Home5;
