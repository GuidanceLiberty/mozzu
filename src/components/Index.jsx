/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import {
  LocateFixed,
  Menu,
  Phone,
  ShoppingCart,
  MapPin,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import logo from "@/assets/img/logo/logo-theme.png";
import logoblack from "@/assets/img/logo/log-black.png";

// Background + Decorations
import bgImg from "@/assets/img/hero/breadcrumb-banner.jpg";
import leftImg from "@/assets/img/home-1/home-shape-start.png";
import rightImg from "@/assets/img/home-1/home-shape-end.png";

import {
  becomepartner,
  bigburgerchees,
  blockpost,
  categories,
  discounts,
  downloadapp,
  ordersteps,
  popularitems,
  restaurantnear,
  restaurants,
  superdeal,
  testimonial,
} from "@/data/indexData";

const Index = () => {
  const swiperRef = useRef(null);
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= NAVBAR SECTION ================= */}
      <motion.section
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 left-0 z-50 px-6 py-4 bg-orange-600 "
      >
        <div className="flex items-center justify-between w-full">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">
            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Menu
                    size={40}
                    className="text-white border border-white rounded-full p-1 hover:bg-white/20 transition-colors"
                  />
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-6 h-full flex flex-col overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center mb-4 ">
                    <Link to="/">
                      <img
                        src={logoblack}
                        alt="Logo"
                        className=" w-full max-w-[200px] object-contain"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {/* HOME */}
                  <AccordionItem value="home">
                    <AccordionTrigger className="text-2xl font-semibold ">
                      Home
                    </AccordionTrigger>
                    <AccordionContent className=" flex flex-col pl-4 space-y-2 font-bold text-lg text-gray-700">
                      <Link
                        to="/"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Home
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
                  <AccordionItem value="menu">
                    <AccordionTrigger className="text-2xl font-semibold">
                      Menu
                    </AccordionTrigger>
                    <AccordionContent className=" flex flex-col pl-4 space-y-2 font-bold text-lg text-gray-700">
                      <Link
                        to="/single-food-menu"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Single Food Menu
                      </Link>
                      <Link
                        to="menu-list"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Menu List
                      </Link>
                      <Link
                        to="restaurant-list"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Restaurant List
                      </Link>
                      <Link
                        to="menu-categories"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Menu Categories
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  {/* SHOP */}
                  <AccordionItem value="shop">
                    <AccordionTrigger className="text-2xl font-semibold">
                      Shop
                    </AccordionTrigger>
                    <AccordionContent className=" flex flex-col pl-4 space-y-2 font-bold text-lg text-gray-700">
                      <Link
                        to="shop"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Shop
                      </Link>
                      <Link
                        to="shop-detail"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Shop Details
                      </Link>
                      <Link
                        to="cart"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Cart
                      </Link>
                      <Link
                        to="checkout"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Checkout
                      </Link>
                      <Link
                        to="order-tracking"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Order Tracking
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  {/* BLOG */}
                  <AccordionItem value="blog">
                    <AccordionTrigger className="text-2xl font-semibold">
                      Blog
                    </AccordionTrigger>
                    <AccordionContent className=" flex flex-col pl-4 space-y-2 font-bold text-lg text-gray-700">
                      <Link
                        to="blog-standard"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Blog Standard
                      </Link>
                      <Link
                        to="blog-detail"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Blog Details
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  {/* PAGES */}
                  <AccordionItem value="pages">
                    <AccordionTrigger className="text-2xl font-semibold">
                      Pages
                    </AccordionTrigger>
                    <AccordionContent className=" flex flex-col pl-4 space-y-2 font-bold text-lg text-gray-700">
                      <Link
                        to="about"
                        className="hover:text-orange-600 transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        to="faq"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Faqs
                      </Link>
                      <Link
                        to="team"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Team
                      </Link>
                      <Link
                        to="team-detail"
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
                        to="restaurant-detail01"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Restaurant Details 01
                      </Link>
                      <Link
                        to="restaurant-detail02"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Restaurant Details 02
                      </Link>
                      <Link
                        to="contact"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Contact
                      </Link>
                      <Link
                        to="error"
                        className="hover:text-orange-600 transition-colors"
                      >
                        404
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-6 space-y-4">
                  <p className="text-xl font-bold border-b pb-2">
                    Contact Info
                  </p>
                  <p className="flex text-gray-600 text-lg gap-3 cursor-pointer hover:text-orange-600 transition-colors">
                    <MapPin size={24} className="text-orange-600" /> 105 Allen
                    Ave/Lagos/Nigeria.
                  </p>
                  <p className="flex text-gray-600 text-lg gap-3 cursor-pointer hover:text-orange-600 transition-colors">
                    <Mail size={24} className="text-orange-600" />{" "}
                    newguidance@gmail.com
                  </p>
                  <p className="flex text-gray-600 text-lg gap-3 cursor-pointer hover:text-orange-600 transition-colors">
                    <Phone size={24} className="text-orange-600" /> 09112524812
                  </p>
                </div>

                <SheetFooter className="mt-8">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                    Get Started
                  </button>
                </SheetFooter>
                <SheetClose />
              </SheetContent>
            </Sheet>

            {/* Hotline - HIDDEN ON MOBILE  */}
            <div className="hidden md:flex items-center gap-2 text-white font-medium bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <Phone className="w-4 h-4 fill-white" />
              <span>+234 911 252 4812</span>
            </div>
          </div>

          {/* CENTER LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 md:h-12 cursor-pointer"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* CART ICON */}
            <motion.div
              whileHover={{ y: -2 }}
              className="relative cursor-pointer group"
            >
              <ShoppingCart className="w-7 h-7 text-white group-hover:text-orange-200 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                02
              </span>
            </motion.div>

            {/* LOGIN BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full px-6 shadow-md border-none">
                Log In
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= HERO + SEARCH ================= */}
      <section className="relative w-full min-h-screen text-white overflow-hidden">
        {/* BACKGROUND IMAGE - Added subtle zoom in */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></motion.div>

        {/* Decorative Left & Right Images - Added sliding entrance */}
        <div className="">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={leftImg}
            alt="left decoration"
            className="absolute -left-60 -bottom-34 w-[800px] object-contain"
          />
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={rightImg}
            alt="right decoration"
            className="absolute right-0 bottom-0 w-[500px] object-contain"
          />
        </div>

        {/* HERO CONTENT - Staggered fade up */}
        <div className="relative z-10 text-center mt-32 px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white/90 mb-2 text-xl"
          >
            Explore top-rated attractions, activities and more
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Fast Delivery. Zero Hassle.
          </motion.h1>

          {/* SEARCH BAR - Gentle scale up */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 bg-white rounded-full p-2 shadow-lg w-full max-w-5xl mx-auto"
          >
            <MapPin size={28} className="text-gray-800 ml-2" />
            <Input
              type="text"
              placeholder="Enter delivery address"
              className="flex-1 border-none focus-visible:ring-0 text-gray-700"
            />

            <button className="flex items-center gap-1 text-gray-800 font-medium px-3 hover:text-orange-600 transition-colors">
              <LocateFixed className="w-5 h-5 text-red-500" />
              Locate Me
            </button>

            <Button variant="default" className="rounded-full px-8">
              Search
            </Button>
          </motion.div>
        </div>

        {/* ================= CATEGORIES - Staggered Grid ================= */}
        <div className="relative z-10 mt-12 flex gap-6 flex-wrap justify-center px-4">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
            >
              <Link
                to={`/category/${item.name.toLowerCase()}`}
                className="flex flex-col items-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md transition-shadow group-hover:shadow-xl"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </motion.div>

                <p className="mt-2 text-white font-medium group-hover:text-orange-400 transition-colors">
                  {item.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white mt-8 py-16 overflow-hidden">
        {/* ================= DISCOUNT CARDS ================= */}
        <div className="max-w-360 mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {discounts.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden h-[260px]"
            >
              {/* background */}
              <img
                src={item.bgImg}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* content */}
              <div className="relative z-10 p-6">
                {/* discount badge */}
                <span className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
                  {item.discount}
                </span>

                {/* title */}
                <h3 className="mt-4 text-xl font-extrabold text-black leading-tight">
                  {item.name}
                </h3>

                {/* price */}
                <img
                  src={item.priceImg}
                  alt={item.name}
                  className={`mt-4 w-[110px] ${
                    item.name === "CREAMY PASTA"
                      ? "absolute top-2/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      : "relative mt-6"
                  }`}
                />
              </div>

              {/* product image */}
              {item.productImg && (
                <motion.img
                  src={item.productImg}
                  alt=""
                  className="absolute -right-2.5 -bottom-2.5 w-[220px]"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ================= MOST VISITED RESTAURANTS ================= */}
        <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-16 overflow-hidden">
          {/* Header Section - Balanced for Mobile/Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12"
          >
            <div className="max-w-md">
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Most Visited <br className="block md:hidden" /> Restaurants
              </h2>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block h-1.5 bg-orange-600 mt-3 rounded-full"
              ></motion.span>
            </div>

            <Link to="/restaurants" className="w-full md:w-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full md:w-auto rounded-2xl border-gray-200 px-6 py-5 md:py-6 text-base md:text-lg font-bold flex items-center justify-center gap-2 hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                >
                  {/* Text changes based on screen size to prevent overflow */}
                  <span className="hidden md:inline">See All Restaurants</span>
                  <span className="md:hidden">View All</span>
                  <span className="text-xl">→</span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Grid - Adjusted gap for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {restaurants.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-4xl md:rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Top Image Section */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.rgImg}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-4 left-0 bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-r-lg z-10 shadow-md">
                    Flat 15% Off
                  </div>

                  {/* Top Rated Badge */}
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 uppercase z-10 shadow-lg">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Top Rated
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-xs md:text-sm mb-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="font-bold text-gray-800">
                        {item.ratings}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-1 truncate">
                    <Link
                      to={`/restaurant/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item.name}
                    </Link>
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-1 italic">
                    {item.food}
                  </p>

                  <div className="flex items-start gap-2 text-gray-400">
                    <MapPin size={16} className="shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm line-clamp-2">
                      {item.address}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SUPER DELICIOUS DEALS ================= */}
        <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12 overflow-hidden">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-md"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Super Delicious <br className="block md:hidden" /> Deals
              </h2>
              <span className="block w-12 md:w-16 h-1.5 bg-orange-600 mt-3 rounded-full"></span>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 self-end md:self-auto">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 md:p-4 border border-gray-200 rounded-2xl hover:bg-orange-600 hover:text-white transition-all shadow-sm bg-white active:scale-90"
              >
                <span className="text-xl md:text-2xl font-bold">←</span>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 md:p-4 border border-gray-200 rounded-2xl hover:bg-orange-600 hover:text-white transition-all shadow-sm bg-white active:scale-90"
              >
                <span className="text-xl md:text-2xl font-bold">→</span>
              </button>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="relative -mx-4 px-4">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.5 },
              }}
              className="overflow-visible!"
            >
              {superdeal.map((item, idx) => (
                <SwiperSlide key={idx} className="h-auto! py-4">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-4xl md:rounded-[40px] h-full overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    {/* Top Image Section */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={item.spImg}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Badges */}
                      <div className="absolute top-4 left-0 flex flex-col gap-2 items-start">
                        {item.badges?.map((badge, bIdx) => (
                          <div
                            key={bIdx}
                            className="bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-r-lg shadow-md uppercase tracking-wider"
                          >
                            <span className="text-xs">%</span> {badge}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm mb-2">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="font-bold text-gray-800">
                          {item.ratings}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mb-4 italic line-clamp-1">
                        {item.food}
                      </p>
                      <div className="flex items-start gap-2 text-gray-400 border-t pt-4 border-gray-50">
                        <MapPin
                          size={16}
                          className="shrink-0 text-orange-600/50"
                        />
                        <span className="text-[11px] md:text-sm line-clamp-1">
                          {item.address}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ================= HOW TO ORDER ================= */}
        <div className="relative w-full py-20 overflow-hidden bg-amber-50">
          {/* Background Decoration Image with Floating Animation */}
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
              }}
              src={ordersteps[0].ordBg}
              alt="decoration"
              className="absolute right-0 bottom-0 w-[300px] md:w-[450px] object-contain pointer-events-none z-0"
            />
          )}

          <div className="relative z-10 max-w-360 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                How To Order?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                dolor sit amet consectetur. Massa a of est sit commodo{" "}
                <br className="hidden md:block" />
                convallis auctor aliquet ready works
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ordersteps.slice(1).map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  whileHover={{ y: -12 }}
                  className="group relative bg-white rounded-[40px] p-10 shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-start transition-all duration-300"
                >
                  {/* Step Badge with Pulse */}
                  <div className="absolute top-8 right-8 bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white font-bold px-4 py-1.5 rounded-full text-sm transition-colors duration-300 shadow-sm">
                    Step-0{idx + 1}
                  </div>

                  {/* Icon Container with Scale and Glow */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-orange-200 group-hover:shadow-orange-400 group-hover:scale-110 transition-all duration-300"
                  >
                    <img
                      src={step.icon}
                      alt={step.name}
                      className="w-10 h-10 object-contain brightness-0 invert"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                    <Link
                      to={`/${step.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="transition-colors hover:text-orange-600 hover:underline decoration-orange-600 decoration-2 underline-offset-8"
                    >
                      {step.name}
                    </Link>
                  </h3>

                  <p className="text-gray-500 text-lg leading-relaxed">
                    {step.text}
                  </p>

                  {/* Arrow Decoration */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-100 transition-opacity">
                      <span className="text-4xl text-orange-600">→</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RESTAURANT NEAR YOU ================= */}
        <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20 overflow-hidden">
          {/* Header Animation  */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-14"
          >
            <div className="max-w-md">
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Restaurants <br className="block md:hidden" /> Near You
              </h2>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block h-1.5 bg-orange-600 mt-3 rounded-full"
              ></motion.span>
            </div>

            <Link to="/#" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-4 border border-gray-200 rounded-2xl font-bold text-gray-800 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all group shadow-sm bg-white"
              >
                <span className="md:inline">See All Menu</span>
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Grid*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {restaurantnear.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className={`group relative h-[220px] md:h-[300px] rounded-4xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  idx >= 4 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Image Zoom Effect */}
                <img
                  src={item.nearImg}
                  alt={item.city}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay with dynamic opacity */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

                <div className="absolute bottom-5 left-6 z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    {item.city}
                  </h3>

                  <div className="bg-orange-600 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-xl text-xs md:text-sm font-bold inline-block shadow-lg border border-orange-500/50">
                    {item.number} Restaurants
                  </div>
                </div>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-linear-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BIG BURGER CHEESE PROMO ================= */}
        <div className="max-w-360 mx-auto px-4 py-12 overflow-hidden">
          {bigburgerchees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full min-h-[500px] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 group"
              style={{
                backgroundImage: `url(${item.bugerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Left Side: Product Images with 3D Float */}
              <div className="relative flex-1 flex justify-center items-center mb-10 md:mb-0">
                {/* Main Burger Image - Zooms and tilts slightly on scroll */}
                <motion.img
                  initial={{ rotate: -5, x: -50, opacity: 0 }}
                  whileInView={{ rotate: 0, x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  src={item.bigBurImg}
                  alt={item.name}
                  className="w-full max-w-[550px] object-contain z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Price Badge Overlay - Continuous Floating + Entry Animation */}
                <motion.img
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    initial: { duration: 0.5, delay: 0.8 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  src={item.bigBurPrice}
                  alt="Price Badge"
                  className="absolute top-10 right-0 md:right-15 w-32 md:w-44 z-20 drop-shadow-2xl"
                />
              </div>

              {/* Right Side: Content with Staggered Slide-up */}
              <div className="flex-1 text-center md:text-left md:pl-16 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-10 font-serif tracking-tight">
                    Big Burger <br />
                    <span className="text-white relative">
                      Cheese
                      {/* Subtle underline animation */}
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-2 left-0 h-2 bg-orange-500/50 -z-10"
                      />
                    </span>
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/#" className="inline-block">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/80 text-white rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 group shadow-lg">
                      See Details & Offers
                      <span className="text-xl transition-transform group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Subtle background overlay flicker for "flame" effect */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* ================= MOST POPULAR ITEMS ================= */}
        <div className="max-w-[1400px] mx-auto px-4 py-16 overflow-hidden">
          {/* Header Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Most Popular <br className="block md:hidden" /> Items
              </h2>
              <span className="block w-12 h-1.5 bg-orange-600 mt-3 rounded-full"></span>
            </div>

            <Link to="/all-menu" className="w-full md:w-auto">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-xl font-bold text-gray-800 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all group">
                See All Menu{" "}
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: Items Grid with Staggered Entrance */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularitems.slice(0, 6).map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-100 rounded-[30px] p-6 flex items-center justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">
                      {item.text}
                    </p>
                    <span className="text-orange-600 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>

                  <div className="relative">
                    <img
                      src={item.popularImg}
                      alt={item.name}
                      className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />

                    <Link
                      to={`/item-details/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="absolute -bottom-2 -right-2 z-20"
                    >
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-white text-orange-600 rounded-lg flex items-center justify-center shadow-lg border border-gray-100 hover:bg-orange-600 hover:text-white transition-colors"
                      >
                        <span className="text-xl font-bold leading-none">
                          +
                        </span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side: Promo Banner with Entrance Scale */}
            {popularitems[6] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-[400px] relative rounded-[40px] overflow-hidden group h-full min-h-[500px] shadow-2xl"
              >
                <img
                  src={popularitems[6].rightImg}
                  alt="Special Offer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Floating Badge with constant subtle floating motion */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-20 left-4 z-10"
                >
                  <img
                    src={popularitems[6].priceBadgeImg}
                    alt="Promo Price"
                    className="w-32 drop-shadow-xl"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none"></div>
              </motion.div>
            )}
          </div>
        </div>

        {/* ================= DOWNLOAD THE APP ================= */}
        <div className="w-full">
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
        </div>

        {/* ================= TESTIMONIAL SECTION ================= */}
        <div className="w-full bg-white py-20 px-4 overflow-hidden">
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
        </div>

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
      </section>

      {/* ================= SITE END SECTION (PARTNERS + FOOTER) ================= */}
      <footer className="w-full">
        {/* 1. BECOME A PARTNER SECTION - Floating Layer */}
        <div className="relative z-20 w-full px-4 md:px-10">
          <div className="max-w-[1400px] mx-auto -mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {becomepartner.map((item, idx) => (
                <motion.div
                  key={idx}
                  // Slide in from bottom with a slight scale-up
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  // Interactive Hover: Card lifts and glows slightly
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-[#FFF5F0] rounded-[30px] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image Container with a subtle zoom on hover */}
                  <div className="w-full md:w-1/3 shrink-0 overflow-hidden rounded-2xl">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={item.partnerImg}
                      alt={item.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 + 0.3 }}
                      className="text-2xl md:text-3xl font-black text-gray-900 mb-3"
                    >
                      {item.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-6">{item.text}</p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#FF5200] text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all group"
                    >
                      {item.title.includes("Restaurant")
                        ? "Become A Partner"
                        : "Become A Hero"}

                      {/* Animated Arrow micro-interaction */}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. FOOTER MAIN SECTION - Dark Background */}
        <div className="w-full bg-[#111111] text-white pt-56 pb-10 px-4 md:px-10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            {/* Footer Content Grid with Staggered Columns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
            >
              {/* Column 1: Logo Section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col gap-6"
              >
                <img src={logo} alt="Mozzu Logo" className="w-40" />
                <p className="text-gray-400 leading-relaxed">
                  1487 Rocky Horse Carre 1487Rocky <br />
                  Arlington, TX 16819 United
                </p>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-black">1800 6565 222</h4>
                  <p className="text-gray-400">info@gmail.com</p>
                </div>
              </motion.div>

              {/* Column 2: Quick Links */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-xl font-bold mb-8 uppercase tracking-wider">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-4 text-gray-400">
                  {[
                    "How It Works",
                    "Get to know us",
                    "Pricing Packages",
                    "Contact Us",
                  ].map((link) => (
                    <motion.li
                      key={link}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to="/"
                        className="hover:text-orange-500 transition-colors"
                      >
                        {link}
                      </Link>
                    </motion.li>
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
                <h3 className="text-xl font-bold mb-8 uppercase tracking-wider">
                  Information
                </h3>
                <ul className="flex flex-col gap-4 text-gray-400">
                  {[
                    "Help Center",
                    "Refund Condition",
                    "Become an Affiliate",
                    "Cash Back Policy",
                  ].map((link) => (
                    <motion.li
                      key={link}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to="/"
                        className="hover:text-orange-500 transition-colors"
                      >
                        {link}
                      </Link>
                    </motion.li>
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
                <h3 className="text-xl font-bold mb-8 uppercase tracking-wider">
                  Subscribe
                </h3>
                <p className="text-gray-400 mb-6">
                  When an unknown printer took a galley of type and scrambled it
                  to make
                </p>
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Type e-mail"
                    className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FF5200] hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all"
                  >
                    Subscribe Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Copyright Bar with Fade In */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <p className="text-gray-500 text-sm md:text-base">
                Copyright © 2025 <span className="text-orange-500">mozzoa</span>
              </p>

              {/* Social Icons with Springy Hover */}
              <div className="flex items-center gap-6">
                {[
                  {
                    icon: (
                      <Facebook size={20} fill="currentColor" stroke="none" />
                    ),
                    to: "/",
                  },
                  {
                    icon: (
                      <Twitter size={20} fill="currentColor" stroke="none" />
                    ),
                    to: "/",
                  },
                  { icon: <Instagram size={20} />, to: "/" },
                  {
                    icon: (
                      <Linkedin size={20} fill="currentColor" stroke="none" />
                    ),
                    to: "/",
                  },
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.2, color: "#ea580c" }}
                    className="text-gray-400 cursor-pointer"
                  >
                    <Link to={social.to}>{social.icon}</Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
