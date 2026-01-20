import BigBlogImg from "@/assets/img/inner/blog-detail-big1.jpg";
import AuthorImg from "@/assets/img/inner/blog-author.png";
import RightFloatinImg from "@/assets/img/inner-global-pasta.png";

// Categories & Recent Posts Imports...
import Burger from "@/assets/img/inner/cate1.jpg";
import Pizza from "@/assets/img/inner/cate2.jpg";
import Combo from "@/assets/img/inner/cate3.jpg";
import Chicken from "@/assets/img/inner/cate4.jpg";
import Coffee from "@/assets/img/inner/cate5.jpg";
import Blogrecant1 from "@/assets/img/inner/blog-recent1.jpg";
import Blogrecant2 from "@/assets/img/inner/blog-recent2.jpg";
import Blogrecant3 from "@/assets/img/inner/blog-recent3.jpg";
import BlogMiddleBigImg from "@/assets/img/inner/blog-detail-big2.jpg";
import BlogThirdBigImg from "@/assets/img/inner/blog-detail-big3.png";
import BlogThirdRight from "@/assets/img/inner/details-pizza.jpg";
import PriceBadge from "@/assets/img/home-1/price-badge15.png"
import BlogFourthBigImg from "@/assets/img/inner/blog-detail-big4.jpg";






export const mainBlogData = {
  id: 1,
  bannerImg: BigBlogImg,
  floatingShape: RightFloatinImg,
  author: {
    name: "Fig Nelson",
    role: "Author",
    img: AuthorImg,
  },
  publishedDate: {
    label: "Published",
    date: "26th Sep, 2024",
  },
  title: "Healthy Eating Made Delicious – Try These Guilt Free Meals",
  description: "Eating healthy doesn’t mean sacrificing flavor. Our guilt-free meals are crafted with fresh, wholesome ingredients and bold, satisfying tastes. From grilled proteins to vibrant salads, every bite is both nourishing and delicious.",
};

export const middleBlogData = {
  id: 1,
  middleImg: BlogMiddleBigImg, 
  author: {
    name: "Fig Nelson",
    role: "Author",
    img: AuthorImg,
  },
  publishedDate: {
    label: "Published",
    date: "April 12, 2025",
  },
  title: "Culinary Team Shares Their Favorite Recipes",
  description: "With years of experience and a deep love for fresh ingredients, our chef blends tradition with creativity. Each plate reflects his dedication to flavor, quality, and presentation. Come taste the passion that makes our food unforgettable.",
};

export const thirdBlogData = {
  id: 1,
  thirdImg: BlogThirdBigImg,
  rightTop: BlogThirdRight,
  discount:  PriceBadge,
  author: {
    name: "Fig Nelson",
    role: "Author",
    img: AuthorImg,
  },
  publishedDate: {
    label: "Published",
    date: "April 12, 2025",
  },
  title: "Seasonal Specials You’ll Love This Month",
  description: "cooking brings every dish to life. With years of experience and a deep love for fresh ingredients, our chef blends tradition with creativity. Each plate reflects his dedication to flavor, quality, and presentation. Come taste the passion that makes our food unforgettable.",
};

export const fourthBlogData = {
  id: 1,
  fourthImg: BlogFourthBigImg,
  author: {
    name: "Fig Nelson",
    role: "Author",
    img: AuthorImg,
  },
  publishedDate: {
    label: "Published",
    date: "April 12, 2025",
  },
  title: "From Kitchen to Table: Our Fresh Ingredient",
  description: "whose passion for cooking brings every dish to life. With years of experience and a deep love for fresh ingredients, our chef blends tradition with creativity. Each plate reflects his dedication to flavor, quality, and presentation. Come taste the passion that makes our food unforgettable.",
};

export const categories = [
  { id: 1, name: "BURGER", img: Burger },
  { id: 2, name: "PIZZA", img: Pizza },
  { id: 3, name: "COMBO", img: Combo },
  { id: 4, name: "CHICKEN", img: Chicken },
  { id: 5, name: "COFFEE", img: Coffee },
];

export const recentPosts = [
  { id: 1, title: "Loyalty Program For Regular Customer", date: "04 Aug, 2025", img: Blogrecant1 },
  { id: 2, title: "Loyalty Program For Regular Customer", date: "04 Aug, 2025", img: Blogrecant2 },
  { id: 3, title: "Loyalty Program For Regular Customer", date: "04 Aug, 2025", img: Blogrecant3 },
];

export const popularTags = ["Fast Food", "Lunch", "Restaurant", "Dinner", "Chicken", "Burger"];