
//HERO IMAGES
import EggsBg from "@/assets/img/home-1/hero-egg.png"
import Discount from "@/assets/img/home-1/hero-price25.png"
import BurgerFlow from "@/assets/img/home-1/hero-burger-flower.png"
import Tometo from "@/assets/img/home-1/hero-burger-tometo.png"
import CheesBurger from "@/assets/img/home-1/chees-burger-hero.png"

//Categories Images
import Category1 from "@/assets/img/home-1/pp-categori1.png"
import Category2 from "@/assets/img/home-1/pp-categori2.png"
import Category3 from "@/assets/img/home-1/pp-categori3.png"
import Category4 from "@/assets/img/home-1/pp-categori4.png"
import Category5 from "@/assets/img/home-1/pp-categori5.png"
import Category6 from "@/assets/img/home-1/pp-categori6.png"
import Category7 from "@/assets/img/home-1/pp-categori7.png"
import Offer1 from "@/assets/img/home-1/offer-burger-thumb1.jpg"
import Offer2 from "@/assets/img/home-1/offer-burger-thumb2.jpg"
import Offer3 from "@/assets/img/home-1/offer-burger-thumb3.jpg"
import ComboPrice from "@/assets/img/home-1/compo-11.png"
import PastaPrice from "@/assets/img/home-1/pasta-12.png"
import PizzaPrice from "@/assets/img/home-1/price-badge15.png"

//Most Visited Restaurant
import VisitOne from "@/assets/img/home-1/visit1.jpg"
import VisitTwo from "@/assets/img/home-1/visit2.jpg"
import VisitThree from "@/assets/img/home-1/visit3.jpg"
import VisitFour from "@/assets/img/home-1/visit4.jpg"
import VisitFive from "@/assets/img/home-1/visit5.jpg"
import VisitSix from "@/assets/img/home-1/visit6.jpg"
import VisitSeven from "@/assets/img/home-1/visit7.jpg"
import VisitEight from "@/assets/img/home-1/visit8.jpg"

// Most Popular Items
import Popular1 from "@/assets/img/home-1/popular-items1.jpg";
import Popular2 from "@/assets/img/home-1/popular-items2.jpg";
import Popular3 from "@/assets/img/home-1/popular-items3.jpg";
import Popular4 from "@/assets/img/home-1/popular-items4.jpg";
import Popular5 from "@/assets/img/home-1/popular-items5.jpg";
import Popular6 from "@/assets/img/home-1/popular-items6.jpg";
import PopularImg from "@/assets/img/home-1/popular-price5.jpg";
import PopularPriceBadge from "@/assets/img/home-1/price-badge-black.png";

// Download the app images
import AppBgImg from "@/assets/img/apps-bg5.jpg";
import Apps from "@/assets/img/apps.png";
import GooglePlay from "@/assets/img/google.png";
import AppStore from "@/assets/img/app-store.png";
import FreshBeef from "@/assets/img/fresh-beef.png";


const herosection = [
    // {
    //   heading: "Explore top-rated attractions, activities and more",
    //   title: "Hot Meals, Quick Bites & Fresh Groceries",
    //   desc: "Already member or not?",
    //   sign: "Sign Up!"
    // },
    {
        eggsImg: EggsBg,
        priceImg: Discount,
        centertBugerImg: BurgerFlow,
        tometoImg: Tometo,
        leftBurger: CheesBurger

    }
];

const categories = [
    {
        categoryImg1: Category1,
        name: "Kebab",
        number: "(07)"
    },
    {
        categoryImg2: Category2,
        name: "Burger",
        number: "(12)"
    },
    {
        categoryImg3: Category3,
        name: "Pizza",
        number: "(18)"
    },
    {
        categoryImg4: Category4,
        name: "Sandwich",
        number: "(05)"
    },
    {
        categoryImg5: Category5,
        name: "Bakery",
        number: "(07)"
    },
    {
        categoryImg6: Category6,
        name: "Pasta",
        number: "(03)"
    },
    {
        categoryImg7: Category7,
        name: "Appetizers",
        number: "(02)"
    },
    {
        offerImg1: Offer1,
        comboImg: ComboPrice
    },
    {
        offerImg2: Offer2,
        pastaImg: PastaPrice,
    },
    {
        offerImg3: Offer3,
        pizzaImg: PizzaPrice,
    },

];

const visitedRestaurant = [
    {
        visitImg: VisitOne,
        name: "North-East Cafe",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitTwo,
        name: "Pizza mama",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitThree,
        name: "Crispe Fry Buket",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitFour,
        name: "Mr Bakery Shop",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitFive,
        name: "Jikkas restaurant",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitSix,
        name: "Korean Restaurantt",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitSeven,
        name: "Pizzario Pan",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

    },
    {
        visitImg: VisitEight,
        name: "Pizzario Pan",
        rating: "4.8 (32)",
        time: "20-30mins",
        location: "8502 Preston Rd. Maineey",
        hovertext1: "Temporarily unavailable",
        hovertext2: "Open at 26 May 2025, 11:00 AM"

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

export {herosection, categories, visitedRestaurant, popularitems, downloadapp}

