const Pizza = require('../models/pizzaModel');
const connectDB = require('../config/db');
require('dotenv').config();

const pizzas = [
  {
    name: "Margherita Classic",
    description: "Fresh tomato sauce, mozzarella, and basil",
    price: 200,
    image: "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"
  },
  {
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni, mozzarella, and tomato sauce",
    price: 350,
    image: "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg"
  },
  {
    name: "Vegetarian Delight",
    description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
    price: 300,
    image: "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg"
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: 400,
    image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, and extra mozzarella",
    price: 350,
    image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-03/Easiest-Pizza_22-2_11.jpg?itok=MD7gO9Kp"
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, and ground beef",
    price: 450,
    image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY="
  },
  {
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken, ranch, and blue cheese",
    price: 400,
    image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740"
  },
  {
    name: "Mediterranean",
    description: "Feta, olives, sun-dried tomatoes, and spinach",
    price: 350,
    image: "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800"
  },
  {
    name: "Supreme",
    description: "Pepperoni, sausage, mushrooms, onions, and peppers",
    price: 450,
    image: "https://www.butterbeready.com/wp-content/uploads/2022/05/DK6A0086.jpg"
  },
  {
    name: "White Pizza",
    description: "Ricotta, mozzarella, garlic, and olive oil base",
    price: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s"
  },
  {
    name: "Mushroom Truffle",
    description: "Assorted mushrooms, truffle oil, and fresh herbs",
    price: 800,
    image: "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg"
  },
  {
    name: "Spicy Italian",
    description: "Spicy salami, hot peppers, and red pepper flakes",
    price: 400,
    image: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800"
  },
  {
    name: "Four Cheese",
    description: "Mozzarella, parmesan, gorgonzola, and ricotta",
    price: 350,
    image: "https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY="
  },
  {
    name: "Pesto Paradise",
    description: "Basil pesto base, chicken, tomatoes, and pine nuts",
    price: 400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgloVERxKxPVskrUH85JxKhHfPEJOPlTH8Fw&s"
  },
  {
    name: "Seafood Special",
    description: "Shrimp, calamari, mussels, and garlic",
    price: 1000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUU8vqKEt109YZyLyfGDeDxpF586Pm956Ilw&s"
  },
  {
    name: "Garden Fresh",
    description: "Zucchini, broccoli, carrots, and fresh herbs",
    price: 300,
    image: "https://i.ytimg.com/vi/g79YVb0Exx8/maxresdefault.jpg"
  },
  {
    name: "Bacon Mac",
    description: "Mac and cheese with crispy bacon bits",
    price: 450,
    image: "https://therecipecritic.com/wp-content/uploads/2019/08/skillet-pizza-4.jpg"
  },
  {
    name: "Fig and Prosciutto",
    description: "Fresh figs, prosciutto, arugula, and balsamic glaze",
    price: 800,
    image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
  },
  {
    name: "Taco Pizza",
    description: "Ground beef, lettuce, tomatoes, and Mexican spices",
    price: 400,
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/09/sheet-pan-pizza.jpg"
  },
  {
    name: "Greek",
    description: "Kalamata olives, feta, red onions, and oregano",
    price: 350,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow_xyh3R855qA5qPVCk7Tp7xXHLhdJQL3ww&s"
  },
  {
    name: "Chicken Alfredo",
    description: "Creamy alfredo sauce, grilled chicken, and spinach",
    price: 400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTog4ACm0vIRHdmml_FgepznxIz9arjHXx4gA&s"
  },
  {
    name: "Eggplant Parm",
    description: "Breaded eggplant, marinara, and fresh basil",
    price: 350,
    image: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800"
  },
  {
    name: "Philly Cheese Steak",
    description: "Sliced beef, peppers, onions, and cheese sauce",
    price: 450,
    image: "https://theclevermeal.com/wp-content/uploads/2021/04/pizza-with-peppers_1.jpg"
  },
  {
    name: "Artichoke Spinach",
    description: "Artichoke hearts, spinach, and cream sauce",
    price: 400,
    image: "https://images.ctfassets.net/721r5zsckzl2/3XlWVQrAlRXHZ2iNhXselx/96787319fcc962e4f30a36e582dca61b/PPZdoppio.jpg"
  },
  {
    name: "Breakfast Pizza",
    description: "Eggs, bacon, cheese, and hash browns",
    price: 350,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznB8u9w2FmPVkV7Sqh9P-j834F57EnaREeQ&s"
  },
  {
    name: "Tandoori Chicken",
    description: "Indian-spiced chicken, onions, and cilantro",
    price: 400,
    image: "https://www.seriouseats.com/thmb/G2rcQcOg0gKjrWzBcE4OW2xqpxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20211115-OONI-PIZZA-NDUJA-ANDREW-JANJIGIAN-32-cdd758783bc241a3b13046f2b978333d.jpg"
  },
  {
    name: "Wild Mushroom",
    description: "Portobello, shiitake, and button mushrooms",
    price: 400,
    image: "https://storage.googleapis.com/phx2-uat-wordpress-uploads/1/2025/02/Large-Pizza-3-Drinks.jpg?cache_key=179"
  },
  {
    name: "Dessert Pizza",
    description: "Nutella, banana, strawberries, and powdered sugar",
    price: 300,
    image: "https://www.seriouseats.com/thmb/G2rcQcOg0gKjrWzBcE4OW2xqpxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20211115-OONI-PIZZA-NDUJA-ANDREW-JANJIGIAN-32-cdd758783bc241a3b13046f2b978333d.jpg"
  },
  {
    name: "Farmers Market",
    description: "Seasonal vegetables and fresh herbs",
    price: 350,
    image: "https://www.recipetineats.com/tachyon/2024/05/Pizza-Capricciosa_8.jpg"
  },
  {
    name: "Ranch Chicken",
    description: "Ranch sauce, chicken, bacon, and tomatoes",
    price: 400,
    image: "https://www.seriouseats.com/thmb/c9291mRIx6n1mtaxIRuypUe4mhs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg"
  }
];

const seedPizzas = async () => {
  try {
    // Connect to database
    await connectDB();

    // Check current number of pizzas
    const pizzaCount = await Pizza.countDocuments();
    console.log(`Current pizza count in database: ${pizzaCount}`);

    if (pizzaCount < 10) {
      // Clear existing entries
      await Pizza.deleteMany({});

      // Insert new pizzas
      await Pizza.insertMany(pizzas);

      console.log('Pizza database seeded successfully!');
    } else {
      console.log('Database already has sufficient pizza entries.');
    }

    // Close database connection
    // await mongoose.connection.close();

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

module.exports = { seedPizzas };
