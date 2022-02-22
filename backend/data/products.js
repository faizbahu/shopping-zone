const products = [
  {
    // id: 1,
    // image:
    //   "https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg",
    // description:
    //   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    // brand: 'Apple',  
    // sale: "30%",
    // name: "FMTS21-31528 - Rust",
    // price: 2584.00,
    // rating: "3.5",
    // countInStock:"3"
  },
  {
    // id: 2,
    // image:
    //   "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668",
    //   description:
    //   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    // brand: 'Apple',
    //   sale: "50%",
    // name: "FMTS21-31528 - Rust",
    // price: 1223.00,
    // rating: "4",
    // countInStock:"0"
  },
  {
    // id: 3,
    // image:
    //   "https://cdn.shopify.com/s/files/1/2290/7887/products/F0018103702_3_1024x1024.jpg?v=1635010890",
    //   description:
    //   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    // brand: 'Apple',
    //   sale: "70%",
    // name: "FMTS21-31528 - Rust",
    // price: 1245.00,
    // rating: "2",
    // countInStock:"8"
  },
  {
    // id: 4,
    image:
      "https://furorjeans.com/media/catalog/product//i/m/img_5834-31528.jpg",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "30%",
    name: "FMTS21-31528 - Rust",
    price: 2000.00,
    rating: "3.5",
    countInStock:"4"
  },
  {
    // id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "20%",
    name: "FMTS21-31528 - Rust",
    price: 2345.00,
    rating: "4.5",
    countInStock:"3"
  },
  {
    // id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_3038_360x.jpg?v=1631977176",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "50%",
    name: "FMTS21-31528 - Rust",
    price: 2584.00,
    rating: "2",
    countInStock:"0"
  },
  {
    // id: 7,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0021103901_2_cf32b4b2-b0ed-420a-8e8c-c92326c1c0dc_1024x1024.jpg?v=1636027614",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "40%",
    name: "FMTS21-31528 - Rust",
    price: 1500.00,
    rating: "3",
    countInStock:"3"
  },
  {
    // id: 8,
    image:
      "https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "30%",
    name: "FMTS21-31528 - Rust",
    price: 1834.00,
    rating: "4",
    countInStock:"3"
  },
  {
    // id: 9,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0035103305_1_1024x1024.jpg?v=1635064667",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "10%",
    name: "FMTS21-31528 - Rust",
    price: 2584.00,
    rating: "3",
    countInStock:"3"
  },
  {
    // id: 10,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_3038_360x.jpg?v=1631977176",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "50%",
    name: "FMTS21-31528 - Rust",
    price: 2331.00,
    rating: "2",
    countInStock:"3"
  },
  {
    // id: 11,
    image:
      "https://furorjeans.com/media/catalog/product//0/n/0n9a7125-31525.jpg",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "40%",
    name: "FMTS21-31528 - Rust",
    price: 1345.00,
    rating: "1",
    countInStock:"3"
  },
  {
    // id: 12,
    image:
      "https://cdn.shopify.com/s/files/1/1963/3741/products/AU4_8152_360x.jpg?v=1629835668",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "60%",
    name: "FMTS21-31528 - Rust",
    price: 1322.00,
    rating: "2",
    countInStock:"3"
  },
  {
    // id: 13,
    image:
      "https://furorjeans.com/media/catalog/product//i/m/img_5834-31528.jpg",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "50%",
    name: "FMTS21-31528 - Rust",
    price: 2584.00,
    rating: "2",
    countInStock:"3"
  },
  {
    // id: 14,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0021103901_2_cf32b4b2-b0ed-420a-8e8c-c92326c1c0dc_1024x1024.jpg?v=1636027614",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "30%",
    name: "FMTS21-31528 - Rust",
    price: 1111.00,
    rating: "4.5",
    countInStock:"3"
  },
  {
    // id: 15,
    image:
      "https://furorjeans.com/media/catalog/product//i/m/img_5729-31512_4.jpg",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "10%",
    name: "FMTS21-31528 - Rust",
    price: 1000.00,
    rating: "4",
    countInStock:"3"
  },
  {
    // id: 16,
    image:
      "https://cdn.shopify.com/s/files/1/2290/7887/products/F0035103305_1_1024x1024.jpg?v=1635064667",
      description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
      sale: "30%",
    name: "FMTS21-31528 - Rust",
    price: 1200.00,
    rating: "3.5",
    countInStock:"3"
  },
];
export default products
