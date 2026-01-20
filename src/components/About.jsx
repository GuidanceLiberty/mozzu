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
  Play,
  Quote,
  MessageCircle,
  Calendar,
  Sparkles,
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

//Book a table
import BookTableBg from "@/assets/img/inner/book-point-bg.png";

//Footer Images
import Logo from "@/assets/img/logo/logo-white.png";
import FooterLeftImg from "@/assets/img/home-4/footer4-left.png";
import FooterRightImg from "@/assets/img/home-4/footer4-right.png";
import FotterEle from "@/assets/img/home-3/footer-ele.png";
import {
  chefservice,
  experts,
  marqueeItems,
  service,
  testimonial,
} from "@/data/aboutData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
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
        <div className="relative z-10 text-center px-4 w-full">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tight"
          >
            About us
          </motion.h1>

          {/* Breadcrumb Text Added Below */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 font-medium text-xl"
          >
            <span className="cursor-pointer">Home</span>
            <span className="text-xl">›</span>
            <span className="cursor-pointer">Pages</span>
            <span className="text-xl">›</span>
            <span className="opacity-80">About</span>
          </motion.div>
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
                  className="hidden lg:block absolute -bottom-32 right-[-154px] w-[420px] aspect-4/3 rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-xl z-30"
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

      {/* ================= CHEF SERVICE SECTION ================= */}
      <section className="relative w-full py-24 bg-amber-50 overflow-hidden">
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
                        ),
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

      {/* ================= BOOK TABLE SECTION ================= */}
      <section
        className="relative min-h-[800px] flex items-center justify-end px-4 lg:px-24 py-16 bg-cover bg-center bg-no-repeat overflow-hidden mt-32"
        style={{ backgroundImage: `url(${BookTableBg})` }}
      >
        <div className="max-w-[1400px] w-full relative z-10 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-[45px] md:text-[80px] lg:text-[100px] font-serif italic mb-6 lg:mr-20 z-20 tracking-tight drop-shadow-2xl"
          >
            Book A Table
          </motion.h2>

          <div className="relative w-full max-w-[700px] min-h-[600px] md:min-h-[700px] flex items-center justify-center">
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
                            className="w-20 h-12 opacity-100! hidden md:block"
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

export default About;
