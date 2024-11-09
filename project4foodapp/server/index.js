// require("dotenv").config();
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

const PORT = process.env.PORT || 6000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Manually define __filename and __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public/images' folder
app.use("/images", express.static(path.join(__dirname, "./public/images")));

const foodData = [
  {
    name: "Margherita Pizza",
    text: "Classic cheese pizza with fresh mozzarella and tomato sauce.",
    price: 747.61,
    img: "/images/margherita.png",
    category: "Pizza",
    type: "Lunch",
  },
  {
    name: "Pepperoni Pizza",
    text: "A delicious pizza topped with spicy pepperoni and melted cheese.",
    price: 913.93,
    img: "/images/pepperoni.png",
    category: "Pizza",
    type: "Dinner",
  },
  {
    name: "Caesar Salad",
    text: "Crispy romaine lettuce with parmesan, croutons, and Caesar dressing.",
    price: 622.87,
    img: "/images/caesar-salad.png",
    category: "Salad",
    type: "Lunch",
  },
  {
    name: "Grilled Chicken Sandwich",
    text: "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
    price: 789.19,
    img: "/images/grilled-chicken.png",
    category: "Sandwich",
    type: "Lunch",
  },
  {
    name: "Beef Burger",
    text: "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles.",
    price: 955.51,
    img: "/images/beef-burger.png",
    category: "Burger",
    type: "Dinner",
  },
  {
    name: "Spaghetti Carbonara",
    text: "Traditional Italian pasta with eggs, parmesan, pancetta, and pepper.",
    price: 1080.25,
    img: "/images/spaghetti-carbonara.png",
    category: "Pasta",
    type: "Dinner",
  },
  {
    name: "Chocolate Cake",
    text: "Decadent chocolate cake with a rich chocolate ganache topping.",
    price: 498.13,
    img: "/images/chocolate-cake.png",
    category: "Dessert",
    type: "Dinner",
  },
  {
    name: "Grilled Salmon",
    text: "Perfectly grilled salmon fillet served with lemon butter sauce.",
    price: 1329.73,
    img: "/images/grilled-salmon.png",
    category: "Seafood",
    type: "Dinner",
  },
  {
    name: "French Fries",
    text: "Crispy golden fries with a side of ketchup or mayo.",
    price: 290.23,
    img: "/images/french-fries.png",
    category: "Sides",
    type: "Lunch",
  },
];
app.get("/", (req, res) => {
  console.log(path.join(__dirname, "./public"));
  res.json(foodData);
});

app.get("/food", (req, res) => {
  res.send(foodData);
});

app.get("/api/foodJSON", (req, res) => {
  console.log(path.join(__dirname, "./public"));
  res.json(foodData);
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
