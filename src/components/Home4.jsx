/* eslint-disable no-unused-vars */
import {
  MapPin,
  Phone,
  Box,
  MessageSquare,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Menu,
  ChevronDown,
  Search,
  X,
  Mail,
  ShoppingCart,
  User,
  Globe,
  LocateFixed,
  ArrowLeft,
  ArrowRight,
  Star,
  Clock,
  Calendar,
  Instagram,
} from "lucide-react";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/logo/log-black.png";
import logoIcon from "@/assets/img/logo/favicon.png";
import { Link } from "react-router-dom";
import {
  blockLinks,
  homeLinks,
  menuLinks,
  pageLinks,
  shopLinks,
} from "@/data/home3Data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  categories,
  downloadapp,
  herosection,
  popularitems,
  visitedRestaurant,
} from "@/data/home4Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { blockpost, ordersteps, testimonial } from "@/data/indexData";

const Home4 = () => {
  const swiperRef = useRef(null);
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= TOP INFO BAR ================= */}
      <div className="fixed top-0 left-0 w-full z-60 bg-white border-b border-gray-200 text-[16px] text-[#555555] hidden lg:block">
        <div className="w-full px-10 py-3 flex justify-between items-center">
          {/* Left Side: Address and Tracking */}
          <div className="flex items-center gap-8">
            {/* Address */}
            <div className="relative cursor-pointer hover:text-black transition-colors group py-1">
              <span className="flex items-center gap-2.5">
                <MapPin size={18} className="text-gray-500" strokeWidth={1.5} />
                40 Street Housing, New York City
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>

            <div className="h-5 w-px bg-gray-300"></div>

            {/* Tracking */}
            <div className="relative cursor-pointer hover:text-black transition-colors group py-1">
              <span className="flex items-center gap-2.5">
                <Box size={18} className="text-gray-500" strokeWidth={1.5} />
                Trac your Parcel
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>
          </div>

          {/* Right Side: Hotline and Faq's */}
          <div className="flex items-center gap-8">
            {/* Hotline */}
            <div className="relative cursor-pointer hover:text-black transition-colors group py-1">
              <span className="flex items-center gap-2.5">
                <Phone size={18} className="text-gray-500" strokeWidth={1.5} />
                Hotlin: (+123) 555 666
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>

            <div className="h-5 w-px bg-gray-300"></div>

            {/* Faq's */}
            <div className="relative cursor-pointer hover:text-black transition-colors group py-1">
              <span className="flex items-center gap-2.5">
                <MessageSquare
                  size={18}
                  className="text-gray-500"
                  strokeWidth={1.5}
                />
                Faq's
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR SECTION ================= */}
      <motion.section
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 lg:top-[43px] left-0 z-50 bg-white shadow-2xl border-b border-white/5"
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
          <nav className="hidden xl:flex items-center gap-10 text-gray-900 font-bold text-[14px] uppercase tracking-wider h-full">
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
            {/* 1. LOGIN BUTTON - DESKTOP */}
            <div className="px-2">
              <Button
                variant="outline"
                className="hidden lg:flex items-center gap-2 bg-transparent border-[#e52e2e] text-[#e52e2e] hover:bg-[#e52e2e] hover:text-white font-bold rounded-full px-8 py-6 text-base transition-all duration-300 border"
              >
                <User size={20} className="stroke-[2px]" />
                <span>Log In</span>
              </Button>
            </div>

            {/* 2. CART */}
            <div className="px-4">
              <div className="relative cursor-pointer group w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center hover:border-[#ff4d00] transition-colors">
                <ShoppingCart className="w-5 h-5 text-black group-hover:text-[#ff4d00] transition-colors" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  02
                </span>
              </div>
            </div>

            {/* 3. LANGUAGE SELECTOR WITH DROPDOWN */}
            <div className="px-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="flex items-center gap-1 cursor-pointer group">
                    <Globe
                      size={20}
                      className="text-black group-hover:text-[#ff4d00] transition-colors"
                    />
                    <span className="font-bold text-black text-lg group-hover:text-[#ff4d00]">
                      Eng
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-black group-hover:text-[#ff4d00] mt-1"
                    />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="bg-white border-gray-100 min-w-20 shadow-xl rounded-lg"
                >
                  <DropdownMenuItem className="font-bold cursor-pointer hover:text-[#ff4d00] focus:text-[#ff4d00]">
                    Eng
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-bold cursor-pointer hover:text-[#ff4d00] focus:text-[#ff4d00]">
                    Spn
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-bold cursor-pointer hover:text-[#ff4d00] focus:text-[#ff4d00]">
                    Us
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* MOBILE SIDEBAR */}
            <Sheet>
              <SheetTrigger asChild>
                <div className="cursor-pointer bg-[#1a1a1a] h-[90px] w-[90px] flex items-center justify-center transition-all border-l border-white/5 lg:hidden">
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
                            to="/about-us"
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
                            to="/restaurant-detail-01"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant Details 01
                          </Link>
                          <Link
                            to="/restaurant-detail-02"
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

                    <div className="lg:hidden mb-8">
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 border-[#ff4d00] text-[#ff4d00] hover:bg-[#ff4d00] hover:text-white font-black uppercase rounded-xl py-7 text-sm transition-all border-2"
                      >
                        <User size={20} className="stroke-[3px]" />
                        Log In
                      </Button>
                    </div>

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
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-[#f7f8fa] overflow-hidden pt-[120px] md:pt-[170px] pb-[60px] md:pb-[90px] px-4">
        {/* Eggs - Floating with subtle rotation */}
        <motion.img
          src={herosection[0].eggsImg}
          alt="eggs"
          animate={{
            x: [0, 30, 0],
            rotate: [-6, 0, -6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-30 left-[8%] w-24 md:w-48 lg:w-[340px] object-contain z-10 opacity-70 hidden sm:block pointer-events-none"
        />

        {/* Salad Bowl - Interactive Rotation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          className="absolute top-[60%] sm:top-[35%] right-[-5%] sm:right-[5%] z-10"
        >
          <div className="relative group">
            <motion.img
              src={herosection[0].centertBugerImg}
              alt="salad"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.05 }}
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain drop-shadow-2xl cursor-grab active:cursor-grabbing"
            />

            {/* Discount badge with Pulse effect */}
            <motion.img
              src={herosection[0].priceImg}
              alt="discount"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-[14%] left-[5%] lg:w-50 md:w-28 z-20"
            />
          </div>
        </motion.div>

        {/* Cheese Burger - Sliding in from Left */}
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src={herosection[0].leftBurger}
          alt="cheese burger"
          className="absolute -bottom-10 -left-10 w-[250px] md:w-[380px] lg:w-[450px] object-contain z-10 hidden md:block"
        />

        {/* Tomato - Drifting Animation */}
        <motion.img
          src={herosection[0].tometoImg}
          alt="tomato"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[10%] w-[200px] lg:w-[260px] object-contain z-10 hidden lg:block opacity-80"
        />

        {/* ================= CONTENT ================= */}
        <div className="relative z-40 w-full max-w-[1320px] mx-auto text-center flex flex-col items-center">
          {/* Staggered Text Entrance */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-semibold mb-4 text-xs sm:text-sm tracking-[2px] uppercase"
          >
            Explore top-rated attractions, activities and more
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[30px] font-black text-[#1a1a1a] leading-[1.1] mb-10 max-w-[900px]"
          >
            Hot Meals, Quick Bites &{" "}
            <span className="text-[#ff0000]">Fresh</span> Groceries
          </motion.h1>

          {/* SEARCH BAR - With Interactive Focus Scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -5 }}
            className="relative w-full max-w-[850px] bg-white rounded-2xl sm:rounded-full flex flex-col md:flex-row items-stretch p-2 shadow-[0_25px_60px_rgba(0,0,0,0.1)] border border-gray-100 mb-8 z-50 group transition-all focus-within:ring-4 focus-within:ring-red-50"
          >
            <div className="flex flex-1 items-center w-full px-6">
              <div className="text-red-500 mr-3">
                <LocateFixed size={20} />
              </div>
              <input
                type="text"
                placeholder="Enter delivery address"
                className="w-full bg-transparent outline-none text-[#1a1a1a] font-medium text-base py-4 placeholder:text-gray-400"
              />
              <div className="hidden sm:flex items-center gap-2 px-4 border-l border-gray-100 ml-3 cursor-pointer group/btn">
                <span className="text-sm font-bold text-gray-400 group-hover/btn:text-red-500 transition-colors">
                  Locate Me
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-[#ff0000] hover:bg-black text-white px-10 py-4 rounded-xl sm:rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Search size={20} strokeWidth={3} />
              <span>Find Food</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-full text-left sm:text-center mt-20"
          >
            <div className="inline-block bg-white/60 sm:bg-transparent p-3 rounded-xl backdrop-blur-md sm:backdrop-blur-none border border-white/20 sm:border-none shadow-sm sm:shadow-none">
              <p className="text-[18px] md:text-[22px] font-black text-[#1a1a1a] leading-tight">
                <span className="text-gray-600 font-bold">
                  Already a member?
                </span>
                <Link
                  to="/signup"
                  className="text-[#ff0000] underline underline-offset-8 decoration-2 hover:text-black ml-2 transition-all duration-300 inline-block hover:scale-105"
                >
                  Sign Up Now!
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4">
          {/* Section Title - Animated */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] font-extrabold text-center text-[#1a1a1a] mb-12"
          >
            Popular Categories
          </motion.h2>

          <div className="relative max-w-[1250px] mx-auto mb-20">
            {/* Navigation Buttons - Interactive scale */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#ffcc00] flex items-center justify-center shadow-md hover:bg-[#ffcc00] transition-all group"
            >
              <ArrowLeft size={20} className="text-black" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#ffcc00] flex items-center justify-center shadow-md hover:bg-[#ffcc00] transition-all group"
            >
              <ArrowRight size={20} className="text-black" />
            </motion.button>

            {/* Main Container - Subtle Fade In */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#f7f8fa] rounded-[60px] py-14 px-8 md:px-12"
            >
              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                speed={800}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={10}
                slidesPerView={2}
                slidesPerGroup={1}
                breakpoints={{
                  640: { slidesPerView: 3, slidesPerGroup: 1 },
                  768: { slidesPerView: 4, slidesPerGroup: 1 },
                  1024: { slidesPerView: 6, slidesPerGroup: 1 },
                  1280: { slidesPerView: 7, slidesPerGroup: 1 },
                }}
                className="w-full overflow-visible"
              >
                {[...categories.slice(0, 7), ...categories.slice(0, 7)].map(
                  (item, index) => {
                    const imageSrc =
                      item.categoryImg1 ||
                      item.categoryImg2 ||
                      item.categoryImg3 ||
                      item.categoryImg4 ||
                      item.categoryImg5 ||
                      item.categoryImg6 ||
                      item.categoryImg7;

                    return (
                      <SwiperSlide key={index}>
                        <Link
                          to={`/category/${item.name?.toLowerCase()}`}
                          className="flex flex-col items-center group cursor-pointer py-2"
                        >
                          {/* Circle - Interactive lift and shadow */}
                          <motion.div
                            whileHover={{ y: -8 }}
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 group-hover:shadow-xl transition-all duration-300"
                          >
                            <img
                              src={imageSrc}
                              alt={item.name}
                              className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </motion.div>
                          <h3 className="font-bold text-[#1a1a1a] text-sm md:text-base mb-1 group-hover:text-[#ff0000] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-xs md:text-sm">
                            ( {item.number?.replace(/[()]/g, "")} )
                          </p>
                        </Link>
                      </SwiperSlide>
                    );
                  },
                )}
              </Swiper>
            </motion.div>
          </div>

          {/* ================= OFFERS GRID SECTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1250px] mx-auto">
            {/* Combo Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative rounded-[40px] overflow-hidden group cursor-pointer aspect-3/4"
            >
              <img
                src={categories[7].offerImg1}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Combo Offer"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[30%] left-6 z-10"
              >
                <img
                  src={categories[7].comboImg}
                  className="w-32 md:w-40 drop-shadow-xl"
                  alt="Price"
                />
              </motion.div>
            </motion.div>

            {/* Pasta Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative rounded-[40px] overflow-hidden group cursor-pointer aspect-3/4"
            >
              <img
                src={categories[8].offerImg2}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Pasta Offer"
              />
              <div className="absolute top-[40%] left-10 z-10">
                <img
                  src={categories[8].pastaImg}
                  className="w-32 md:w-40 drop-shadow-xl"
                  alt="Price"
                />
              </div>
            </motion.div>

            {/* Pizza Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="relative rounded-[40px] overflow-hidden group cursor-pointer aspect-3/4"
            >
              <img
                src={categories[9].offerImg3}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Pizza Offer"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-[15%] left-6 z-10"
              >
                <img
                  src={categories[9].pizzaImg}
                  className="w-32 md:w-40 drop-shadow-xl"
                  alt="Price"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MOST VISITED RESTAURANT SECTION ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4">
          {/* Section Header - Slide in from Left */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1a1a1a]">
                Most Visited Restaurants
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "64px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1 bg-[#ff0000] rounded-full"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden flex items-center gap-2 font-bold text-[#1a1a1a] border-2 border-gray-100 px-7 py-3 rounded-xl transition-colors duration-500 hover:text-white active:text-white shadow-sm"
            >
              <span className="relative z-10">See All Restaurant</span>
              <ArrowRight
                size={20}
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1a1a1a] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </motion.button>
          </div>

          {/* Restaurant Grid - Staggered entrance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {visitedRestaurant.map((res, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="flex flex-col group bg-white border border-gray-400 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative w-full aspect-[1.4/1] overflow-hidden">
                  <img
                    src={res.visitImg}
                    alt={res.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Discount Badge - Gently Pulsing */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-[#ff0000] text-white text-[10px] uppercase tracking-wider font-black px-3 py-2 rounded-lg shadow-lg"
                  >
                    Flat 15% Off
                  </motion.div>

                  {/* Hover Overlay - Using your logic */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-center p-4 backdrop-blur-[2px] transition-opacity duration-300"
                  >
                    <p className="text-white text-[16px] font-bold leading-tight">
                      Temporarily unavailable
                    </p>
                    <p className="text-white text-[14px] font-semibold mt-1 mb-4 opacity-80">
                      Open at 26 May 2025, 11:00 AM
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-[#1a1a1a] text-[13px] font-extrabold py-2.5 px-6 rounded-xl shadow-2xl hover:bg-[#ff0000] hover:text-white transition-colors duration-300"
                    >
                      Order Later
                    </motion.button>
                  </motion.div>
                </div>

                {/* Text Content Area */}
                <div className="p-6">
                  <h3 className="text-[20px] font-extrabold text-[#1a1a1a] mb-2 group-hover:text-[#ff0000] transition-colors line-clamp-1">
                    {res.name}
                  </h3>

                  <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mb-4">
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                      <Star
                        size={15}
                        className="text-[#ffcc00] fill-[#ffcc00]"
                      />
                      <span className="text-[#1a1a1a]">
                        {res.rating.split(" ")[0]}
                      </span>
                      <span className="font-medium text-gray-400 text-xs">
                        {res.rating.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 border-l border-gray-100 pl-4">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-xs">{res.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-[14px] font-medium border-t border-gray-50 pt-4">
                    <MapPin size={16} className="text-gray-300 shrink-0" />
                    <span className="line-clamp-1 italic">{res.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW TO ORDER ================= */}
      <section className="relative w-full py-20 overflow-hidden bg-[#fffaf0]">
        {/* Background Decoration Image - Floating Animation */}
        {ordersteps[0]?.ordBg && (
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              initial: { duration: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            src={ordersteps[0].ordBg}
            alt="decoration"
            className="absolute right-[-50px] -bottom-5 w-[300px] md:w-[400px] object-contain pointer-events-none z-0"
          />
        )}

        <div className="relative z-10 max-w-[1320px] mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[45px] font-black text-[#1a1a1a] mb-4">
              How To Order?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
              dolor sit amet consectetur. Massa a of est sit commodo
              <br className="hidden md:block" />
              convallis auctor aliquet ready works
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ordersteps.slice(1).map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -12 }} // Card lift
                className="group relative bg-white rounded-[35px] p-10 pt-14 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-start transition-all duration-500"
              >
                {/* Step Badge - Pop in effect */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                  className="absolute top-10 -right-2.5 bg-[#ff0000] text-white font-bold px-5 py-2 rounded-l-full shadow-lg z-20"
                >
                  Step-0{idx + 1}
                </motion.div>

                {/* Icon Container - Yellow Circle with spin */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-20 h-20 bg-[#ffcc00] rounded-full flex items-center justify-center mb-8 shadow-inner"
                >
                  <img
                    src={step.icon}
                    alt={step.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-[24px] font-black text-[#1a1a1a] mb-4 group-hover:text-[#ff0000] transition-colors">
                  {step.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-7 font-medium">
                  {step.text}
                </p>

                {/* Bottom highlight bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ delay: idx * 0.2 + 0.5, duration: 0.8 }}
                  className="h-1.5 bg-[#ffcc00] mt-6 rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOST POPULAR ITEMS ================= */}
      <section className="max-w-[1400px] mx-auto px-4 py-16 overflow-hidden">
        {/* Header Animation - Slide Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Most Popular <br className="block md:hidden" /> Items
            </h2>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "48px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block h-1.5 bg-orange-600 mt-3 rounded-full"
            ></motion.span>
          </div>

          <Link to="/all-menu" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-800 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all shadow-sm group"
            >
              See All Menu{" "}
              <span className="text-xl transition-transform group-hover:translate-x-1.5 duration-300">
                →
              </span>
            </motion.button>
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Items Grid with Staggered Slide-In */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularitems.slice(0, 6).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="bg-white border border-gray-100 rounded-4xl p-6 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-extrabold text-xl">
                      {item.price}
                    </span>
                    <span className="text-xs text-gray-400 font-medium line-through opacity-0 group-hover:opacity-100 transition-opacity">
                      $25.00
                    </span>
                  </div>
                </div>

                <div className="relative shrink-0">
                  <motion.div className="overflow-hidden rounded-3xl">
                    <img
                      src={item.popularImg}
                      alt={item.name}
                      className="w-24 h-24 md:w-28 md:h-28 object-cover transition-transform duration-700 group-hover:scale-115 group-hover:rotate-3"
                    />
                  </motion.div>

                  <Link
                    to={`/item-details/${item.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="absolute -bottom-2 -right-2 z-20"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white text-orange-600 rounded-xl flex items-center justify-center shadow-xl border border-gray-100 hover:bg-orange-600 hover:text-white transition-all duration-300"
                    >
                      <span className="text-2xl font-bold leading-none">+</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Promo Banner with Smooth Scale and Fade */}
          {popularitems[6] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[420px] relative rounded-[48px] overflow-hidden group min-h-[500px] shadow-2xl"
            >
              <img
                src={popularitems[6].rightImg}
                alt="Special Offer"
                className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-105"
              />

              {/* Floating Price Badge - Smoother Floating */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 left-6 z-10"
              >
                <img
                  src={popularitems[6].priceBadgeImg}
                  alt="Promo Price"
                  className="w-36 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                />
              </motion.div>

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>

              {/* Subtle Bottom Text reveal on hover */}
              <div className="absolute bottom-10 left-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-bold text-lg">Limited Time Offer</p>
                <p className="text-sm opacity-80">
                  Order now to get free delivery
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= DOWNLOAD THE APP ================= */}
      <section className="w-full">
        {downloadapp.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full min-h-[600px] lg:h-[600px] overflow-hidden flex flex-col lg:flex-row items-center bg-orange-600 px-6 md:px-20 py-12"
            style={{
              backgroundImage: `url(${item.appBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Left Side: Content */}
            <div className="flex-1 z-20 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white text-lg font-bold mb-4 block"
              >
                Download the app
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-[75px] font-extrabold text-white leading-[1.1] tracking-tight mb-10"
              >
                Get <span className="text-white">20% Discount</span> of{" "}
                <br className="hidden md:block" />
                your First Order
              </motion.h2>

              {/* Store Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/google-play"
                    className="transition-transform hover:scale-105 block"
                  >
                    <img
                      src={item.googleImg}
                      alt="Google Play"
                      className="h-10 md:h-16 object-contain"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/app-store"
                    className="transition-transform hover:scale-105 block"
                  >
                    <img
                      src={item.appleImg}
                      alt="App Store"
                      className="h-10 md:h-16 object-contain"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* CENTER FLOATING BEEF IMAGE */}
            <div className="absolute top-[45%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-40 lg:opacity-100">
              <motion.img
                src={item.beefImg}
                alt="Fresh Burger"
                className="w-[280px] md:w-[400px] lg:w-[450px] object-contain"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [-3, 3, -3],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Right Side: Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full flex justify-center lg:justify-end items-end h-full mt-12 lg:mt-0 z-0"
            >
              <img
                src={item.appscreenImg}
                alt="App Screens"
                className="w-full max-w-[320px] md:max-w-[550px] object-contain object-bottom"
              />
            </motion.div>
          </div>
        ))}
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="w-full bg-white py-20 px-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What’s Client Think About Our <br className="hidden md:block" />{" "}
              Services
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Side: Testimonial Card - Slides in from Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-2 bg-[#f9f9f9] rounded-[40px] p-6 md:p-12 relative overflow-hidden shadow-sm"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className}"></span>`,
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="testimonial-swiper h-full"
              >
                {testimonial.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col md:flex-row items-center gap-10 pb-10">
                      {/* Image Column with Floating Decoration */}
                      <div className="relative shrink-0">
                        <motion.img
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          src={item.rightflowerImg}
                          alt="decoration"
                          className="absolute -top-4 -left-4 w-10 h-10 z-10"
                        />
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[30px] overflow-hidden shadow-lg">
                          <img
                            src={item.biglientImg}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className="text-yellow-400 text-xl"
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                          {item.heading}
                        </h3>

                        <p className="text-gray-500 text-lg leading-relaxed mb-8 italic">
                          "{item.text}"
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.smalladminImg}
                              alt={item.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-white"
                            />
                            <div className="text-left">
                              <h4 className="font-bold text-gray-900">
                                {item.name}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {item.title}
                              </p>
                            </div>
                          </div>
                          <img
                            src={item.quoteImg}
                            alt="quote"
                            className="w-12 h-12 opacity-10 hidden md:block"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Right Side: Satisfaction Box - Slides in from Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 bg-orange-600 rounded-[40px] p-10 flex flex-col items-center justify-center text-center shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-6 cursor-pointer"
              >
                <img
                  src={testimonial[0].likeImg}
                  alt="Satisfaction"
                  className="w-20 h-20 brightness-0 invert"
                />
              </motion.div>
              <p className="text-white font-bold text-xl mb-4">
                {testimonial[0].testimonytext}
              </p>
              <motion.h2
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                className="text-white text-7xl md:text-9xl font-black"
              >
                {testimonial[0].percent}
              </motion.h2>
            </motion.div>
          </div>
        </div>

        <style>{`
          .testimonial-swiper .swiper-pagination {
            position: relative !important;
            bottom: 0 !important;
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: -20px;
          }
          .testimonial-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background-color: #d1d5db;
            opacity: 1;
            border-radius: 999px;
            transition: all 0.3s ease;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            width: 24px;
            background-color: #ea580c;
          }
        `}</style>
      </section>

      {/* ================= LATEST BLOG POSTS ================= */}
      <div className="w-full bg-white py-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header with Fade-In Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              dolor sit amet consectetur. Massa a of est sit commodo <br />
              convallis auctor aliquet ready works
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockpost.map((post, idx) => (
              <motion.div
                key={idx}
                // Staggered entrance: each card pops up slightly after the previous one
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                // Interactive Hover Effect
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
              >
                {/* Image Container with Overlay Card */}
                <div className="relative h-[450px] md:h-[500px] rounded-[30px] overflow-hidden shadow-sm">
                  <Link to="/blog">
                    <img
                      src={post.blogImg}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>

                  {/* Content Card with Slide-Up animation on group hover */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 group-hover:bg-orange-50">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <motion.div whileHover={{ rotate: 15 }}>
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </motion.div>

                      <Link
                        to="/blog"
                        className="font-medium hover:text-orange-600 transition-colors"
                      >
                        {post.date}
                      </Link>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                      <Link
                        to="/blog"
                        className="hover:text-orange-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER MAIN SECTION - Dark Background */}
      <section className="w-full bg-[#111111] text-white pt-20 pb-10 px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1320px] mx-auto">
          {/* Footer Content Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Column 1: Logo & Contact */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col gap-6"
            >
              <img
                src={logo}
                alt="Mozzu Logo"
                className="w-36 h-auto object-contain"
              />
              <p className="text-gray-400 leading-relaxed text-[15px]">
                1487 Rocky Horse Carre 1487Rocky <br />
                Arlington, TX 16819 United
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <h4 className="text-[28px] font-black text-white">
                  1800 6565 222
                </h4>
                <p className="text-gray-400 font-medium text-[15px]">
                  info@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-[18px] font-extrabold mb-8 text-white">
                QUICK LINKS
              </h3>
              <ul className="flex flex-col gap-4 text-gray-400 font-medium">
                {[
                  "How It Works",
                  "Get to know us",
                  "Pricing Packages",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="hover:text-[#FF5200] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Information */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-[18px] font-extrabold mb-8 text-white">
                INFORMATION
              </h3>
              <ul className="flex flex-col gap-4 text-gray-400 font-medium">
                {[
                  "Help Center",
                  "Refund Condition",
                  "Become an Affiliate",
                  "Cash Back Policy",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="hover:text-[#FF5200] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Subscribe Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-[18px] font-extrabold mb-8 text-white">
                SUBSCRIBE
              </h3>
              <p className="text-gray-400 mb-6 text-[15px] leading-relaxed">
                When an unknown printer took a galley of type and scrambled it
                to make
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Type e-mail"
                  className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#FF5200] transition-all placeholder:text-gray-600"
                />
                <button className="bg-[#FF5200] hover:bg-white hover:text-[#FF5200] text-white font-black py-4 rounded-xl transition-all duration-300">
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-[15px] font-medium">
              Copyright © 2025 <span className="text-[#FF5200]">mozzao</span>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {[
                {
                  icon: (
                    <Facebook size={18} fill="currentColor" stroke="none" />
                  ),
                  to: "/",
                },
                {
                  icon: <Twitter size={18} fill="currentColor" stroke="none" />,
                  to: "/",
                },
                { icon: <Instagram size={18} />, to: "/" },
                {
                  icon: (
                    <Linkedin size={18} fill="currentColor" stroke="none" />
                  ),
                  to: "/",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  to={social.to}
                  className="text-gray-400 hover:text-[#FF5200] transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home4;
