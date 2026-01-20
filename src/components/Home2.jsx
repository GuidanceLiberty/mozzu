/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Menu,
  Search,
  ShoppingCart,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  X,
  Youtube,
  Linkedin,
  ChevronDown,
  Sparkles,
  Star,
  CalendarDays,
  Globe,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/logo/logo-theme.png";
import logoIcon from "@/assets/img/logo/favicon.png";
import {
  pageLinks,
  blockLinks,
  shopLinks,
  menuLinks,
  homeLinks,
  heropage,
  service,
  ourMenu,
  freshVideo,
  chefservice,
  restaurantGallery,
  experts,
  marqueeItems,
  testimonials,
  sponsor,
  blogGallery,
} from "@/data/home2Data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Home2 = () => {
  const [activeTab, setActiveTab] = useState("BREAKFAST");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heropage.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      
      {/* ================= TOP INFO BAR ================= */}
      <div className="fixed top-0 left-0 w-full z-60 bg-[#0c0c0c] border-b border-white/5 text-[13px] text-gray-400 hidden lg:block">
        <div className="w-full px-10 py-3 flex justify-between items-center">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-600" /> 40 Street
              Housing, New York City
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-orange-600" /> info@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-orange-600" /> Hotlin: (+234) 911
              252 4812
            </span>
            <div className="flex items-center gap-4">
              <span>Follow Us:</span>
              <Facebook
                size={16}
                className="hover:text-orange-600 cursor-pointer transition-colors"
              />
              <Twitter
                size={16}
                className="hover:text-orange-600 cursor-pointer transition-colors"
              />
              <Instagram
                size={16}
                className="hover:text-orange-600 cursor-pointer transition-colors"
              />
              <Youtube
                size={16}
                className="hover:text-orange-600 cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR SECTION ================= */}
      <motion.section
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 lg:top-[43px] left-0 z-50 bg-[#111111] shadow-2xl border-b border-white/5"
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
          <nav className="hidden xl:flex items-center gap-10 text-white font-bold text-[14px] uppercase tracking-wider h-full">
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
              <Search className="text-white w-5 h-5 cursor-pointer hover:text-orange-600 transition-colors hidden sm:block" />
              <div className="relative cursor-pointer group">
                <ShoppingCart className="w-6 h-6 text-white group-hover:text-orange-600 transition-colors" />
                <span className="absolute -top-3 -right-3 bg-orange-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  02
                </span>
              </div>
            </div>

            <div className="px-6">
              <Button className="hidden md:flex bg-[#ff4d00] hover:bg-white hover:text-[#ff4d00] text-white font-black uppercase rounded-xl px-8 py-6 text-sm tracking-wide transition-all duration-300 shadow-lg border border-transparent hover:border-[#ff4d00]">
                Book A Table
              </Button>
            </div>

            {/* MOBILE SIDEBAR */}
            <Sheet>
              <SheetTrigger asChild>
                <div className="cursor-pointer bg-[#1a1a1a] h-[90px] w-[90px] flex items-center justify-center transition-all border-l border-white/5 ">
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
                            to="/about-us"
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
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Ken Burns (Zoom) Effect */}
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heropage[currentSlide].heroImg})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white font-bold tracking-[4px] text-sm mb-6 uppercase"
              >
                {heropage[currentSlide].title}
              </motion.span>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-white text-5xl md:text-7xl lg:text-[85px] font-black leading-[1.1] max-w-[1100px] mb-8"
              >
                {heropage[currentSlide].heading.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="relative inline-block mr-4 last:mr-0"
                  >
                    {word}
                    {(word === "Favorite" || word === "Your") && (
                      <span className="absolute bottom-4 left-0 w-full h-1.5 md:h-2 bg-[#ff4d00] -z-10" />
                    )}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-gray-200 text-lg md:text-xl max-w-[800px] mb-12 leading-relaxed font-medium"
              >
                {heropage[currentSlide].text}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <Link to="/menu">
                  <button className="border-2 border-white/40 hover:bg-[#ff4d00] hover:border-[#ff4d00] text-white font-bold py-5 px-12 rounded-md transition-all duration-300 uppercase text-xs tracking-[3px]">
                    See Full Menu
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* SIDE SLIDER INDICATORS */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-5">
          {heropage.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#ff4d00] border-[#ff4d00] scale-125 shadow-[0_0_15px_#ff4d00]"
                  : "bg-transparent border-white/30 hover:border-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= QUALITY SERVICE ================= */}
      <section className="relative py-24 bg-white overflow-visible">
        <div className="max-w-[1320px] mx-auto px-6">
          {service.map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-20 items-center"
            >
              {/* ================= LEFT IMAGE ================= */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="rounded-tl-[160px] rounded-br-[160px] rounded-tr-4xl rounded-bl-4xl overflow-hidden aspect-4/5">
                  <img
                    src={item.leftImg}
                    alt="About"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* ================= RIGHT CONTENT ================= */}
              <div className="relative">
                {/* Floating Dine Image - Gentle Floating Animation */}
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.65, scale: 1 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    opacity: { duration: 1 },
                    scale: { duration: 1 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  src={item.dineImg}
                  alt=""
                  className="absolute -top-24 -right-24 w-[360px] mix-blend-multiply z-10 pointer-events-none"
                />

                {/* TEXT COLUMN - Staggered Slide Up */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative max-w-[420px] z-20"
                >
                  <span className="text-[#ff4d00] uppercase tracking-[3px] text-xs font-bold block mb-4">
                    {item.title}
                  </span>

                  <h2 className="text-[44px] leading-tight font-black text-[#0c0c0c] mb-6">
                    About Our{" "}
                    <span className="relative inline-block">
                      Restaurant
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="absolute left-0 bottom-2 h-1.5 bg-[#ff4d00] -z-10"
                      />
                    </span>
                  </h2>

                  <p className="text-gray-500 leading-relaxed mb-10">
                    {item.text}
                  </p>

                  <h3 className="text-2xl font-black text-[#0c0c0c] mb-3">
                    {item.title2}
                  </h3>

                  <p className="text-gray-500 mb-6">{item.text2}</p>

                  <div className="space-y-1 mb-10">
                    <p className="font-black text-[#0c0c0c]">{item.desc1}</p>
                    <p className="font-black text-[#0c0c0c]">{item.desc2}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#fff1ed] text-[#ff4d00] px-10 py-4 uppercase tracking-widest text-xs font-bold rounded-md hover:bg-[#ff4d00] hover:text-white transition"
                  >
                    Contact With Us
                  </motion.button>
                </motion.div>

                {/* ================= RIGHT OVERLAP IMAGE ================= */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="hidden lg:block absolute -bottom-24 right-[-120px] w-[420px] aspect-4/3 rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden border-14 border-white shadow-xl z-30"
                >
                  <img
                    src={item.rightImg}
                    alt="Food"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR MENU ================= */}
      <section
        className="py-24 relative bg-no-repeat bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${ourMenu[0].menuBgImg})` }}
      >
        {/* Floating Decorative Image - Top Right: Added subtle rotation for 3D feel */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[-5%] hidden 2xl:block pointer-events-none z-10"
        >
          <img
            src={ourMenu[0].foodrightImg}
            alt="decorative food"
            className="w-64 opacity-80 filter drop-shadow-2xl"
          />
        </motion.div>

        {/* Floating Decorative Image - Bottom Left */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 left-[-5%] hidden 2xl:block pointer-events-none z-10"
        >
          <img
            src={ourMenu[0].foodleftImg}
            alt="decorative food"
            className="w-64 opacity-80 filter drop-shadow-2xl"
          />
        </motion.div>

        <div className="container mx-auto px-6 max-w-[1320px] relative z-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff4d00] font-bold uppercase tracking-[3px] text-xs mb-4 block">
              {ourMenu[1].title}
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-[#0c0c0c] mb-6">
              {ourMenu[1].heading}
            </h2>
            <p className="text-gray-500 max-w-[650px] mx-auto leading-relaxed italic">
              {ourMenu[1].text}
            </p>
          </motion.div>

          {/* Tab Buttons - Enhanced with hover & active states */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {["BREAKFAST", "LUNCH", "DINNER"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 rounded-full font-black text-xs tracking-widest transition-all duration-500 border-2 ${
                  activeTab === tab
                    ? "bg-[#ff4d00] border-[#ff4d00] text-white shadow-[0_10px_20px_rgba(255,77,0,0.3)]"
                    : "bg-white border-gray-100 text-[#0c0c0c] hover:border-[#ff4d00] shadow-sm"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Menu Grid - Items staggered fade in */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                  exit: { opacity: 0, transition: { duration: 0.2 } },
                }}
                className="contents"
              >
                {ourMenu
                  .slice(2)
                  .filter(
                    (item) =>
                      (activeTab === "BREAKFAST" && item.btn1) ||
                      (activeTab === "LUNCH" && item.btn2) ||
                      (activeTab === "DINNER" && item.btn3)
                  )
                  .map((item, index) => (
                    <motion.div
                      key={`${activeTab}-${index}`}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-end justify-between mb-2">
                        <Link to="/shop-details">
                          <h3 className="text-[22px] font-black text-[#0c0c0c] group-hover:text-[#ff4d00] transition-colors">
                            {item.textTitle}
                          </h3>
                        </Link>
                        {/* Animated dotted line that expands on hover */}
                        <div className="grow mx-4 mb-2 border-b-2 border-dotted border-gray-300 group-hover:border-[#ff4d00] transition-colors" />
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="text-[#ff4d00] font-black text-2xl"
                        >
                          {item.price}
                        </motion.span>
                      </div>
                      <p className="text-gray-500 italic text-sm font-medium">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= BOOK A TABLE ================= */}
      <section className="relative w-full px-4 md:px-10 z-50">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#ff4d00] max-w-[1600px] mx-auto rounded-[40px] px-8 py-24 md:px-20 md:py-32 shadow-[0_25px_50px_-12px_rgba(255,77,0,0.4)] -mb-48 relative z-50 overflow-hidden"
        >
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col xl:flex-row xl:items-center gap-16 relative z-10">
            {/* Left Side: Icon & Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-8 shrink-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-white"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M9 16l2 2 4-4" strokeWidth="2" />
                </svg>
              </motion.div>
              <div>
                <p className="text-white/90 italic text-2xl font-medium leading-none mb-4">
                  Reserve your table
                </p>
                <h2 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
                  Book a table now!
                </h2>
              </div>
            </motion.div>

            {/* Right Side: Form Fields */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.5 },
                },
              }}
              className="flex flex-wrap gap-6 grow items-center"
            >
              {[
                {
                  label: "01 Person",
                  options: ["01 Person", "02 Person", "03 Person"],
                },
                { label: "06/08/2025", options: ["06/08/2025"] },
                {
                  label: "07:00pm",
                  options: ["07:00pm", "08:00pm", "09:00pm"],
                },
              ].map((dropdown, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="relative group w-fit"
                >
                  <select className="w-fit bg-transparent border border-white/30 rounded-2xl py-6 pl-6 pr-12 text-white appearance-none cursor-pointer focus:outline-none focus:border-white focus:bg-white/10 transition-all font-bold text-lg">
                    {dropdown.options.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        className="bg-[#ff4d00] text-white font-bold"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                  {/* Standard SVG to prevent crash */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </motion.div>
              ))}

              <motion.button
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0c0c0c] font-black py-6 px-10 rounded-2xl uppercase text-sm tracking-widest hover:bg-[#0c0c0c] hover:text-white transition-all duration-300 shadow-xl h-full min-h-[70px]"
              >
                Book A Table
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= FRESH VIDEO SECTION ================= */}
      <section className="relative w-full overflow-hidden">
        {freshVideo.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center"
          >
            {/* Background Image with Parallax Zoom Entrance */}
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.videoImg})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1000px] px-6 text-center flex flex-col items-center pt-20">
              {/* PLAY BUTTON with Ripple/Pulse Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative mb-10"
              >
                {/* Outer Pulsing Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.8],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 border border-white/40 rounded-full"
                  />
                ))}

                {/* Main Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 md:w-32 md:h-32 border border-white/20 rounded-full flex items-center justify-center cursor-pointer bg-white/5 backdrop-blur-sm relative z-10"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-2xl transition-colors hover:bg-[#ff4d00] group">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-black group-hover:text-white transition-colors"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Title with reveal animation */}
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-white text-3xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] drop-shadow-lg"
              >
                {item.title}
              </motion.h2>
            </div>
          </div>
        ))}
      </section>

      {/* ================= CHEF SERVICE SECTION ================= */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Background Image with subtle parallax/float */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-5 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${chefservice[0].BgImg})` }}
        />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {chefservice.slice(1).map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100 },
                  },
                }}
                className="flex flex-col items-center group"
              >
                {/* Icon Box with Floating & Hover Animation */}
                <motion.div
                  whileHover={{
                    rotateY: 180,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 mb-8 border-2 border-[#ff4d00] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff4d00] relative perspective-1000"
                >
                  {/* The Icon inside pulses slightly */}
                  <motion.img
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    src={item.leftImg || item.midImg || item.rightImg}
                    alt={item.title}
                    className="w-12 h-12 object-contain group-hover:invert group-hover:transform-[rotateY(180deg)] transition-all duration-300"
                  />
                </motion.div>

                {/* Title with Interactive Link */}
                <h3 className="text-[#0c0c0c] text-2xl md:text-3xl font-serif font-bold mb-4">
                  <Link
                    to="/services"
                    className="relative inline-block hover:text-[#ff4d00] transition-all duration-300 overflow-hidden group"
                  >
                    {item.title}
                    {/* Animated underline that slides in */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff4d00] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RESTAURANT GALLERY SECTION ================= */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {restaurantGallery.map((item, index) => (
            <div key={index}>
              {/* Header Text - Animates Downward */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <span className="text-[#0c0c0c] uppercase tracking-[0.3em] text-sm font-bold block mb-4">
                  {item.title}
                </span>
                <h2 className="text-[#0c0c0c] text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                  {item.heading.split(" ").map((word, i) => (
                    <span key={i} className="relative inline-block mr-3">
                      {word}
                      {word === "Photo" && (
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                          className="absolute bottom-2 left-0 h-2 bg-[#ff4d00] -z-10"
                        />
                      )}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  {item.text}
                </p>
              </motion.div>

              {/* Gallery Grid Layout - Staggered Child Animation */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-6 gap-8"
              >
                {/* Top Two Large Photos */}
                {[
                  { img: item.Img1, span: "md:col-span-3" },
                  { img: item.Img2, span: "md:col-span-3" },
                ].map((photo, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.8 },
                      },
                    }}
                    className={`${photo.span} overflow-hidden rounded-[2.5rem] group h-[450px] relative shadow-sm hover:shadow-2xl transition-all duration-500`}
                  >
                    <Link to="/gallery" className="block w-full h-full">
                      <img
                        src={photo.img}
                        alt={`Gallery Large ${i}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Subtle dark gradient overlay that appears on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                  </motion.div>
                ))}

                {/* Bottom Three Photos with Hover Content */}
                {[item.Img3, item.Img4, item.Img5].map((photo, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.8 },
                      },
                    }}
                    className="md:col-span-2 overflow-hidden rounded-[2.5rem] group relative h-[350px] shadow-sm hover:shadow-2xl transition-all duration-500"
                  >
                    <Link to="/gallery" className="block w-full h-full">
                      <img
                        src={photo}
                        alt={`Gallery Small ${i}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Hover Overlay Box - Interactive Slide-Up */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/40 transition-all duration-500">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="bg-white/10 backdrop-blur-md w-[85%] py-8 rounded-3xl flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500"
                        >
                          <button className="bg-[#ff4d00] text-white font-black py-4 px-10 rounded-xl uppercase text-xs tracking-widest hover:bg-white hover:text-[#ff4d00] transition-all transform hover:scale-105 active:scale-95">
                            View Photo
                          </button>
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* See All Photos Button - Pulse Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-16"
              >
                <Link
                  to="/gallery"
                  className="group bg-[#fff1eb] text-[#ff4d00] font-bold py-4 px-10 rounded-xl uppercase text-xs tracking-widest relative overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    See All Photos
                  </span>
                  <motion.div
                    whileHover={{ x: 0 }}
                    initial={{ x: "-100%" }}
                    className="absolute inset-0 bg-[#ff4d00] z-0"
                    transition={{ type: "tween" }}
                  />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERTS SECTION ================= */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden attachment-fixed"
        style={{
          backgroundImage: `url(${experts[0].expertBgImg})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay to ensure text stays readable */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 relative z-10">
          {/* SECTION HEADER - Animates In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="text-[#ff4d00] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {experts[0].title}
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
              {experts[0].heading.split("Skilled")[0]}
              <span className="relative">
                Skilled
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-1 bg-[#ff4d00]"
                ></motion.span>
              </span>
              {experts[0].heading.split("Skilled")[1]}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed italic">
              {experts[0].text}
            </p>
          </motion.div>

          {/* EXPERTS GRID - Staggered Appearance */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {experts.slice(1).map((chef, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="relative group overflow-hidden rounded-[30px] h-[450px]"
              >
                {/* Chef Image */}
                <motion.img
                  src={chef.expertImg}
                  alt={chef.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* HOVER CONTENT */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* The White Info Card - Animates Up on Hover */}
                  <motion.div
                    className="relative z-10 w-full bg-white rounded-2xl p-6 text-center shadow-2xl 
                         translate-y-12 group-hover:translate-y-0 transition-all duration-500 ease-out"
                  >
                    {/* Social Icons with staggered delay */}
                    <div className="flex justify-center gap-2 mb-4">
                      {[Facebook, Twitter, Instagram, Linkedin, Phone].map(
                        (Icon, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="w-8 h-8 bg-[#ff4d00] text-white rounded-md flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                          >
                            <Icon size={14} />
                          </motion.div>
                        )
                      )}
                    </div>

                    {/* Chef Info */}
                    <h3 className="text-black font-black text-xl mb-1">
                      {chef.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                      {chef.title}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MARQUEE SECTION ================= */}
      <section className="bg-[#ff4d00] overflow-hidden py-8 border-y border-white/10 relative z-10 cursor-default">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          // INTERACTION: The marquee slows down when the user hovers to make it readable
          whileHover={{ scale: 1.02 }}
          style={{ display: "flex", width: "fit-content" }}
        >
          {/* Duplicate to create the infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mx-8 lg:mx-16"
                  // INTERACTION: Individual items "pop" and glow on hover
                  whileHover={{ scale: 1.1, color: "#000" }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 90, 180, 270, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles
                      size={32}
                      fill="white"
                      className="text-white mr-6 shrink-0"
                    />
                  </motion.div>

                  <span className="text-white font-black text-2xl md:text-4xl uppercase tracking-tighter italic">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-[#FCF8F5] relative overflow-hidden">
        {/* 1. PARALLAX FLOATING QUOTE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-10 left-[10%] lg:left-[15%] z-10 pointer-events-none"
        >
          <motion.img
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={testimonials[0].quoteImg}
            alt="quote"
            className="w-20 md:w-28 lg:w-32 brightness-0 invert-[0.1] object-contain"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* 2. LEFT CONTENT - Fade In Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <span className="text-[#ff4d00] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                {testimonials[0].title}
              </span>
              <h2 className="text-black text-4xl md:text-5xl font-black mb-6 leading-tight">
                Client's Say{" "}
                <span className="relative inline-block">
                  About {/* Animated Underline */}
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-1.5 bg-[#ff4d00]"
                  ></motion.span>
                </span>{" "}
                Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                {testimonials[0].text}
              </p>
            </motion.div>

            {/* 3. RIGHT CONTENT - Fade In Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-8 w-full min-w-0"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                breakpoints={{
                  1024: { slidesPerView: 2, slidesPerGroup: 1 },
                }}
                className="pb-12"
              >
                {[...testimonials.slice(1), ...testimonials.slice(1)].map(
                  (item, index) => (
                    <SwiperSlide key={`testimonial-${index}`}>
                      {/* Card Hover Effect */}
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 md:p-10 rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 h-full mx-2 flex flex-col justify-between min-h-[300px] transition-shadow hover:shadow-2xl duration-500"
                      >
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <img
                              src={item.jennyImg || item.markimg}
                              alt={item.name}
                              className="w-16 h-16 rounded-full object-cover shrink-0"
                            />
                            <div>
                              <h3 className="text-black font-black text-xl leading-none mb-1">
                                {item.name}
                              </h3>
                              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">
                                {item.title}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-500 leading-relaxed text-[17px] mb-8 italic">
                            "{item.text}"
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill="#FFB400"
                              className="text-[#FFB400]"
                            />
                          ))}
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  )
                )}
                <div className="custom-pagination mt-10 flex justify-center gap-2"></div>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SPONSOR SECTION ================= */}
      <section className="py-16 bg-[#FCF8F5] border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Entrance Animation: Sliding the whole track from the right */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={2}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              className="sponsor-swiper overflow-visible!"
            >
              {[...Object.values(sponsor[0]), ...Object.values(sponsor[0])].map(
                (img, index) => (
                  <SwiperSlide
                    key={`sponsor-${index}`}
                    className="flex justify-center items-center"
                  >
                    {/* Interaction: Logo grows and clarifies on hover */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 2 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer py-4"
                    >
                      <img
                        src={img}
                        alt="Brand Sponsor"
                        className="h-7 md:h-8 lg:h-9 w-auto grayscale hover:grayscale-0 transition-all object-contain"
                      />
                    </motion.div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ================= RESTAURANT GALLERY SECTION ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* CENTER HEADER - Animates as a single block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#ff4d00] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {blogGallery[0].title}
            </span>
            <h2 className="text-black text-4xl md:text-5xl font-black mb-6 leading-tight">
              {blogGallery[0].heading.split("Photo")[0]}
              <span className="relative inline-block mx-2">
                Photo
                <span className="absolute bottom-2 left-0 w-full h-1.5 bg-[#ff4d00]"></span>
              </span>
              Gallery
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {blogGallery[0].text}
            </p>
          </motion.div>

          {/* THREE COLUMN GRID - Staggered children animation */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogGallery.slice(1).map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="group cursor-pointer"
              >
                {/* IMAGE BOX with Inner Hover Zoom */}
                <div className="rounded-[30px] overflow-hidden mb-6 relative shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <motion.img
                    src={item.blogImg}
                    alt="Gallery"
                    className="w-full h-[350px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Soft overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* CONTENT BOX */}
                <motion.div
                  className="px-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <CalendarDays size={16} className="text-[#ff4d00]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-black text-2xl font-black leading-tight group-hover:text-[#ff4d00] transition-colors duration-300">
                    {item.decription1 || item.decription2 || item.decription3}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Wrapper for the grid with staggered animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start border-b border-gray-800 pb-16"
          >
            {/* 1. OPENING HOURS COLUMN */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h3 className="text-2xl font-black mb-8 uppercase tracking-wider">
                Opening Hours
              </h3>
              <div className="space-y-4 text-gray-400 font-medium">
                <p>Mon-Fri: 9 AM – 6 PM</p>
                <p>Saturday: 9 AM – 4 PM</p>
                <p>
                  Sunday: <span className="text-[#ff4d00]">Closed</span>
                </p>
              </div>
            </motion.div>

            {/* 2. LOGO & SOCIALS COLUMN */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="flex flex-col items-center"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={logo}
                alt="Mozzu Logo"
                className="h-12 mb-8 object-contain cursor-pointer"
              />

              <p className="text-gray-400 leading-relaxed mb-8 max-w-xs">
                Great Quality Products ipsum dolor amet, conetur adipiscing
                elitdo eiusmod tempor inciea
              </p>

              {/* SOCIAL ICONS with Individual Hover Effects */}
              <div className="flex gap-6">
                {[
                  { Icon: Facebook, link: "#" },
                  { Icon: Twitter, link: "#" },
                  { Icon: Instagram, link: "#" },
                  { Icon: Globe, link: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5, color: "#ff4d00" }}
                    className="text-gray-400 transition-colors"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* 3. WORKING HOURS/ADDRESS COLUMN */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h3 className="text-2xl font-black mb-8 uppercase tracking-wider">
                Working Hours
              </h3>
              <div className="space-y-4 text-gray-400">
                <p className="max-w-[200px] mx-auto leading-relaxed">
                  1487 Rocky Horse Carre 1487Rocky Arlington, TX 16819 United
                </p>
                <p className="text-white font-black text-xl pt-2">
                  1800 6565 222
                </p>
                <motion.p
                  whileHover={{ color: "#ff4d00" }}
                  className="cursor-pointer transition-colors"
                >
                  info@gmail.com
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* COPYRIGHT AREA - Simple Fade In */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="pt-10 text-center text-gray-500 text-sm font-medium"
          >
            <p>
              Copyright © 2025{" "}
              <span className="text-[#ff4d00] font-bold">mozzoa</span>
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
};

export default Home2;
