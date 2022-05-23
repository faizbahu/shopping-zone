const products = [
  {
    // id: 4,
    image:
      "https://furorjeans.com/media/catalog/product//i/m/img_5834-31528.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "T Shirts For Men Boys New Arrival Fashion",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    // id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "20%",
    name: "Basic Round Neck Premium T-Shirt Half Sleeve-For Men",
    price: 2345.0,
    rating: "4.5",
    countInStock: "3",
  },
  {
    // id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_3038_360x.jpg?v=1631977176",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Trending Wear Men's Round Neck T-Shirts For Men",
    price: 2584.0,
    rating: "2",
    countInStock: "0",
  },
  {
    // id: 7,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0021103901_2_cf32b4b2-b0ed-420a-8e8c-c92326c1c0dc_1024x1024.jpg?v=1636027614",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "40%",
    name: "Code Checkered Buttoned Down Casual Shirt for Men",
    price: 1500.0,
    rating: "3",
    countInStock: "3",
  },
  {
    // id: 8,
    image:
      "https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Basic Round Neck Premium T-Shirt Half Sleeve-For Men",
    price: 1834.0,
    rating: "4",
    countInStock: "3",
  },
  {
    // id: 9,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0035103305_1_1024x1024.jpg?v=1635064667",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "10%",
    name: "T Shirts For Men Boys New Arrival Fashion",
    price: 2584.0,
    rating: "3",
    countInStock: "3",
  },
  {
    // id: 10,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_3038_360x.jpg?v=1631977176",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Trending Wear Men's Round Neck T-Shirts For Men",
    price: 2331.0,
    rating: "2",
    countInStock: "3",
  },
  {
    // id: 11,
    image:
      "https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "40%",
    name: "Code Checkered Buttoned Down Casual Shirt for Men",
    price: 1345.0,
    rating: "1",
    countInStock: "3",
  },
  {
    // id: 12,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "60%",
    name: "Code Checkered Buttoned Down Casual Shirt for Men",
    price: 1322.0,
    rating: "2",
    countInStock: "3",
  },
  {
    // id: 13,
    image:
      "https://furorjeans.com/media/catalog/product//i/m/img_5834-31528.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Code Checkered Buttoned Down Casual Shirt for Men",
    price: 2584.0,
    rating: "2",
    countInStock: "3",
  },
  {
    // id: 14,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0021103901_2_cf32b4b2-b0ed-420a-8e8c-c92326c1c0dc_1024x1024.jpg?v=1636027614",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "T Shirts For Men Boys New Arrival Fashion",
    price: 1111.0,
    rating: "4.5",
    countInStock: "3",
  },
  {
    // id: 15,
    image:
      "https://furorjeans.com/media/catalog/product//i/m/img_5729-31512_4.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "10%",
    name: "Basic Round Neck Premium T-Shirt Half Sleeve-For Men",
    price: 1000.0,
    rating: "4",
    countInStock: "3",
  },
  {
    // id: 16,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0035103305_1_1024x1024.jpg?v=1635064667",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Trending Wear Men's Round Neck T-Shirts For Men",
    price: 1200.0,
    rating: "3.5",
    countInStock: "3",
  },
  {
    image: "/img/s1.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "20%",
    name: "LATEST DESIGN RUBBER SHOE FOR MEN",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    id: "2",
    image: "/img/s2.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Men's casual sports shoes breathable mesh shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    id: "3",
    image: "/img/s3.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "LATEST DESIGN RUBBER SHOE FOR MEN",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    id: "4",
    image: "/img/s4.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "40%",
    name: "LATEST DESIGN RUBBER SHOE FOR MEN",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s5.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Fabulous sneaker designs for casual boys",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s6.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "20%",
    name: "M.K Soft - Black Comfortable Men's Shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s7.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Men's casual sports shoes breathable mesh shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s8.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Blue Importia Synthetic Leather Loafer Shoes For Men",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s9.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "70%",
    name: "M.K Soft - Black Comfortable Men's Shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s10.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "80%",
    name: "Men's casual sports shoes breathable mesh shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s11.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Fabulous sneaker designs for casual boys",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s12.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "60%",
    name: "Blue Importia Synthetic Leather Loafer Shoes For Men",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s13.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "10%",
    name: "M.K Soft - Black Comfortable Men's Shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s14.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "20%",
    name: "Men's casual sports shoes breathable mesh shoes",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71EHukNHMmL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Fabulous sneaker designs for casual boys",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s13.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Blue Importia Synthetic Leather Loafer Shoes For Men",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/s10.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Blue Importia Synthetic Leather Loafer Shoes For Men",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k1.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Kids T shirt - Cotton T shirt - Customize T shirt",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k2.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "New Collection Kids T Shirts Only",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k3.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "60%",
    name: "High Quality Stylish t Shirts for Kids Boys Round Neck",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k4.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "40%",
    name: "High Quality Stylish t Shirts for Kids Boys Round Neck",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k5.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Kids T shirt - Cotton T shirt - Customize T shirt",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k6.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "High Quality Stylish t Shirts for Kids Boys Round Neck",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k7.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "New Collection Kids T Shirts Only",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k8.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Kids T shirt - Cotton T shirt - Customize T shirt",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k9.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "High Quality Stylish t Shirts for Kids Boys Round Neck",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k10.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "70%",
    name: "New Collection Kids T Shirts Only",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k4.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Kids T shirt - Cotton T shirt - Customize T shirt",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k9.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "High Quality Stylish t Shirts for Kids Boys Round Neck",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k2.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "20%",
    name: "New Collection Kids T Shirts Only",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "/img/k6.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Kids T shirt - Cotton T shirt - Customize T shirt",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },

  {
    image: "https://m.media-amazon.com/images/I/81jVjk1wmyL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Cut Price Stretchable Jeans for Men Plain JET BLACK",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81DvqFoODRL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Lucky Brand Men's 181 Relaxed Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81jVjk1wmyL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Lucky Brand Men's 181 Relaxed Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81jVjk1wmyL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Cut Price Stretchable Jeans for Men Plain JET BLACK",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/71mTic1TgwL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Rock & Republic Men's Slim Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81DvqFoODRL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "70%",
    name: "Lucky Brand Men's 181 Relaxed Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/71mTic1TgwL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "60%",
    name: "Wrangler Men's Trail Trekker Relaxed Fit",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81DvqFoODRL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "70%",
    name: "Rock & Republic Men's Slim Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81OCJuG-BXL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "50%",
    name: "Nautica Men's 5 Pocket Relaxed Fit Stretch Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/71mTic1TgwL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Wrangler Men's Trail Trekker Relaxed Fit",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81OCJuG-BXL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Nautica Men's 5 Pocket Relaxed Fit Stretch Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81DvqFoODRL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Rock & Republic Men's Slim Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/71mTic1TgwL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Nautica Men's 5 Pocket Relaxed Fit Stretch Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
  {
    image: "https://m.media-amazon.com/images/I/81OCJuG-BXL._AC_UL320_.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    sale: "30%",
    name: "Rock & Republic Men's Slim Straight Jean",
    price: 2000.0,
    rating: "3.5",
    countInStock: "4",
  },
];
export default products;
