import img1 from "./product_1.png";
import img2_1 from "./product_2_1.png";
import img3 from "./product_3.png";
import img4 from "./product_4.png";
import img5 from "./product_5.png";
import img6 from "./product_6.png";
import img7 from "./product_7.png";
import img8_1 from "./product_8_1.png";
import img9 from "./product_9.png";
import img10 from "./product_10.png";
import img11 from "./product_11.png";
import img12 from "./product_12.png";
import img13 from "./product_13.png";
import img14 from "./product_14.png";
import img15 from "./product_15.png";
import img16 from "./product_16.png";
import img17 from "./product_17.png";
import img18 from "./product_18.png";
import img19 from "./product_19.png";
import img20 from "./product_20.png";
import img21 from "./product_21.png";
import img22 from "./product_22.png";
import img23 from "./product_23.png";
import img24 from "./product_24.png";
import img25 from "./product_25.png";
import img26 from "./product_26.png";
import img27 from "./product_27.png";
import img28 from "./product_28.png";
import img29 from "./product_29.png";
import img30 from "./product_30.png";
import img31 from "./product_31.png";
import img32 from "./product_32.png";
import img33 from "./product_33.png";
import img34 from "./product_34.png";
import img35 from "./product_35.png";
import img36 from "./product_36.png";
import img37 from "./product_37.png";
import img38 from "./product_38.png";
import img39 from "./product_39.png";
import img40 from "./product_40.png";
import img41 from "./product_41.png";
import img42 from "./product_42.png";

// Blogs
import blog1 from "../assets/blogs/blog-1.png";
import blog2 from "../assets/blogs/blog-2.png";
import blog3 from "../assets/blogs/blog-3.png";
import blog4 from "../assets/blogs/blog-4.png";
import blog5 from "../assets/blogs/blog-5.png";
import blog6 from "../assets/blogs/blog-6.png";
import blog7 from "../assets/blogs/blog-7.png";
import blog8 from "../assets/blogs/blog-8.png";

import { AiFillStar } from "react-icons/ai";

export const products = [
  // Headphones (ID 1 to 7)
  {
    id: "1",
    name: "Bluetooth Headset Pro",
    star: 4.5,
    price: "140.00",
    image: img1,
    category: "Headphones",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "2",
    name: "Noise Cancelling Headphones",
    star: 4.5,
    price: "140.00",
    image: img2_1,
    category: "Headphones",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "3",
    name: "Over-Ear Wireless Headphones",
    star: 4.5,
    price: "140.00",
    image: img3,
    category: "Headphones",
    colors: ["Black", "White", "Blue"],
    popular: true,
  },
  {
    id: "4",
    name: "Wireless Noise Cancelling Headphones",
    star: 4.5,
    price: "140.00",
    image: img4,
    category: "Headphones",
    colors: ["Black", "Red", "Blue"],
    popular: false,
  },
  {
    id: "5",
    name: "Gaming Headphones with Mic",
    star: 4.5,
    price: "140.00",
    image: img5,
    category: "Headphones",
    colors: ["Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "6",
    name: "Sports Bluetooth Earphones",
    star: 4.5,
    price: "140.00",
    image: img6,
    category: "Headphones",
    colors: ["XS", "Black", "Red"],
    popular: false,
  },
  {
    id: "7",
    name: "Foldable Wireless Headphones",
    star: 4.5,
    price: "140.00",
    image: img7,
    category: "Headphones",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },

  // Cameras (ID 8 to 14)
  {
    id: "8",
    name: "Digital Camera Pro",
    star: 4.5,
    price: "140.00",
    image: img8_1,
    category: "Cameras",
    colors: ["Black", "Red"],
    popular: false,
  },
  {
    id: "9",
    name: "4K DSLR Camera",
    star: 4.5,
    price: "140.00",
    image: img9,
    category: "Cameras",
    colors: ["Black", "Red"],
    popular: false,
  },
  {
    id: "10",
    name: "Compact Digital Camera",
    star: 4.5,
    price: "140.00",
    image: img10,
    category: "Cameras",
    colors: ["Black", "Red"],
    popular: false,
  },
  {
    id: "11",
    name: "Outdoor Action Camera",
    star: 4.5,
    price: "140.00",
    image: img11,
    category: "Cameras",
    colors: ["Red", "Red"],
    popular: false,
  },
  {
    id: "12",
    name: "Professional Mirrorless Camera",
    star: 4.5,
    price: "140.00",
    image: img12,
    category: "Cameras",
    colors: ["Black", "Red"],
    popular: true,
  },
  {
    id: "13",
    name: "Camera Lens Kit",
    star: 4.5,
    price: "140.00",
    image: img13,
    category: "Cameras",
    colors: ["Black", "Red"],
    popular: false,
  },
  {
    id: "14",
    name: "Camera Tripod Stand",
    star: 4.5,
    price: "140.00",
    image: img14,
    category: "Cameras",
    colors: ["Black", "Red"],
    popular: false,
  },

  // Mobiles (ID 15 to 21)
  {
    id: "15",
    name: "Camera Flash Light",
    star: 4.5,
    price: "140.00",
    image: img15,
    category: "Mobiles",
    colors: ["XS", "Black", "Red"],
    popular: true,
  },
  {
    id: "16",
    name: "5G Tecno Mobile",
    star: 4.5,
    price: "140.00",
    image: img16,
    category: "Mobiles",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "17",
    name: "Smartphone Camera Lens Kit",
    star: 4.5,
    price: "140.00",
    image: img17,
    category: "Mobiles",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "18",
    name: "Mobile Phone 4G",
    star: 4.5,
    price: "140.00",
    image: img18,
    category: "Mobiles",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "19",
    name: "5G Smartphone",
    star: 4.5,
    price: "140.00",
    image: img19,
    category: "Mobiles",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "20",
    name: "Mobile Phone Case",
    star: 4.5,
    price: "140.00",
    image: img20,
    category: "Mobiles",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "21",
    name: "Mobile Charger",
    star: 4.5,
    price: "140.00",
    image: img21,
    category: "Mobiles",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },

  // Speakers (ID 22 to 28)
  {
    id: "22",
    name: "Smartwatch Phone",
    star: 4.5,
    price: "140.00",
    image: img22,
    category: "Speakers",
    colors: ["Red", "White", "Blue"],
    popular: true,
  },
  {
    id: "23",
    name: "Bluetooth Mobile Speaker",
    star: 4.5,
    price: "140.00",
    image: img23,
    category: "Speakers",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "24",
    name: "Portable Bluetooth Speaker",
    star: 4.5,
    price: "140.00",
    image: img24,
    category: "Speakers",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "25",
    name: "Smart Bluetooth Speaker",
    star: 4.5,
    price: "140.00",
    image: img25,
    category: "Speakers",
    colors: ["Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "26",
    name: "Portable Mini Bluetooth Speaker",
    star: 4.5,
    price: "140.00",
    image: img26,
    category: "Speakers",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "27",
    name: "Wireless Home Speaker",
    star: 4.5,
    price: "140.00",
    image: img27,
    category: "Speakers",
    colors: ["Black", "White"],
    popular: true,
  },
  {
    id: "28",
    name: "Surround Sound Speaker",
    star: 4.5,
    price: "140.00",
    image: img28,
    category: "Speakers",
    colors: ["Black", "Red", "White"],
    popular: false,
  },

  // Mouses (ID 29 to 35)
  {
    id: "29",
    name: "Wireless Gaming Mouse",
    star: 4.5,
    price: "140.00",
    image: img29,
    category: "Mouse",
    colors: ["Black", "Red", "White", "Blue"],
    popular: true,
  },
  {
    id: "30",
    name: "Ergonomic Wireless Mouse",
    star: 4.5,
    price: "140.00",
    image: img30,
    category: "Mouse",
    colors: ["Black", "Red", "Blue"],
    popular: false,
  },
  {
    id: "31",
    name: "RGB Gaming Mouse",
    star: 4.5,
    price: "140.00",
    image: img31,
    category: "Mouse",
    colors: ["Black", "Red", "White", "Blue"],
    popular: true,
  },
  {
    id: "32",
    name: "Wireless Mouse with USB Receiver",
    star: 4.5,
    price: "140.00",
    image: img32,
    category: "Mouse",
    colors: ["Black", "Red", "White"],
    popular: false,
  },
  {
    id: "33",
    name: "Bluetooth Multi-Device Mouse",
    star: 4.5,
    price: "140.00",
    image: img33,
    category: "Mouse",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "34",
    name: "Compact Wireless Mouse",
    star: 4.5,
    price: "140.00",
    image: img34,
    category: "Mouse",
    colors: ["Black", "Red", "Blue"],
    popular: false,
  },
  {
    id: "35",
    name: "Gaming Mouse with Customizable Weights",
    star: 4.5,
    price: "140.00",
    image: img35,
    category: "Mouse",
    colors: ["Black", "Red", "White", "Blue"],
    popular: true,
  },

  // Watches (ID 36 to 42)
  {
    id: "36",
    name: "Smart Fitness Watch",
    star: 4.5,
    price: "140.00",
    image: img36,
    category: "Watches",
    colors: ["Black", "Red", "White", "Blue"],
    popular: true,
  },
  {
    id: "37",
    name: "Luxury Smartwatch",
    star: 4.5,
    price: "140.00",
    image: img37,
    category: "Watches",
    colors: ["Gold", "Silver", "Black"],
    popular: false,
  },
  {
    id: "38",
    name: "Sports Smartwatch",
    star: 4.5,
    price: "140.00",
    image: img38,
    category: "Watches",
    colors: ["Red", "Blue", "Black"],
    popular: false,
  },
  {
    id: "39",
    name: "Android Smartwatch",
    star: 4.5,
    price: "140.00",
    image: img39,
    category: "Watches",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "40",
    name: "Round Dial Smartwatch",
    star: 4.5,
    price: "140.00",
    image: img40,
    category: "Watches",
    colors: ["Gold", "Silver", "Black", "White"],
    popular: false,
  },
  {
    id: "41",
    name: "Smartwatch with Heart Rate Monitor",
    star: 4.5,
    price: "140.00",
    image: img41,
    category: "Watches",
    colors: ["Black", "Red", "White", "Blue"],
    popular: false,
  },
  {
    id: "42",
    name: "Smartwatch for Kids",
    star: 4.5,
    price: "140.00",
    image: img42,
    category: "Watches",
    colors: ["Pink", "Blue", "Red"],
    popular: false,
  },
];

export const blogs = [
  {
    title: "Top Shopping Tips for Smart Buyers",
    category: "Cameras",
    image: blog1,
  },
  {
    title: "Latest Trends in Online Shopping 2024",
    category: "Mobiles",
    image: blog2,
  },
  {
    title: "How to Spot the Best Online Deals",
    category: "Mobiles",
    image: blog3,
  },
  {
    title: "Why E-Commerce is the Future",
    category: "Headphones",
    image: blog4,
  },
  {
    title: "Smart Buying Tips for Online Shoppers",
    category: "Cameras",
    image: blog5,
  },
  {
    title: "Upcoming Trends in Shopping 2024",
    category: "Mobiles",
    image: blog6,
  },
  {
    title: "Best Strategies to Find Online Discounts",
    category: "Mobiles",
    image: blog7,
  },
  { title: "How E-Commerce is Changing", category: "Headphones", image: blog8 },
];
