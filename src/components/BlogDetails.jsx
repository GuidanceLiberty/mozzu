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
import {
  categories,
  mainBlogData,
  recentPosts,
  thirdBlogData,
} from "@/data/blogDetails";
import { popularTags } from "@/data/blogStandard";
import AuthorImg from "@/assets/img/inner/blog-author.png";
import { blockpost } from "@/data/indexData";

{
  /* Animation Variants */
}
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const BlogDetails = () => {
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
            Blog Details
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
            <span className="opacity-80">Blog Details</span>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG DETAILS ================= */}
      <section className="bg-white py-10 md:py-24 relative w-full overflow-x-hidden">
        {/* STABLE FLOATING IMAGE*/}
        <div className="hidden xl:block absolute right-[-100px] top-[20%] w-[450px] pointer-events-none z-0">
          <motion.img
            src={mainBlogData.floatingShape}
            alt="decoration"
            initial={{ y: -15, rotate: 0 }}
            animate={{ y: 15, rotate: 5 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-full h-auto will-change-transform"
          />
        </div>

        <div className="container mx-auto px-4 max-w-[1500px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT CONTENT: Articles fade in on scroll */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-8 space-y-20"
            >
              {[mainBlogData, thirdBlogData].map((data, idx) => (
                <motion.article key={idx} variants={fadeInUp} className="group">
                  {/* Updated Image Section */}
                  <div className="mb-10">
                    {data.bigImg1 && data.bigImg2 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-[40px] overflow-hidden shadow-sm bg-gray-50 aspect-square md:aspect-auto md:h-[450px]">
                          <img
                            src={data.bigImg1}
                            alt="Blog Detail 1"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="rounded-[40px] overflow-hidden shadow-sm bg-gray-50 aspect-square md:aspect-auto md:h-[450px]">
                          <img
                            src={data.bigImg2}
                            alt="Blog Detail 2"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-[40px] overflow-hidden shadow-sm bg-gray-50 aspect-video relative">
                        <img
                          src={data.bannerImg || data.thirdImg}
                          alt="Blog"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                  </div>

                  {/* Meta Section */}
                  {data.author && (
                    <div className="flex flex-wrap items-center gap-8 md:gap-16 mb-6 px-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[#FF5C00]">
                          <User size={20} />
                          <div>
                            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                              {data.author.role}
                            </p>
                            <h5 className="text-gray-900 font-black text-lg">
                              {data.author.name}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="relative pl-8 md:pl-16 border-l border-gray-200">
                        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                          {data.publishedDate.time || "Published"}
                        </p>
                        <h5 className="text-gray-900 font-black text-lg">
                          {data.publishedDate.date}
                        </h5>
                      </div>
                    </div>
                  )}

                  {/* Title & Description */}
                  <div className="px-2">
                    <h2 className="text-3xl md:text-[45px] font-black text-gray-900 mb-6 leading-tight group-hover:text-[#FF5C00] transition-colors">
                      {data.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      {data.description}
                    </p>

                    {/* QUOTE BLOCK */}
                    {data.quote && (
                      <div className="bg-[#F7F7F7] rounded-[30px] p-8 md:p-14 mb-8 relative overflow-hidden group/quote">
                        <Quote
                          size={60}
                          className="absolute top-8 left-6 text-gray-200 opacity-50 group-hover/quote:text-[#FF5C00] transition-colors"
                        />
                        <div className="relative z-10">
                          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 italic leading-tight">
                            "{data.quote}"
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-gray-900">
                              {data.authorName}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
                            <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">
                              {data.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Body Text */}
                    {data.text && (
                      <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        {data.text}
                      </p>
                    )}

                    {/* DYNAMIC TAGS & SHARE SECTION */}
                    {data.tags ? (
                      <div className="flex flex-col sm:flex-row items-center justify-between py-8 mt-10 border-t border-gray-100 gap-6">
                        <div className="flex items-center gap-4">
                          <span className="font-black text-gray-900 text-lg">
                            Tags:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {data.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-5 py-2 bg-[#FFF6F2] text-[#FF5C00] font-bold rounded-lg text-sm hover:bg-[#FF5C00] hover:text-white transition-all cursor-pointer"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-black text-gray-900 text-lg">
                            Share:
                          </span>
                          <div className="flex items-center gap-4 text-gray-900">
                            <Facebook
                              size={18}
                              className="cursor-pointer hover:text-[#FF5C00] transition-colors"
                            />
                            <Twitter
                              size={18}
                              className="cursor-pointer hover:text-[#FF5C00] transition-colors"
                            />
                            <MessageCircle
                              size={18}
                              className="cursor-pointer hover:text-[#FF5C00] transition-colors"
                            />
                            <Instagram
                              size={18}
                              className="cursor-pointer hover:text-[#FF5C00] transition-colors"
                            />
                            <Youtube
                              size={18}
                              className="cursor-pointer hover:text-[#FF5C00] transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ x: 10 }}
                        className="bg-[#FF5C00] text-white font-bold py-4 px-10 rounded-2xl hover:bg-black transition-colors mt-4"
                      >
                        Continue Reading
                      </motion.button>
                    )}
                  </div>
                </motion.article>
              ))}

              {/* 1. AUTHOR BIO SECTION */}
              <div className="bg-[#FFF6F2] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mt-12 mb-10">
                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-sm">
                  <img
                    src={AuthorImg}
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">
                    Author
                  </p>
                  <h4 className="text-[#FF5C00] text-3xl font-black mb-4">
                    {mainBlogData.author.name}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    Professional food blogger and culinary enthusiast dedicated
                    to sharing the best flavors and kitchen secrets from around
                    the world.
                  </p>
                </div>
              </div>

              {/* 2. POST A COMMENT SECTION - Reduced Height */}
              <div className="bg-[#FFF6F2] rounded-[40px] p-8 md:p-12">
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  Post a comment
                </h3>
                <p className="text-gray-500 text-lg mb-8">
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                <form className="space-y-6">
                  <textarea
                    placeholder="Comments"
                    className="w-full bg-white border border-transparent focus:border-[#FF5C00] rounded-[30px] p-6 h-40 text-gray-700 text-lg focus:outline-none transition-all resize-none shadow-sm"
                  ></textarea>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-white border border-transparent focus:border-[#FF5C00] rounded-2xl p-5 text-lg focus:outline-none transition-all shadow-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-white border border-transparent focus:border-[#FF5C00] rounded-2xl p-5 text-lg focus:outline-none transition-all shadow-sm"
                    />
                    <input
                      type="text"
                      placeholder="Website"
                      className="bg-white border border-transparent focus:border-[#FF5C00] rounded-2xl p-5 text-lg focus:outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="save-info"
                      className="w-5 h-5 accent-[#FF5C00] rounded cursor-pointer"
                    />
                    <label
                      htmlFor="save-info"
                      className="text-gray-500 text-md font-medium cursor-pointer"
                    >
                      Save my name and email in this browser for the next time I
                      comment.
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FF5C00] text-white font-black py-4 px-12 rounded-2xl transition-colors text-lg shadow-lg shadow-[#FF5C00]/20"
                  >
                    Post Comments
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* RIGHT SIDEBAR DONT TOUCH THIS*/}
            <aside className="lg:col-span-4 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#FDFDFD] border border-gray-200 p-8 md:p-10 rounded-[40px] hover:shadow-xl transition-shadow"
              >
                <h4 className="text-2xl font-black text-gray-900 mb-8">
                  Category
                </h4>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      whileHover={{ x: 5 }}
                      className="w-full flex items-center justify-between p-2 pr-8 bg-white border border-gray-100 rounded-full hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={cat.img}
                          className="w-12 h-12 rounded-full object-cover"
                          alt={cat.name}
                        />
                        <span className="font-black text-gray-900 text-sm tracking-widest">
                          {cat.name}
                        </span>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-300 group-hover:text-[#FF5C00]"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FDFDFD] border border-gray-200 p-8 md:p-10 rounded-[40px]"
              >
                <h4 className="text-2xl font-black text-gray-900 mb-8">
                  Recent post
                </h4>
                <div className="space-y-8">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-5 group cursor-pointer"
                    >
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                        <img
                          src={post.img}
                          alt="recent"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-gray-400 font-bold text-[10px] mb-1 uppercase">
                          {post.date}
                        </p>
                        <h6 className="text-gray-900 font-black text-sm group-hover:text-[#FF5C00] transition-colors leading-snug">
                          {post.title}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FDFDFD] border border-gray-200 p-8 md:p-10 rounded-[40px]"
              >
                <h4 className="text-2xl font-black text-gray-900 mb-8">
                  Popular Tag
                </h4>
                <div className="flex flex-wrap gap-3">
                  {popularTags.map((tag, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-[#FF5C00] hover:text-white hover:border-[#FF5C00] transition-all shadow-sm"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* PROMO CARD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[40px] overflow-hidden bg-red-600 h-[650px] flex flex-col items-center justify-end pb-12 shadow-2xl group"
              >
                <img
                  src={thirdBlogData.rightTop}
                  alt="Promo"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <motion.img
                  src={thirdBlogData.discount}
                  alt="Badge"
                  initial={{ y: 0 }}
                  animate={{ y: -25, rotate: [0, -5, 5, 0] }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute top-10 left-10 w-32 h-32 z-20 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
                />
                <div className="relative z-10 text-center px-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-black font-black py-4 px-12 rounded-2xl hover:bg-[#FF5C00] hover:text-white transition-all shadow-lg text-lg"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
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

export default BlogDetails;
