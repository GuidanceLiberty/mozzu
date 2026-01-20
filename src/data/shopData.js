import Shop1 from "@/assets/img/inner/shop-grid1.jpg"
import Shop2 from "@/assets/img/inner/shop-grid2.jpg"
import Shop3 from "@/assets/img/inner/shop-grid3.jpg"
import Shop4 from "@/assets/img/inner/shop-grid4.jpg"
import Shop5 from "@/assets/img/inner/shop-grid5.jpg"
import Shop6 from "@/assets/img/inner/shop-grid6.jpg"
import Shop7 from "@/assets/img/inner/shop-grid10.jpg"
import Shop8 from "@/assets/img/inner/shop-grid11.jpg"
import Shop9 from "@/assets/img/inner/shop-grid12.jpg"


//Popular item Menu
import GrilledPlatter from "@/assets/img/inner/shop-grilled1.jpg"
import EggstasyOmelet from "@/assets/img/inner/shop-grilled2.jpg"
import ScrambleShineFood from "@/assets/img/inner/shop-grilled3.jpg"

import LeftImg from "@/assets/img/inner-global-left.png"
import RightImg from "@/assets/img/inner-global-chess.png"


// Add these standard fields so they appear on the Detail Page automatically
const detailDefaults = {
    mode: "Availability:",
    status: "In Stock",
    longDescription: "Indulge in our chef's special creation, prepared with the freshest ingredients and seasoned to perfection for a truly delightful culinary experience."
};

export const shopPage = [
    {
        id: 1,
        image: Shop1,
        name: "Smoky Stack Burger",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "beef patty with melted cheese and smoky BBQ sauce in every bite.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 2,
        image: Shop2,
        name: "Creamy Alfredo Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Overflowing with molten cheese, crispy lettuce, and grilled chicken.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 3,
        image: Shop3,
        name: "Tasty Chicken Salad",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Perfect for spice lovers — loaded with hot jalapeños and spicy sauce.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Flat 15% Off",
        ...detailDefaults
    },
    {
        id: 4,
        image: Shop4,
        name: "Desert Delicia's",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Crispy on the outside, tender on the inside with fresh veggies and mayo.",
        oldPrice: "$23.00",
        newPrice: "$91.50",
        offer: "Flat 15% Off",
        ...detailDefaults
    },
    {
        id: 5,
        image: Shop5,
        name: "Spicy Fire Burger",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Rich and velvety Alfredo sauce tossed with perfectly cooked fettuccine.",
        oldPrice: "$23.00",
        newPrice: "$24.50",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 6,
        image: Shop6,
        name: "Crispy Chicken Wings",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Savor the perfect combo of a juicy burger paired with creamy.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Flat 15% Off",
        ...detailDefaults
    },
    {
        id: 7,
        image: Shop7,
        name: "Spicy Arrabbiata Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Savor the perfect combo of a juicy burger paired with creamy.",
        oldPrice: "$23.00",
        newPrice: "$46.50",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 8,
        image: Shop8,
        name: "Chicken Mushroom Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Overflowing with molten cheese, crispy lettuce, and grilled chicken.",
        oldPrice: "$23.00",
        newPrice: "$70.00",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 9,
        image: Shop9,
        name: "Burger With Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Perfect for spice lovers — loaded with hot jalapeños and spicy sauce.",
        oldPrice: "$23.00",
        newPrice: "$98.50",
        offer: "Flat 15% Off",
        ...detailDefaults
    },
    {
        id: 10,
        image: Shop7,
        name: "Spicy Arrabbiata Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Savor the perfect combo of a juicy burger paired with creamy.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 11,
        image: Shop8,
        name: "Chicken Mushroom Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Overflowing with molten cheese, crispy lettuce, and grilled chicken.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Sale",
        ...detailDefaults
    },
    {
        id: 12,
        image: Shop9,
        name: "Burger With Pasta",
        ratings: "4.8 (32)",
        time: "20-30 mins",
        description: "Perfect for spice lovers — loaded with hot jalapeños and spicy sauce.",
        oldPrice: "$23.00",
        newPrice: "$16.50",
        offer: "Flat 15% Off",
        ...detailDefaults
    },
];

// Popular Items & Decorations
export const extraContent = {
    decorations: {
        left: LeftImg,
        right: RightImg
    },
    popularItems: [
        { id: 13, image: GrilledPlatter, name: "Grilled Platter", price: "$19.00" },
        { id: 14, image: EggstasyOmelet, name: "Eggstasy Omelet", price: "$10.00" },
        { id: 15, image: ScrambleShineFood, name: "Scramble Shine Food", price: "$980.00" }
    ]
};



