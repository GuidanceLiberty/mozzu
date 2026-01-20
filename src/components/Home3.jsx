/* eslint-disable no-unused-vars */
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Maximize,
  Menu,
  Phone,
  Quote,
  Search,
  ShoppingCart,
  Star,
  Twitter,
  X,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/logo/logo-black3.png";
import logoIcon from "@/assets/img/logo/favicon.png";
import {
  pageLinks,
  blockLinks,
  shopLinks,
  menuLinks,
  homeLinks,
  hero,
  about,
  services,
  ourMenu,
  photoGallery,
  order,
  testimonial,
  openHour,
  newsFeed,
} from "@/data/home3Data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Booktable img
import BookTableBg from "@/assets/img/home-3/book-table3.jpg";

//Footer Images
import Logo from "@/assets/img/logo/logo-white.png";
import FooterLeftImg from "@/assets/img/home-4/footer4-left.png";
import FooterRightImg from "@/assets/img/home-4/footer4-right.png";
import FotterEle from "@/assets/img/home-3/footer-ele.png";

const Home3 = () => {
  const testimonialSwiperRef = useRef(null);

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
          <div className="px-10 h-full flex items-center border-r border-white/10">
            <Link to="/">
              <img
                src={logo}
                alt="Mozzu Logo"
                className="h-10 object-contain"
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
              <Button className="hidden md:flex bg-black hover:bg-white hover:text-[#ff4d00] text-white font-black uppercase rounded-xl px-8 py-6 text-sm tracking-wide transition-all duration-300 shadow-lg border border-transparent hover:border-[#ff4d00]">
                Book A Table
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
                            to="/shop-details"
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
                            to="/blog-details"
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
                            to="/faqs"
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
                            to="/team-details"
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
                            to="/restaurant-details-01"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant Details 01
                          </Link>
                          <Link
                            to="/restaurant-details-02"
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

                    <Button className="w-full bg-[#ff4d00] hover:bg-black py-8 text-lg font-black uppercase rounded-md flex items-center justify-center gap-3 transition-all mt-8 shadow-md">
                      Get Start <span className="text-2xl">→</span>
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
      <section className="relative bg-white pt-[140px] overflow-hidden min-h-screen flex flex-col justify-between">
        {hero.map((item, index) => (
          <div
            key={index}
            className="max-w-[1600px] mx-auto w-full px-6 lg:px-16 grow flex items-center"
          >
            <div className="flex flex-col lg:flex-row items-end justify-between gap-10 w-full">
              {/* LEFT: HUGE SIDE TEXT - Mask Reveal Animation */}
              <div className="w-full lg:w-[40%] pb-14">
                <h1 className="text-[70px] md:text-[100px] lg:text-[135px] font-serif leading-[0.8] text-gray-800 uppercase tracking-wide">
                  {item.sideText.split(" ").map((word, i) => (
                    <div key={i} className="overflow-hidden">
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="block"
                      >
                        {word}
                      </motion.span>
                    </div>
                  ))}
                </h1>
              </div>

              {/* RIGHT: IMAGE COMPOSITION */}
              <div className="w-full lg:w-[60%]">
                <div className="flex flex-row items-end gap-4 lg:gap-6 relative">
                  {/* CENTER IMAGE + TEXT + BUTTON */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-1/2 flex flex-col justify-end"
                  >
                    <div className="w-full h-[500px] lg:h-[650px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[150px] group">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={item.heroImg1}
                        alt="Coffee Craft"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="mt-8 pr-4 flex flex-col items-start gap-6"
                    >
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-[350px]">
                        {item.downText}
                      </p>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#000",
                          color: "#fff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 border-2 border-black rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300"
                      >
                        Book a Table
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* FAR RIGHT IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="w-1/2 relative"
                  >
                    <div className="w-full h-[600px] lg:h-[800px] overflow-hidden rounded-tl-[80px] lg:rounded-tl-[150px] group">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={item.heroImg2}
                        alt="Coffee Pouring"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* PRICE BADGE - Continuous Floating & Rotating */}
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-[10%] -left-10 md:-left-16 z-20 w-24 h-24 lg:w-40 lg:h-40"
                    >
                      <img
                        src={item.priceImg}
                        alt="25% OFF"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CONTINUOUS LOOPING TICKER BAR */}
        <div className="w-full bg-black py-6 mt-20 overflow-hidden whitespace-nowrap border-y border-white/10">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="text-white text-4xl md:text-6xl font-serif uppercase mx-8 flex items-center whitespace-nowrap"
              >
                Best Coffee Shop <span className="ml-16 text-[#ff4d00]">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-white py-24 px-6 lg:px-20 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-8 z-10 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-left mb-16"
            >
              <span className="text-orange-600 font-bold tracking-[0.3em] text-sm uppercase block mb-6">
                {about[0].heading}
              </span>
              <h2 className="text-[50px] md:text-[85px] font-serif leading-[1.05] text-[#0b1c19] max-w-4xl">
                {about[0].headingDesc}
              </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-start relative">
              {/* SNAPPIER FLOATING SUN IMAGE - Subtle parallax on scroll */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -35, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ rotate: 15 }}
                className="absolute -bottom-16 -left-20 w-[400px] z-0 opacity-100 pointer-events-none"
              >
                <img
                  src={about[4]?.leftbottomImg}
                  className="w-full h-auto object-contain opacity-20 lg:opacity-100"
                  alt=""
                />
              </motion.div>

              {/* VIDEO BOX - Hover Lift Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl h-[380px] flex-[1.5] group border-12 border-white bg-white"
              >
                <img
                  src={about[3].vidImg}
                  alt="About Video"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                  {/* Pulsing Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-xl relative"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                    <div className="w-0 h-0 border-t-10 border-t-transparent border-l-18 border-l-black border-b-10 border-b-transparent ml-1 z-10"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* FEATURES COLUMN - Staggered Entry */}
              <div className="flex flex-col gap-10 pt-6 flex-1 z-10">
                {[about[1], about[2]].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * idx, duration: 0.5 }}
                    className="flex gap-5 items-start group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: "backOut" }}
                      className="bg-[#fdf3e7] p-4 rounded-full min-w-[70px] h-[70px] flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300"
                    >
                      <img
                        src={idx === 0 ? feature.bikeImg : feature.carpetImg}
                        alt=""
                        className="w-8 h-8 object-contain group-hover:invert transition-all"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 leading-tight">
                        {idx === 0 ? feature.foodheading : feature.eventheading}
                      </h4>
                      <p className="text-gray-500 text-[15px] leading-relaxed mt-3">
                        {idx === 0 ? feature.fooddelivery : feature.eventtext}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0b1c19] text-white w-fit px-12 py-5 rounded-md font-bold uppercase text-[12px] tracking-widest hover:bg-orange-600 transition-all shadow-lg mt-4"
                >
                  LEARN ABOUT US
                </motion.button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="lg:col-span-4 relative flex justify-end">
            {/* FLOATING BEANS - Floating Animation */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [-10, -5, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 -right-20 w-[250px] z-0 opacity-100 hidden xl:block"
            >
              <img
                src={about[4]?.toprightImg}
                className="w-full h-auto"
                alt=""
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-[450px] flex flex-col items-center"
            >
              <motion.img
                whileHover={{ y: -10 }}
                src={about[3].thumbImg}
                alt="About Subject"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />

              {/* STATS BADGE - Pop in effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                className="bg-[#8b6240] text-white p-8 rounded-2xl flex items-center justify-between shadow-2xl w-[115%] mt-[-50px] relative z-20"
              >
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-serif">25+</span>
                  <span className="text-[11px] uppercase leading-[1.3] font-bold tracking-wider w-20 block text-orange-200">
                    Experience
                  </span>
                </div>
                <div className="h-14 w-px bg-white/20 mx-4"></div>
                <div className="flex flex-col items-center flex-1">
                  <div className="flex text-orange-400 text-lg gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          delay: i * 0.1,
                          repeat: Infinity,
                          duration: 2,
                        }}
                        className="text-xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-[15px] font-bold mt-2">Trust Scorer</p>
                  <p className="text-[11px] text-white/70 font-medium">
                    4.85 (12k Review)
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE SECTION ================= */}
      <section className="bg-[#fdf3e7] py-24 px-6 lg:px-20 relative overflow-hidden">
        {/* FLOATING BACKGROUND SHAPE - Parallax movement */}
        <motion.img
          src={services[2].leftBottomImg}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-64 opacity-40 pointer-events-none z-0"
          alt=""
        />

        <motion.img
          src={services[2].rightBottomImg}
          animate={{
            y: [0, -50, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-72 opacity-90 pointer-events-none z-0"
          alt=""
        />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-600 font-bold tracking-[0.2em] text-sm uppercase block mb-4">
                {services[0].heading1}
              </span>
              <h2 className="text-[45px] md:text-[65px] font-serif leading-[1.1] text-[#0b1c19] mb-8">
                {services[0].heading2}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
                {services[0].text}
              </p>
            </motion.div>

            {/* FEATURES GRID - Staggered reveal of checks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6">
              {[
                services[1].desc1,
                services[1].desc2,
                services[1].desc3,
                services[1].desc4,
                services[1].desc5,
                services[1].desc6,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className="flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  <motion.div
                    whileHover={{ y: -5, rotate: [0, -10, 10, 0] }}
                    className="mb-4"
                  >
                    <img
                      src={services[1].checkImg}
                      alt="check"
                      className="w-14 h-14 object-contain filter group-hover:drop-shadow-lg transition-all"
                    />
                  </motion.div>
                  <h4 className="text-[#0b1c19] font-bold text-[18px] leading-tight max-w-[140px] group-hover:text-orange-600 transition-colors">
                    {item}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE COMPOSITION */}
          <div className="relative z-10">
            {/* MAIN LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="rounded-[60px] rounded-tl-none overflow-hidden shadow-2xl relative z-10 border-15 border-white/40 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={services[2].thumbBigImg}
                alt="Coffee pouring"
                className="w-full h-[650px] object-cover"
              />
            </motion.div>

            {/* ROTATING TEXT CIRCLE - Smooth Infinite Rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-12 z-20 w-48 h-48 pointer-events-none"
            >
              <img
                src={services[2].circleImg}
                alt="Food Safety"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* FLOATING SMALL OVERLAP IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                scale: { delay: 0.5, duration: 0.5 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-12 -left-12 z-30 w-52 h-52 rounded-full border-12 border-[#fdf3e7] overflow-hidden shadow-2xl"
            >
              <img
                src={services[2].thumbSmallImg}
                alt="Small thumb"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MENU SECTION ================= */}
      <section className="bg-[#0b1c19] py-24 px-6 lg:px-20 relative overflow-hidden">
        {/* BACKGROUND DECORATIVE ELEMENT - Slow Pulse */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-white rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-white rounded-full opacity-50"></div>
          </div>
        </motion.div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-orange-400 font-bold tracking-[0.3em] text-sm uppercase block mb-4">
              {ourMenu[0].heading}
            </span>
            <h2 className="text-[45px] md:text-[75px] font-serif leading-tight text-white mb-6">
              {ourMenu[0].desc}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {ourMenu[0].text}
            </p>
          </motion.div>

          {/* MENU GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {ourMenu.slice(1).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                {/* MENU IMAGE - Inner Glow on Hover */}
                <div className="relative min-w-[75px] h-[75px] rounded-full overflow-hidden border-2 border-white/10 group-hover:border-orange-400 transition-all duration-500">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={item.menuImg}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* MENU CONTENT */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-white font-bold text-lg md:text-xl tracking-wide group-hover:text-orange-400 transition-colors duration-300 uppercase">
                      {item.name}
                    </h4>

                    {/* ANIMATED DOTTED LINE CONNECTOR */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: "auto", opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="flex-1 border-b border-dotted border-white/30 h-px mb-1.5"
                    />

                    <motion.span
                      whileHover={{ scale: 1.1, color: "#fff" }}
                      className="text-orange-400 font-bold text-lg md:text-xl"
                    >
                      {item.price}
                    </motion.span>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 font-medium italic group-hover:text-gray-300 transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="bg-white py-24 px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gray-500 font-bold tracking-[0.3em] text-sm uppercase block mb-4">
              {photoGallery[0].heading}
            </span>
            <h2 className="text-[45px] md:text-[65px] font-serif leading-tight text-[#0b1c19] mb-6 uppercase">
              {photoGallery[0].title}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {photoGallery[0].text}
            </p>
          </motion.div>

          {/* PHOTO GRID */}
          <div className="flex flex-col gap-6">
            {/* TOP ROW - 2 BIG IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[photoGallery[1].img1, photoGallery[1].img2].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 0.99 }}
                  className="relative group overflow-hidden rounded-[40px] h-[400px] md:h-[500px] cursor-pointer bg-gray-100"
                >
                  <motion.img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {/* OVERLAY */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#8b6b52]/40 backdrop-blur-[2px]">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2 }}
                      className="bg-white/20 p-4 rounded-full backdrop-blur-md"
                    >
                      <Maximize className="text-white w-10 h-10 drop-shadow-md" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                photoGallery[1].img3,
                photoGallery[1].img4,
                photoGallery[1].img5,
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className="relative group overflow-hidden rounded-[30px] h-[350px] cursor-pointer bg-gray-100"
                >
                  <motion.img
                    src={img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    alt=""
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#8b6b52]/40 backdrop-blur-[2px]">
                    <Maximize className="text-white w-8 h-8" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SEE ALL PHOTOS BUTTON */}
          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8b6b52] hover:bg-[#725742] text-white px-12 py-5 rounded-xl font-bold text-sm tracking-widest uppercase transition-colors shadow-lg"
            >
              SEE ALL PHOTOS
            </motion.button>
          </div>
        </div>
      </section>

      {/* ================= ORDER SECTION ================= */}
      <section className="bg-[#fdf9f4] py-24 px-6 lg:px-20 relative overflow-hidden">
        {/* FLOATING DECORATIVE IMAGES - Deep Parallax */}
        <motion.img
          src={order[0].orderImg1}
          alt=""
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-10 w-48 md:w-64 pointer-events-none z-0 opacity-80"
        />

        <motion.img
          src={order[0].orderImg2}
          alt=""
          animate={{
            y: [0, 25, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -right-10 w-72 md:w-96 pointer-events-none z-0 opacity-80"
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-[45px] md:text-[65px] font-serif text-[#0b1c19] leading-tight mb-4">
              {order[0].heading}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {order[0].text}
            </p>
          </motion.div>

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {order.slice(1).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                }}
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-[0_20px_50px_rgba(188,153,109,0.15)] transition-all duration-500 relative group text-left"
              >
                {/* FLEX CONTAINER FOR ICON AND STEP */}
                <div className="flex items-center justify-between mb-8">
                  {/* ICON CONTAINER - Magnetic Rotate Effect */}
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-[#bc996d] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(188,153,109,0.3)] group-hover:bg-gray-800 transition-colors duration-500"
                  >
                    <img
                      src={item.hCircleImg || item.hCoffeeImg || item.hHotImg}
                      alt={item.title}
                      className="w-10 h-10 object-contain brightness-0 invert"
                    />
                  </motion.div>

                  {/* STEP BADGE */}
                  <motion.span
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    className="bg-[#fef5ee] text-[#bc996d] px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-[#bc996d]/10"
                  >
                    {item.step}
                  </motion.span>
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl md:text-3xl font-serif text-[#0b1c19] mb-4 group-hover:text-[#bc996d] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-700 transition-colors">
                  {item.text}
                </p>

                {/* DECORATIVE STEP NUMBER (Optional - Watermark style) */}
                <div className="absolute bottom-6 right-10 text-8xl font-serif text-[#bc996d]/5 pointer-events-none group-hover:text-[#bc996d]/10 transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="bg-white py-24 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* HEADER WITH MANUAL NAVIGATION */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-[#bc996d] font-bold tracking-[0.3em] text-sm uppercase block mb-4">
                {testimonial[0].heading}
              </span>
              <h2 className="text-[45px] md:text-[65px] font-serif leading-tight text-[#0b1c19] uppercase">
                {testimonial[0].title}
              </h2>
              <p className="text-gray-500 text-lg mt-6 leading-relaxed">
                {testimonial[0].text}
              </p>
            </div>

            {/* NAVIGATION BUTTONS*/}
            <div className="flex gap-4">
              <button
                onClick={() => testimonialSwiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#bc996d] hover:text-white hover:border-[#bc996d] transition-all group z-30 relative"
              >
                <ChevronLeft
                  size={24}
                  className="text-gray-400 group-hover:text-white"
                />
              </button>
              <button
                onClick={() => testimonialSwiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#bc996d] hover:text-white hover:border-[#bc996d] transition-all group z-30 relative"
              >
                <ChevronRight
                  size={24}
                  className="text-gray-400 group-hover:text-white"
                />
              </button>
            </div>
          </div>

          {/* SWIPER SLIDER */}
          <Swiper
            onBeforeInit={(swiper) => {
              testimonialSwiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={600}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            className="testimonial-swiper overflow-visible!"
          >
            {/* Duplicating data so loop doesn't get stuck with only 2 items */}
            {[
              ...testimonial.slice(1),
              ...testimonial.slice(1),
              ...testimonial.slice(1),
            ].map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-[#bc996d] p-10 md:p-12 rounded-[40px] h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div>
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="#ffb800"
                          className="text-[#ffb800]"
                        />
                      ))}
                    </div>
                    <p className="text-white text-lg md:text-xl leading-relaxed italic mb-10">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-5 pt-6 border-t border-white/20">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={item.Img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">
                        {item.name}
                      </h4>
                      <p className="text-white/80 text-sm">{item.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= OPEN HOUR SECTION ================= */}
      <section className="relative bg-[#2a140e] min-h-[850px] flex items-center justify-center mb-32 overflow-hidden">
        {/* BACKGROUND SHAPES - Smoother Floating via Framer */}
        <motion.img
          src={openHour[0].topLeftImg}
          alt=""
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-10 w-64 md:w-96 opacity-40 brightness-125 pointer-events-none z-0"
        />
        <motion.img
          src={openHour[0].bottomRightImg}
          alt=""
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-64 md:w-96 opacity-40 brightness-125 pointer-events-none z-0"
        />

        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-0">
            {/* LEFT LARGE IMAGE - Slide from Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:block w-[30%] h-[650px] overflow-hidden rounded-[30px] shadow-2xl border border-white/10"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={openHour[2].timeImg1}
                alt="Coffee Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* CENTER CONTENT - Staggered Reveal */}
            <div className="flex-1 text-center px-6 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex justify-center mb-10">
                  <motion.img
                    initial={{ height: 0 }}
                    whileInView={{ height: 112 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    src={openHour[1].lineTopImg}
                    alt=""
                    className="h-28 object-contain"
                  />
                </div>

                <span className="text-[#bc996d] font-bold tracking-[0.4em] text-sm uppercase block mb-6">
                  {openHour[1].heading}
                </span>

                <h2 className="text-[50px] md:text-[70px] font-serif text-white leading-[1.1] mb-10 uppercase">
                  {openHour[1].title}
                </h2>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 128 }}
                  viewport={{ once: true }}
                  className="h-px bg-[#bc996d] mx-auto mb-10"
                />

                <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed italic max-w-lg mx-auto">
                  "{openHour[1].text}"
                </p>

                <div className="space-y-5">
                  {[
                    openHour[2].time1,
                    openHour[2].time2,
                    openHour[2].time3,
                    openHour[2].time4,
                  ].map((time, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-white text-xl md:text-2xl font-bold hover:text-[#bc996d] transition-colors cursor-default"
                    >
                      {time}
                    </motion.p>
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <motion.img
                    initial={{ height: 0 }}
                    whileInView={{ height: 112 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    src={openHour[1].lineBottomImg}
                    alt=""
                    className="h-28 object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* RIGHT LARGE IMAGE - Slide from Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:block w-[30%] h-[650px] overflow-hidden rounded-[30px] shadow-2xl border border-white/10"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={openHour[2].timeImg2}
                alt="Coffee Pour"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= BOOK TABLE SECTION ================= */}
      <section
        className="relative min-h-[800px] flex items-center justify-end px-4 lg:px-24 py-16 bg-cover bg-center bg-no-repeat overflow-hidden mt-32"
        style={{ backgroundImage: `url(${BookTableBg})` }}
      >
        <div className="max-w-[1400px] w-full relative z-10 flex flex-col items-center lg:items-end">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-[45px] md:text-[80px] lg:text-[100px] font-serif italic mb-6 lg:mr-20 z-20 tracking-tight drop-shadow-2xl"
          >
            Book A Table
          </motion.h2>

          <div className="relative w-full max-w-[600px] min-h-[600px] md:min-h-[700px] flex items-center justify-center">
            {/* BACKGROUND SVG */}
            <div className="absolute inset-0 z-0">
              <svg
                viewBox="0 0 700 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="none"
              >
                <path
                  d="M30,80 L450,80 L450,20 L680,20 L680,450 C680,820 20,820 20,450 Z"
                  fill="rgba(20, 12, 8, 0.95)"
                  className="backdrop-blur-3xl"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M30,80 L450,80 L450,20 L680,20 L680,450 C680,810 30,810 20,450 Z"
                  stroke="#bc996d"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* FORM CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative z-10 w-full px-10 md:px-16 pt-24 pb-20"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white text-xl md:text-3xl font-serif">
                  Book a table
                </h3>
                <span className="text-[#bc996d] font-serif italic text-sm md:text-lg opacity-70">
                  Reservation
                </span>
              </div>

              <form
                className="space-y-6 md:space-y-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="w-full border-b border-white/20">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent pb-2 text-white text-base md:text-lg placeholder:text-gray-500 focus:outline-none focus:border-[#bc996d]"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-end">
                  <div className="flex-1 w-full border-b border-white/20">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent pb-2 text-white text-base md:text-lg focus:outline-none"
                    />
                  </div>

                  <div className="relative w-fit border-b border-white/20 mr-10">
                    <select className="w-fit md:w-[140px] bg-transparent pb-2 pr-4 text-gray-400 text-base md:text-lg focus:outline-none appearance-none cursor-pointer ">
                      <option className="bg-[#140c08]">1 Person</option>
                      <option className="bg-[#140c08]">2 Persons</option>
                    </select>
                    <span className="absolute right-0 top-1 text-[#bc996d] pointer-events-none text-xs">
                      ▼
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-end">
                  <div className="flex-1 w-full border-b border-white/20">
                    <input
                      type="text"
                      placeholder="Date"
                      onFocus={(e) => (e.target.type = "date")}
                      className="w-full bg-transparent pb-2 text-gray-500 text-base md:text-lg focus:outline-none"
                    />
                  </div>

                  <div className="relative w-fit border-b border-white/20 mr-10">
                    <select className="w-fit md:w-[140px] bg-transparent pb-2 pr-4 text-gray-400 text-base md:text-lg focus:outline-none appearance-none cursor-pointer">
                      <option className="bg-[#140c08]">06:00 pm</option>
                      <option className="bg-[#140c08]">07:00 pm</option>
                    </select>
                    <span className="absolute right-0 top-1 text-[#bc996d] pointer-events-none text-xs">
                      ▼
                    </span>
                  </div>
                </div>

                <textarea
                  placeholder="Special Requests"
                  rows="1"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-base md:text-lg focus:outline-none resize-none"
                ></textarea>

                <div className="flex justify-center pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 md:px-12 py-3 border border-[#bc996d] text-white uppercase tracking-widest text-[11px] md:text-[13px] font-bold hover:bg-[#bc996d] hover:text-black transition-all"
                  >
                    BOOK A TABLE
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= NEWS FEED SECTION ================= */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {/* HEADER */}
          {newsFeed.slice(0, 1).map((head, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            >
              <div className="text-left">
                <span className="text-[#bc996d] font-serif italic text-lg md:text-xl tracking-wide uppercase">
                  {head.heading}
                </span>
                <h2 className="text-[#1a1a1a] text-4xl md:text-6xl font-serif mt-2 leading-tight">
                  Our Latest News <span className="italic font-light">&</span>
                  <br /> Blog Posts
                </h2>
              </div>

              {/* SEE ALL BLOG BUTTON */}
              <div className="pb-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-gray-300 text-gray-800 text-[13px] font-bold uppercase tracking-widest hover:bg-[#bc996d] hover:border-[#bc996d] hover:text-white transition-all duration-300 rounded-sm"
                >
                  See All Blog
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsFeed.slice(1).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="overflow-hidden mb-6 aspect-[3/3.2] bg-gray-100 rounded-sm">
                  <img
                    src={post.blogImg1 || post.blogImg2}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Author line */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-[1.5px] bg-[#bc996d]"
                  ></motion.div>
                  <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-900">
                    {post.name}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#1a1a1a] text-2xl md:text-[28px] font-serif leading-[1.2] mb-6 group-hover:text-[#bc996d] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Footer Meta */}
                <div className="flex items-center justify-between py-4 border-t border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#bc996d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="font-medium">{post.date}</span>
                  </div>
                  <span className="text-gray-400 text-[14px] italic">
                    {post.time}
                  </span>
                </div>
              </motion.div>
            ))}
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

export default Home3;
