/* eslint-disable no-unused-vars */

import {
  ChevronDown,
  Facebook,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plus,
  ShoppingCart,
  Twitter,
  User,
  X,
  Youtube,
  Star,
  Clock,
  ChevronRight,
  ChevronLeft,
  List,
  Grid,
  Check,
  Instagram,
  Minus,
  Heart,
  ClipboardList,
  Search,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/logo/logo-white.png";
import logoIcon from "@/assets/img/logo/favicon.png";
import { Link } from "react-router-dom";
import {
  blockLinks,
  homeLinks,
  menuLinks,
  pageLinks,
  shopLinks,
} from "@/data/home3Data";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Background + Decorations
import bgImg from "@/assets/img/hero/breadcrumb-banner.jpg";
import leftImg from "@/assets/img/home-1/home-shape-start.png";
import rightImg from "@/assets/img/home-1/home-shape-end.png";

//Footer Images
import Logo from "@/assets/img/logo/logo-white.png";
import FooterLeftImg from "@/assets/img/home-4/footer4-left.png";
import FooterRightImg from "@/assets/img/home-4/footer4-right.png";
import FotterEle from "@/assets/img/home-3/footer-ele.png";

//Order tracking;
import Thumb1 from "@/assets/img/inner/delivery-thumb01.png";
import Thumb2 from "@/assets/img/inner/delivery-thumb02.png";
import {
  orderItems,
  orderSummaryInfo,
  orderTotals,
  orderTrackingData,
} from "@/data/orderTrackingData";

const OrderTracking = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= MAIN NAVBAR SECTION ================= */}
      <motion.section
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0  left-0 z-50 bg-orange-600 shadow-2xl border-b border-white/5"
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
              <span className="group-hover:text-orange-300 flex items-center gap-1 transition-colors">
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
              <span className="group-hover:text-orange-300 flex items-center gap-1 transition-colors">
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
              <span className="group-hover:text-orange-300 flex items-center gap-1 transition-colors">
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
              <span className="group-hover:text-orange-300 flex items-center gap-1 transition-colors">
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
              <span className="group-hover:text-orange-300 flex items-center gap-1 transition-colors">
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
              className="group-hover:text-orange-300 transition-colors h-full flex items-center"
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
                className="hidden lg:flex items-center gap-2 bg-white border-[#e52e2e] text-[#e52e2e] hover:bg-[#e52e2e] hover:text-white font-bold rounded-full px-8 py-6 text-base transition-all duration-300 border"
              >
                <User size={20} className="stroke-[2px]" />
                <span>Log In</span>
              </Button>
            </div>

            {/* 2. CART */}
            <div className="px-4">
              <div className="relative cursor-pointer group w-11 h-11 border border-gray-900 rounded-full bg-white flex items-center justify-center hover:border-[#ff4d00] transition-colors">
                <ShoppingCart className="w-5 h-5 text-orange-600 group-hover:text-[#ff4d00] transition-colors" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  02
                </span>
              </div>
            </div>

            {/* 3. LANGUAGE SELECTOR WITH DROPDOWN */}
            <div className="px-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <div className="flex items-center gap-1 cursor-pointer group ">
                    <Globe
                      size={20}
                      className="text-white group-hover:text-amber-100 transition-colors"
                    />
                    <span className="font-bold text-white text-lg group-hover:text-amber-100">
                      Eng
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-white group-hover:text-amber-100 mt-1"
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
                            to="/restaurant-detail01"
                            className="hover:text-orange-600 transition-colors"
                          >
                            Restaurant Details 01
                          </Link>
                          <Link
                            to="/restaurant-detail02"
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

      {/* ================= HERO (SHOP STYLE) ================= */}
      <section className="relative w-full h-[450px] md:h-[550px] text-white overflow-hidden flex items-center justify-center">
        {/* BACKGROUND IMAGE - Subtle Zoom */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundColor: "#ff4d00",
          }}
        ></motion.div>

        {/* Decorative Left & Right Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Salad/Food Image */}
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={leftImg}
            alt="left decoration"
            className="absolute left-0 bottom-0 w-[250px] md:w-[450px] object-contain translate-y-10 -translate-x-10"
          />

          {/* Right Chicken/Food Image */}
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={rightImg}
            alt="right decoration"
            className="absolute right-0 bottom-0 w-[250px] md:w-[450px] object-contain translate-y-10 translate-x-10"
          />
        </div>

        {/* HERO CONTENT - Centered vertically and horizontally */}
        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-4 leading-none tracking-tight"
          >
            Track your Order
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-bold mb-10"
          >
            Get real-time updates on your delivery status
          </motion.p>

          {/* SEARCH BAR  */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-[750px] relative"
          >
            <div className="bg-white rounded-full p-2 flex items-center shadow-xl">
              <input
                type="text"
                placeholder="Enter your Order Number or Pl..."
                className="flex-1 bg-transparent px-6 py-3 text-gray-900 font-bold outline-none placeholder:text-gray-400 placeholder:font-bold"
              />
              <button className="bg-[#FF5C00] hover:bg-black transition-colors text-white px-8 py-3 rounded-full flex items-center gap-2 font-black uppercase text-sm tracking-widest">
                <Search size={20} />
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ORDER TRACKING SECTION ================= */}
      <section className="bg-[#FDFDFD] py-10 md:py-20 relative overflow-hidden">
        {/* Decorative Pasta Image */}
        <img
          src={Thumb2}
          alt="Pasta Decoration"
          className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] pointer-events-none opacity-90 rotate-12"
        />

        <div className="container mx-auto px-4 max-w-[1500px] relative z-10">
          <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-[0px_10px_60px_rgba(0,0,0,0.05)] border border-gray-100">
            {/* HEADER: Order ID & Delivery Estimate */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                  Order #mOZAPIZZO896
                </h2>
                <p className="text-gray-500 font-bold mt-1">
                  Place on: 04.24 pm June 12, 2025
                </p>
              </div>
              <div className="md:text-right">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  Estimate Delivery
                </h3>
                <p className="text-gray-500 font-bold mt-1">
                  05.13 pm, June 12, 2025.
                </p>
              </div>
            </div>

            {/* DELIVERY PROGRESS BAR */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <h4 className="text-xl font-black text-gray-900">
                  Delivery Progress
                </h4>
                <span className="text-2xl font-black text-gray-900">34%</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF5C00] rounded-full transition-all duration-500"
                  style={{ width: "34%" }}
                ></div>
              </div>
            </div>

            {/* ACTIVE STATUS NOTIFICATION */}
            <div className="bg-[#F8F8F8] p-6 rounded-2xl flex items-center gap-5 mb-16">
              <div className="w-14 h-14 bg-[#FF5C00] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0px_8px_15px_rgba(255,92,0,0.3)]">
                <ClipboardList size={28} />
              </div>
              <div>
                <h5 className="font-black text-gray-900 text-lg">Preparing</h5>
                <p className="text-gray-500 font-bold">
                  Your order is being prepared.
                </p>
              </div>
            </div>

            {/* ORDER TIMELINE - Mapped from orderTrackingData */}
            <div className="mb-20">
              <h4 className="text-2xl font-black text-gray-900 mb-10">
                Order Timeline
              </h4>
              <div className="relative pl-10 space-y-12">
                {/* Main Vertical Line */}
                <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

                {orderTrackingData.map((step, index) => (
                  <div
                    key={index}
                    className={`relative ${!step.active ? "opacity-40" : ""}`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[35px] top-1 w-7 h-7 rounded-full border-4 border-white z-10 
                ${step.active ? "bg-[#FF5C00]" : "bg-gray-400"}`}
                    ></div>

                    {/* Step Content */}
                    <div className="flex flex-col gap-1">
                      <h6 className="font-black text-gray-900 text-lg">
                        {step.title}
                      </h6>
                      <p className="text-gray-500 font-bold">{step.desc}</p>
                      <span className="text-gray-400 text-sm font-bold mt-1">
                        {step.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM INFO CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-gray-100 pt-16">
              {/* Delivery Details Card - Thumb1 */}
              <div>
                <h4 className="text-2xl font-black text-gray-900 mb-8">
                  Delivery Details
                </h4>
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={Thumb1}
                    alt="Michal Rodrigues"
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h5 className="font-black text-gray-900 text-lg">
                      Michal Rodrigues
                    </h5>
                    <div className="flex items-center gap-1 text-gray-500 font-bold text-sm">
                      <Star
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      4.6 (50 deliveries)
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#F8F8F8] p-4 rounded-xl text-gray-900 font-bold">
                    In transit to your location
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F8F8F8] p-4 rounded-xl">
                      <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider">
                        Estimated Arrival
                      </p>
                      <p className="text-gray-900 font-black text-base">
                        8 mins
                      </p>
                    </div>
                    <div className="bg-[#F8F8F8] p-4 rounded-xl">
                      <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider">
                        Current Distance
                      </p>
                      <p className="text-gray-900 font-black text-base">
                        2.4 km
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button className="py-4 rounded-xl border border-gray-200 font-black text-gray-900 hover:bg-gray-50 transition-all">
                      Call
                    </button>
                    <button className="py-4 rounded-xl bg-[#FF5C00] text-white font-black hover:bg-black transition-all shadow-[0px_10px_20px_rgba(255,92,0,0.2)]">
                      Message
                    </button>
                  </div>
                </div>
              </div>

              {/* Restaurant Details Card - Thumb2 */}
              <div className="bg-white">
                <h4 className="text-2xl font-black text-gray-900 mb-8">
                  Restaurant
                </h4>
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={Thumb2}
                    alt="Hilsa of Bengal"
                    className="w-14 h-14 rounded-2xl object-cover shadow-sm"
                  />
                  <div>
                    <h5 className="font-black text-gray-900 text-lg">
                      Hilsa of Bengal Restaurant
                    </h5>
                    <div className="flex items-center gap-1 text-gray-500 font-bold text-sm">
                      <Star
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      4.8 (Top Rated)
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F8F8] p-8 rounded-[30px] space-y-5">
                  {[
                    "2464 Royal Ln. Mesa, New Jersey 45463",
                    "(217) 555-0113",
                    "Saturday To Friday 09.00 am to 11.00",
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-500 mt-2 shrink-0"></div>
                      <p className="text-gray-900 font-bold leading-tight">
                        {info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ORDER SUMMARY & ITEMS LIST */}
            <div className="mt-16 pt-16 border-t border-gray-600">
              <div className="flex justify-between items-center mb-10">
                <h4 className="text-2xl font-black text-gray-900">
                  Order Summary
                </h4>
                <span className="bg-[#FFF1EA] text-[#FF5C00] px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-wider">
                  {orderSummaryInfo.status}
                </span>
              </div>

              {/* Summary Info Table - Mapped from orderSummaryInfo */}
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black text-gray-900">
                    Order ID:
                  </span>
                  <span className="text-lg font-black text-gray-900">
                    {orderSummaryInfo.orderId}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-dashed border-gray-100 pt-6">
                  <span className="text-xl font-black text-gray-900">
                    Payment:
                  </span>
                  <span className="text-gray-500 font-bold">
                    {orderSummaryInfo.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-dashed border-gray-100 pt-6">
                  <span className="text-xl font-black text-gray-900">
                    Estimated delivery:
                  </span>
                  <span className="text-gray-500 font-bold">
                    {orderSummaryInfo.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Items Sub-Section - Mapped from orderItems */}
              <div className="mt-12">
                <h5 className="text-2xl font-black text-gray-900 mb-8">
                  Items:
                </h5>
                <div className="space-y-8">
                  {orderItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                          <img
                            src={Thumb2}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h6 className="text-lg font-black text-gray-900 leading-none">
                            {item.name}:
                          </h6>
                          <p className="text-gray-400 font-bold text-sm mt-2">
                            ({item.quantity} x ${item.originalPrice})
                          </p>
                        </div>
                      </div>
                      <span className="text-xl font-black text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADDED PRICING BREAKDOWN (Subtotal, Tax, Total) */}
              <div className="mt-16 pt-10 border-t border-gray-100 space-y-5">
                <div className="flex justify-between items-center">
                  <h6 className="text-xl font-black text-gray-900">
                    Subtotal:
                  </h6>
                </div>
                <div className="flex justify-between items-center">
                  <h6 className="text-xl font-black text-gray-900">
                    Delivery Fees:
                  </h6>
                  <span className="text-xl font-black text-gray-900">
                    ${orderTotals.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h6 className="text-xl font-black text-gray-900">Tax:</h6>
                  <span className="text-xl font-black text-gray-900">
                    ${orderTotals.tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <h6 className="text-xl font-black text-gray-900">Total:</h6>
                  <span className="text-xl font-black text-gray-900">
                    ${orderTotals.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-10 overflow-hidden">
        {/* Left Floating  */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-10 opacity-40 pointer-events-none z-0"
        >
          <img src={FooterLeftImg} alt="decoration" className="max-w-[300px]" />
        </motion.div>

        {/* Right Floating*/}
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

export default OrderTracking;
