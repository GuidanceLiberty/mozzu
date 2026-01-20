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
  fourthBlogData,
  mainBlogData,
  middleBlogData,
  popularTags,
  recentPosts,
  thirdBlogData,
} from "@/data/blogStandard";

const BlogStandard = () => {
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
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= MAIN NAVBAR SECTION ================= */}
      <motion.section
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0  left-0 z-50 bg-orange-600 shadow-2xl border-b border-white/5"
      >
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
            Blog Single
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
            <span className="opacity-80">Blog Single</span>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG STANDARD ================= */}
      <section className="bg-white py-10 md:py-24 relative w-full overflow-x-hidden">
        {/* STABLE FLOATING IMAGE: Enhanced with rotation */}
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
              {[
                mainBlogData,
                middleBlogData,
                thirdBlogData,
                fourthBlogData,
              ].map((data, idx) => (
                <motion.article key={idx} variants={fadeInUp} className="group">
                  <div className="rounded-[40px] overflow-hidden mb-10 shadow-sm bg-gray-50 aspect-video relative">
                    <img
                      src={
                        data.bannerImg ||
                        data.middleImg ||
                        data.thirdImg ||
                        data.fourthImg
                      }
                      alt="Blog"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* If it's the video section (second one) */}
                    {data.middleImg && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-20 h-20 bg-[#FF5C00] text-white rounded-2xl flex items-center justify-center border-4 border-white/20 shadow-2xl"
                        >
                          <Play
                            fill="currentColor"
                            size={30}
                            className="ml-1"
                          />
                        </motion.button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-8 md:gap-16 mb-6 px-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={data.author.img}
                        alt="Author"
                        className="w-14 h-14 rounded-full ring-2 ring-gray-100"
                      />
                      <div>
                        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                          {data.author.role}
                        </p>
                        <h5 className="text-gray-900 font-black text-lg">
                          {data.author.name}
                        </h5>
                      </div>
                    </div>
                    <div className="relative pl-8 md:pl-16 border-l border-gray-200">
                      <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                        {data.publishedDate.label}
                      </p>
                      <h5 className="text-gray-900 font-black text-lg">
                        {data.publishedDate.date}
                      </h5>
                    </div>
                  </div>

                  <div className="px-2">
                    <h2 className="text-3xl md:text-[45px] font-black text-gray-900 mb-6 leading-tight group-hover:text-[#FF5C00] transition-colors">
                      {data.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      {data.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="bg-[#FF5C00] text-white font-bold py-4 px-10 rounded-2xl hover:bg-black transition-colors flex items-center gap-2"
                    >
                      Continue Reading
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* RIGHT SIDEBAR */}
            <aside className="lg:col-span-4 space-y-10">
              {/* Category Box */}
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

              {/* Recent Post Box */}
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

              {/* Popular Tags Box */}
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

                {/* LARGE FLOATING DISCOUNT BADGE */}
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

export default BlogStandard;
