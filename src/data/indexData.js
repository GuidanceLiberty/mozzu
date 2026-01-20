// Category Images
import burgerImg from "@/assets/img/home-1/menu-l1.png";
import pastaImg from "@/assets/img/home-1/menu-l2.png";
import saladImg from "@/assets/img/home-1/menu-l3.png";
import pizzaImg from "@/assets/img/home-1/menu-l4.png";
import sandwichImg from "@/assets/img/home-1/menu-l5.png";
import friedRiceImg from "@/assets/img/home-1/menu-l6.png";

// Discount Images
import TextPrice1 from "@/assets/img/home-1/text-price11.png";
import TextPrice2 from "@/assets/img/home-1/text-price12.png";
import TextPrice3 from "@/assets/img/home-1/text-price15.png";
import TangoBruger from "@/assets/img/home-1/offer-bg1.jpg";
import CreamyPasta from "@/assets/img/home-1/offer-bg2.jpg";
import CheesyPizza from "@/assets/img/home-1/offer-bg3.png";
import OfferBurger from "@/assets/img/home-1/offer-burger.png";

// Most Visited Restaurant Images
import Restaurant1 from "@/assets/img/home-1/restaurant-thumb1.jpg";
import Restaurant2 from "@/assets/img/home-1/restaurant-thumb2.jpg";
import Restaurant3 from "@/assets/img/home-1/restaurant-thumb3.jpg";
import Restaurant4 from "@/assets/img/home-1/restaurant-thumb4.jpg";

// Supper Deal Image
import Superdeal1 from "@/assets/img/home-1/super-deals1.jpg";
import Superdeal2 from "@/assets/img/home-1/super-deals2.jpg";
import Superdeal3 from "@/assets/img/home-1/super-deals3.jpg";
import Superdeal4 from "@/assets/img/home-1/super-deals4.jpg";

// Order Steps Images
import Orderbg from "@/assets/img/home-1/order-ele1.png";
import OrderIcon1 from "@/assets/img/icons/order-icon1.png";
import OrderIcon2 from "@/assets/img/icons/order-icon2.png";
import OrderIcon3 from "@/assets/img/icons/order-icon3.png";

// Restaurant near images
import Near1 from "@/assets/img/home-1/near1.jpg";
import Near2 from "@/assets/img/home-1/near2.jpg";
import Near3 from "@/assets/img/home-1/near3.jpg";
import Near4 from "@/assets/img/home-1/near4.jpg";
import Near5 from "@/assets/img/home-1/near5.jpg";
import Near6 from "@/assets/img/home-1/near6.jpg";

// Big Burger Cheese
import BigBurgerBg from "@/assets/img/home-1/big-burger-bg.jpg";
import BigBurger from "@/assets/img/home-1/big-burger.png";
import PriceBurger from "@/assets/img/home-1/price-bik-burger.png";

// Most Popular Items
import Popular1 from "@/assets/img/home-1/popular-items1.jpg";
import Popular2 from "@/assets/img/home-1/popular-items2.jpg";
import Popular3 from "@/assets/img/home-1/popular-items3.jpg";
import Popular4 from "@/assets/img/home-1/popular-items4.jpg";
import Popular5 from "@/assets/img/home-1/popular-items5.jpg";
import Popular6 from "@/assets/img/home-1/popular-items6.jpg";
import PopularImg from "@/assets/img/home-1/popular-price.jpg";
import PopularPriceBadge from "@/assets/img/home-1/price-badge-black.png";

// Download the app images
import AppBgImg from "@/assets/img/apps-bg.jpg";
import Apps from "@/assets/img/apps.png";
import GooglePlay from "@/assets/img/google.png";
import AppStore from "@/assets/img/app-store.png";
import FreshBeef from "@/assets/img/fresh-beef.png";

// Testimonial Images
import BigClient from "@/assets/img/client-admin1.jpg";
import MiniAdmin from "@/assets/img/admin1.jpg";
import Quote from "@/assets/img/quote.png";
import Liked from "@/assets/img/satisfied-like.png";
import Flower from "@/assets/img/flow-theme3.png";

// Latest blog posts Images
import Blog1 from "@/assets/img/home-1/blog1.png"
import Blog2 from "@/assets/img/home-1/blog2.jpg"
import Blog3 from "@/assets/img/home-1/blog3.jpg"

// Become a Partner
import Partner1 from "@/assets/img/home-1/partner-thum1.png"
import Partner2 from "@/assets/img/home-1/partner-thum2.png"




const categories = [
  { name: "Burger", img: burgerImg },
  { name: "Pasta", img: pastaImg },
  { name: "Salad", img: saladImg },
  { name: "Pizza", img: pizzaImg },
  { name: "Sandwich", img: sandwichImg },
  { name: "Fried Rice", img: friedRiceImg },
];

const discounts = [
  {
    name: "TANGO BURGER",
    bgImg: TangoBruger,
    priceImg: TextPrice1,
    productImg: OfferBurger,
    discount: "10% Off: FEASTA10",
  },
  {
    name: "CREAMY PASTA",
    bgImg: CreamyPasta,
    priceImg: TextPrice2,
    discount: "15% Off: BOGO-Mojo",
  },
  {
    name: "CHEESY PIZZA!",
    bgImg: CheesyPizza,
    priceImg: TextPrice3,
    priceImg2: TextPrice3,
    discount: "12% Off: FRIE12",
  },
];

const restaurants = [
  {
    name: "Burger Express",
    rgImg: Restaurant1,
    food: "Chiken, Rice",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-45 mins",
  },
  {
    name: "north Wind Restaurant",
    rgImg: Restaurant2,
    food: "Chiken, Rice",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-45 mins",
  },
  {
    name: "KFG Cafe Shop",
    rgImg: Restaurant3,
    food: "Chiken, Rice",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-45 mins",
  },
  {
    name: "Food Station99",
    rgImg: Restaurant4,
    food: "Chiken, Rice",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-45 mins",
  },
];

const superdeal = [
  {
    name: "The BBQ Chicken Burger",
    spImg: Superdeal1,
    food: "Rice, Chicken",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-30 mins",
    badges: ["Buy 1 Get 2", "Flat 10% Off"],
  },
  {
    name: "Oven Baked Pasta",
    spImg: Superdeal2,
    food: "Rice, Chicken",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-30 mins",
    badges: ["BOGO", "Flat 15% Off"],
  },
  {
    name: "Cheshunt Salad",
    spImg: Superdeal3,
    food: "Rice, Chicken",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-30 mins",
    badges: ["BOGOBuy 1 Get 2", "Flat 15% Off"],
  },
  {
    name: "Smoky Sandwich",
    spImg: Superdeal4,
    food: "Rice, Chicken",
    address: "6391 Elgin St. Celina",
    ratings: "4.8 (32)",
    time: "20-30 mins",
    badges: ["BOGO", "Flat 15% Off"],
  },
];

const ordersteps = [
  {
    ordBg: Orderbg,
  },
  {
    name: "Choose your Product",
    icon: OrderIcon1,
    text: "dolor sit amet consecte Massa areestery sit commodo convallis auctor aliquet ready moderns areaworks",
  },
  {
    name: "Make your Order",
    icon: OrderIcon2,
    text: "dolor sit amet consecte Massa areestery sit commodo convallis auctor aliquet ready moderns areaworks",
  },
  {
    name: "Food is on the way",
    icon: OrderIcon3,
    text: "dolor sit amet consecte Massa areestery sit commodo convallis auctor aliquet ready moderns areaworks",
  },
];

const restaurantnear = [
  {
    city: "California",
    nearImg: Near1,
    number: "25",
  },
  {
    city: "Indonesia",
    nearImg: Near2,
    number: "25",
  },
  {
    city: "Thailand",
    nearImg: Near3,
    number: "25",
  },
  {
    city: "Bangkok",
    nearImg: Near4,
    number: "25",
  },
  {
    city: "Chiang Mai",
    nearImg: Near5,
    number: "25",
  },
  {
    city: "Phuket",
    nearImg: Near6,
    number: "25",
  },
];

const bigburgerchees = [
  {
    bugerBg: BigBurgerBg,
    name: "Big Burger Cheese",
    bigBurImg: BigBurger,
    bigBurPrice: PriceBurger,
  },
];

const popularitems = [
  {
    name: "Breakfast Grilled Platter",
    popularImg: Popular1,
    text: "Consists of grilled grilled mushroom, fried egg...",
    price: "$15.00",
  },
  {
    name: "Appetizer",
    popularImg: Popular2,
    text: "Consists of grilled grilled mushroom, fried egg...",
    price: "$19.00",
  },
  {
    name: "Chicken Somucha",
    popularImg: Popular3,
    text: "Consists of grilled grilled mushroom, fried egg...",
    price: "$11.00",
  },
  {
    name: "Peri Peri Pasta",
    popularImg: Popular4,
    text: "Consists of grilled grilled mushroom, fried egg...",
    price: "$11.00",
  },
  {
    name: "Hot Chocolate Coffee",
    popularImg: Popular5,
    text: "Consists of grilled grilled mushroom, fried egg...",
    price: "$11.00",
  },
  {
    name: "Mixed Fruits Salad",
    popularImg: Popular6,
    text: "Consists of grilled grilled mushroom, fried egg...",
    price: "$11.00",
  },
  {
    rightImg: PopularImg,
    priceBadgeImg: PopularPriceBadge,
  },
];

const downloadapp = [
  {
    appBg: AppBgImg,
    appscreenImg: Apps,
    googleImg: GooglePlay,
    appleImg: AppStore,
    beefImg: FreshBeef,
  },
];

const testimonial = [
  {
    rightflowerImg: Flower,
    biglientImg: BigClient,
    smalladminImg: MiniAdmin,
    likeImg: Liked,
    quoteImg: Quote,
    heading: "Great Product! Highly Recommended",
    text: "Great Quality Product WitheryGood awrPakaging unknown printer took a galle rambled it make pecimive centuries Delicious Food Context",
    name: "Annette Black",
    title: "Sr.Designer",
    testimonytext: "Satisfied Clients",
    percent: "98%",
  },
  {
    rightflowerImg: Flower,
    biglientImg: BigClient,
    smalladminImg: MiniAdmin,
    likeImg: Liked,
    quoteImg: Quote,
    heading: "Great Product! Highly Recommended",
    text: "Great Quality Product WitheryGood awrPakaging unknown printer took a galle rambled it make pecimive centuries Delicious Food Context",
    name: "Annette Black",
    title: "Sr.Designer",
    testimonytext: "Satisfied Clients",
    percent: "98%",
  },
  {
    rightflowerImg: Flower,
    biglientImg: BigClient,
    smalladminImg: MiniAdmin,
    likeImg: Liked,
    quoteImg: Quote,
    heading: "Great Product! Highly Recommended",
    text: "Great Quality Product WitheryGood awrPakaging unknown printer took a galle rambled it make pecimive centuries Delicious Food Context",
    name: "Annette Black",
    title: "Sr.Designer",
    testimonytext: "Satisfied Clients",
    percent: "98%",
  },
];

const blockpost = [
  {
    blogImg: Blog1,
    date: "25 May, 2025/Food",
    title: "Chef’s specialty Food for personal and all staff"
  },
  {
    blogImg: Blog2,
    date: "25 May, 2025/Food",
    title: "Marinate chicken Mango achiote, a Yucatecan"
  },
  {
    blogImg: Blog3,
    date: "25 May, 2025/Food",
    title: "Preparation the best of vegetables, and starches"
  },
];

const becomepartner = [
  {
    partnerImg: Partner1,
    title: "List Your Restaurant",
    text: "dolor sitmet consecte Massa areestery sit commodo convallis auctor."
  },
   {
    partnerImg: Partner2,
    title: "Become a food Hero!",
    text: "dolor sitmet consecte Massa areestery sit commodo convallis auctor."
  },
];

export {
  categories,
  discounts,
  restaurants,
  superdeal,
  ordersteps,
  restaurantnear,
  bigburgerchees,
  popularitems,
  downloadapp,
  testimonial,
  blockpost,
  becomepartner,
};
