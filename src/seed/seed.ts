import bcryptjs from 'bcryptjs';


interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}



type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}




export const initialData: SeedData = {

  users: [
    {
      email: 'tafedericoemanuel@gmail.com',
      name: 'Federico Rodriguez',
      password: bcryptjs.hashSync('123456'),
      role: 'admin'
    },
    {
      email: 'federicoemanuel2020@hotmail.com',
      name: 'Emanuel Carpio',
      password: bcryptjs.hashSync('123456'),
      role: 'user'
    },


  ],


  categories: [
    'Shirts', 'Pants', 'Hoodies', 'Hats'
  ],
  products: [
    {
      description: "Navy blue, organic cotton blend, woven, printed logo on the front, round neck, short sleeves and straight hem. POSITIVELY CONSCIOUS: This product has at least 50% organic materials in its composition that helps support organic agricultural practices, such as the restricted use of synthetic chemicals and genetically modified seeds, improved soil fertility and better livestock management.",
      images: [
        'navyblue1.jpg',
        'navyblue2.jpg',
      ],
      inStock: 7,
      price: 75,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "mens_navy_blue_shirt",
      type: 'shirts',
      tags: [ 'sweatshirt' ],
      title: "Men’s Navy blue shirt",
      gender: 'men'
    },
    {
      description: "Embroidered logo, round neck, short sleeves and straight hem. Material: cotton.",
      images: [
        'playera1.jpg',
        'playera2.jpg',
      ],
      inStock: 5,
      price: 200,
      sizes: [ 'XS', 'S', 'M', 'XL', 'XXL' ],
      slug: "mens_cotton_shirt_1",  // Updated slug
      type: 'shirts',
      tags: [ 'jacket' ],
      title: "Men's cotton Shirt",
      gender: 'men'
    },
    {
      description: "printed logo T-shirt",
      images: [
        'blanca1.jpg',
        'blanca2.jpg'
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "men_white_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's white t-shirt",
      gender: 'men'
    },
    {
      description: "Printed logo on the front, round neck and short sleeves. Material: cotton.",
      images: [
        'remera1.jpg',
        'remera2.jpg',
      ],
      inStock: 50,
      price: 45,
      sizes: [ 'XS', 'S', 'M', 'L' ],
      slug: "men_t_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's t-shirt",
      gender: 'men'
    },
    {
      description: "logo-print T-shirt",
      images: [
        'negra1.jpg',
        'negra2.jpg',
      ],
      inStock: 50,
      price: 40,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "men_black_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's black t-shirt",
      gender: 'men'
    },
    {
      description: "Embroidered logo on the chest, shark print, round neck, short sleeves and straight hem. Material: cotton.",
      images: [
        'coqueta1.jpg',
        'coqueta2.jpg',
      ],
      inStock: 0,
      price: 35,
      sizes: [ 'M', 'L', 'XL', 'XXL' ],
      slug: "men_cotton_shirt_2",  // Updated slug
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's cotton shirt",
      gender: 'men'
    },
    {
      description: "Red cotton logo polo shirt from Paul & Shark featuring a stretch style, a classic polo collar, a front button fastening, short sleeves and a straight hem.",
      images: [
        'rojo1.jpg',
        'rojo2.jpg',
      ],
      inStock: 15,
      price: 35,
      sizes: [ 'S', 'M', 'L', 'XL' ],
      slug: "men_polo",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's polo",
      gender: 'men'
    },
    {
      description: "logo-print T-shirt",
      images: [
        'triple1.jpg',
        'triple2.jpg',
      ],
      inStock: 17,
      price: 35,
      sizes: [ 'XS', 'S', 'XL', 'XXL' ],
      slug: "men_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Men's T-shirt",
      gender: 'men'
    },
    {
      description: "Navy blue, virgin wool, peak lapels, double-breasted closure, gold buttons, welt pocket on the chest, two flap pockets on the front, button cuffs and straight hem",
      images: [
        'unisex1.jpg',
        'unisex2.jpg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "navy_blue_unisex",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Navy Blue unisex",
      gender: 'unisex'
    },
    {
      description: "Multicolour cotton Shark 1990 T-shirt from Kansai Yamamoto Pre-Owned featuring a boat neck, short sleeves and a loose fit. We remind you that these pieces had a life before reaching your hands, so they may have small imperfections. By purchasing this item you continue its use and positively help the planet.",
      images: [
        'mujer1.jpg',
        'mujer2.jpg',
      ],
      inStock: 85,
      price: 225,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "women_shirt_1",  // Updated slug
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's T-shirt",
      gender: 'women'
    },
    {
      description: "Classic wool blazer from Paul Smith featuring narrow lapels, a front button fastening and side pockets.",
      images: [
        'mujer3.jpg',
        'mujer4.jpg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ 'XS', 'S', 'M', 'XXL' ],
      slug: "women_blazer",
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's blazer",
      gender: 'women'
    },
    {
      description: "PS Paul Smith Button Down Shirt.",
      images: [
        'mujer5.jpg',
        'mujer6.jpg',
      ],
      inStock: 9,
      price: 110,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_shirt_2",  // Updated slug
      type: 'hoodies',
      tags: [ 'hoodie' ],
      title: "Women's Shirt",
      gender: 'women'
    },
    {
      description: "Striped shirt from PS Paul Smith featuring a classic collar, a stripe pattern, a front button fastening, long sleeves, button cuffs and a curved hem.",
      images: [
        'mujer7.jpg',
        'mujer8.jpg',
      ],
      inStock: 10,
      price: 45,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_shirt_3",  // Updated slug
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Striped shirt",
      gender: 'women'
    },
    {
      description: "Striped shirt dress from PS Paul Smith with a striped print, a built-in belt, a classic collar, short sleeves and a midi design.",
      images: [
        'mujer9.jpg',
        'mujer10.jpg',
      ],
      inStock: 0,
      price: 40,
      sizes: [ 'XS', 'S' ],
      slug: "women_shirt_dress",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Shirt Dress",
      gender: 'women'
    },
    {
      description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      images: [
        'mujer11.jpg',
        'mujer12.jpg',
      ],
      inStock: 30,
      price: 35,
      sizes: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL' ],
      slug: "women_t_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Women's Style Shirt",
      gender: 'women'
    },
    {
      description: "Shark-motif knitted sweater.",
      images: [
        'kid1.jpg',
        'kid2.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_sweater",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Sweater",
      gender: 'kid'
    },
    {
      description: "Black, multicolor, all-over graphic print, printed logo on the back, flame print, crew neck, long sleeves and ribbed cuffs and trim.",
      images: [
        'kid3.jpg',
        'kid4.jpg',
      ],
      inStock: 0,
      price: 25,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids shirt",
      gender: 'kid'
    },
    {
      description: "Shark Face long sleeve top.",
      images: [
        'kid5.jpg',
        'kid6.jpg',
      ],
      inStock: 10,
      price: 25,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_shark",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Shark",
      gender: 'kid'
    },
    {
      description: "Shark shirt.",
      images: [
        'kid7.jpg',
        'kid8.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_shark_shirt",
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Shark shirt",
      gender: 'kid'
    },
    {
      description: "Stella shark-print T-shirt.",
      images: [
        'kid9.jpg',
        'kid10.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ 'XS', 'S', 'M' ],
      slug: "kids_shark_shirt_1",  // Updated slug
      type: 'shirts',
      tags: [ 'shirt' ],
      title: "Kids Shark-Shirt",
      gender: 'kid'
    },
  ]
};