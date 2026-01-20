import RightMainImg from "@/assets/img/inner/team-bid.jpg";
import ShaeLeft from "@/assets/img/inner-global-left.png";
import ShaeRight from "@/assets/img/inner-global-pasta.png";

// Special Dishes
import Dish1 from "@/assets/img/inner/t-details-1.jpg";
import Dish2 from "@/assets/img/inner/t-details-2.jpg";
import Dish3 from "@/assets/img/inner/t-details-3.jpg";


export const teamDetails = {
  name: "Esther Howard",
  role: "Expert Chef",
  mainImage: RightMainImg,
  shaeLeft: ShaeLeft,
  shaeRight: ShaeRight,
  bio: "With over 15 years of culinary experience, Chef Mahmud Hasan brings passion, precision, and creativity to every plate. Trained in both European and Asian cuisine, he has worked in world-class kitchens across Bangkok, Dubai, and Paris. His signature style blends classic techniques with modern presentation, ensuring a memorable dining experience every time.",
  quote: "Cooking is not just a profession; it's an expression of love and creativity.",
  experience: "25+ YEARS EXPERIENCE",
  phone: "+123 9998 000",
  email: "example@gmail.com",
  socials: [
    { platform: "facebook", url: "#" },
    { platform: "twitter", url: "#" },
    { platform: "youtube", url: "#" },
    { platform: "linkedin", url: "#" },
  ],
  specialDishes: {
    title: "Special Dishes For Esther Howard",
    description: "Chef Mahmud believes in using only the freshest ingredients and seasonal produce. From hand-crafted sauces.",
    items: [Dish1, Dish2, Dish3]
  }
};