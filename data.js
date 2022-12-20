import bcrypt from "bcryptjs";

//created first data.js for seed all datas into db
const data = {
  users: [
    {
      username: "Admin",
      email: "adijigit@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true,
    },
  ],

  blogs: [
    {
      title: "Men's capsule wardrobe",
      description:
        "A crewneck sweater is one of the most versatile garments a man can have in his wardrobe. So, whether you're dressing up for a casual day at the office or a night out on the town, a crewneck sweater is the perfect way to show you mean business. Wear a solid color like navy or gray for a more traditional look. Or if you're feeling daring, try a bolder hue like red or green. Just make sure to avoid big patterns since these will come and go stylewise. Pair your crewneck with a button-down shirt and dress pants for a sharp look that will get you noticed. Or go for a more relaxed vibe by pairing it with jeans and a tee. No matter how you wear it, a crewneck sweater will keep you looking your best ",
    },
  ],

  products: [
    {
      title: "KNIT JOGGERS",
      category: "Men",
      subcategory: "Joggers",
      description:
        "Trousers with an adjustable elastic waistband. Front pockets and rear pocket detail. Ribbed hems. Care for fiber: at least 50% Join Life viscose. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.",
      price: 29,
      star: "4⭐",
      sizes: [
        {
          title: "30",
        },
        {
          title: "31",
        },
        {
          title: "32",
        },
        {
          title: "34",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "BLUE",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/2/p/5536/302/400/2/w/563/5536302400_1_1_1.jpg?ts=1661503824183",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/2/p/5536/302/400/2/w/563/5536302400_2_1_1.jpg?ts=1661503837024",
    },
    {
      title: "TEXTURED SWEATER",
      category: "Men",
      subcategory: "Sweater",
      description:
        "Care for water: produced using less water. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.",
      price: 39,
      star: "5⭐",
      sizes: [
        {
          title: "S",
        },
        {
          title: "M",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "BLUE",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/2/p/3332/340/401/2/w/750/3332340401_1_1_1.jpg?ts=1659022803313",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/2/p/3332/340/401/2/w/750/3332340401_2_1_1.jpg?ts=1659022809078",
    },
    {
      title: "STRIPED KNIT POLO SHIRT",
      category: "Men",
      subcategory: "STRIPED KNIT POLO SHIRT",
      description:
        "Collared polo shirt with a button-up front. Long sleeves. Ribbed trims. We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments. To assess compliance, we have developed a programme of audits and continuous improvement plans.",
      price: 49,
      star: "4⭐",
      sizes: [
        {
          title: "S",
        },
        {
          title: "M",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "BLUE",
        },
      ],
      image:
        "https://static.zara.net/photos///2023/V/0/2/p/4331/401/700/2/w/750/4331401700_1_1_1.jpg?ts=1670405554329",
      imageOne:
        "https://static.zara.net/photos///2023/V/0/2/p/4331/401/700/2/w/750/4331401700_2_1_1.jpg?ts=1670405552428",
    },
    {
      title: "BASIC COTTON SWEATER",
      category: "Men",
      subcategory: "Sweater",
      description:
        "Sweater made of spun cotton fabric. Round neck and long sleeves. Ribbed trims. Care for water: produced using less water. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.",
      price: 32,
      star: "5⭐",
      sizes: [
        {
          title: "S",
        },
        {
          title: "M",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "BLUE",
        },
      ],
      image:
        "https://static.zara.net/photos///2023/V/0/2/p/3284/400/800/2/w/563/3284400800_1_1_1.jpg?ts=1670405537639",
      imageOne:
        "https://static.zara.net/photos///2023/V/0/2/p/3284/400/800/2/w/563/3284400800_2_1_1.jpg?ts=1670405537840",
    },
    {
      title: "RELAXED FIT JEANS",
      category: "Men",
      subcategory: "Jeans",
      description:
        "Relaxed fit jeans. Five pockets. Faded effect. Front zip fly and button fastening. Care for fiber & water: at least 20% recycled cotton. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
      price: 45,
      star: "3⭐",
      sizes: [
        {
          title: "30",
        },
        {
          title: "31",
        },
        {
          title: "32",
        },
        {
          title: "34",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/2/p/0840/387/606/2/w/563/0840387606_1_1_1.jpg?ts=1663759379219",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/2/p/0840/387/606/2/w/563/0840387606_2_1_1.jpg?ts=1663759378964",
    },
    {
      title: "SLIM FIT JEANS",
      category: "Men",
      subcategory: "Jeans",
      description:
        "Slim fit jeans. Five pockets. Faded effect. Front zip fly and button fastening. Care for fiber: at least 15% recycled cotton. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
      price: 29,
      star: "4⭐",
      sizes: [
        {
          title: "30",
        },
        {
          title: "31",
        },
        {
          title: "32",
        },
        {
          title: "34",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/1/p/5575/440/400/32/w/563/5575440400_1_1_1.jpg?ts=1657735141133",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/2/p/5575/440/400/2/w/563/5575440400_6_1_1.jpg?ts=1657539239827",
    },
    {
      title: "SLIM FIT JEANS",
      category: "Men",
      subcategory: "Jeans",
      description:
        "Slim fit jeans. Five pockets. Faded effect. Front zip fly and button fastening. Care for fiber: at least 15% recycled cotton. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
      price: 38,
      star: "5⭐",
      sizes: [
        {
          title: "30",
        },
        {
          title: "31",
        },
        {
          title: "32",
        },
        {
          title: "34",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/1/p/5575/440/406/2/w/563/5575440406_1_1_1.jpg?ts=1662977013819",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/1/p/5575/440/406/2/w/563/5575440406_2_1_1.jpg?ts=1662977010498",
    },
    {
      title: "TAPERED SLIM FIT JEANS",
      category: "Men",
      subcategory: "Jeans",
      description:
        "Slim fit jeans. Five pockets. Faded effect. Front zip fly and button fastening. Care for fiber: at least 15% recycled cotton. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
      price: 39,
      star: "5⭐",
      sizes: [
        {
          title: "30",
        },
        {
          title: "31",
        },
        {
          title: "32",
        },
        {
          title: "34",
        },
      ],
      colors: [
        {
          title: "WHITE",
        },
        {
          title: "BLACK",
        },
        {
          title: "GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/2/p/1187/350/800/2/w/563/1187350800_1_1_1.jpg?ts=1663771948286",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/2/p/1187/350/800/2/w/563/1187350800_2_1_1.jpg?ts=1663771958791",
    },
    {
      title: "POLO COLLAR BODYSUIT",
      category: "Women",
      subcategory: "T-Shirt",
      description:
        "Long sleeve bodysuit with a polo collar. Featuring button fastening at the front and snap-button fastening at the bottom. Care for water: produced using less water. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
      price: 19,
      star: "4⭐",
      sizes: [
        {
          title: "S",
        },
        {
          title: "M",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "GRAY",
        },
        {
          title: "BLACK",
        },
        {
          title: "DARK GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/1/p/4424/641/818/17/w/563/4424641818_1_1_1.jpg?ts=1670255442170",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/1/p/4424/641/818/17/w/563/4424641818_2_1_1.jpg?ts=1670255442189",
    },
    {
      title: "TEXTURED DRAPED GINGHAM SKIRT",
      category: "Women",
      subcategory: "Skirt",
      description:
        "High-waist midi skirt with side gathering. Featuring a rear slit at the hem and invisible back zip fastening. Care for water: produced using less water. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
      price: 39,
      star: "4⭐",
      sizes: [
        {
          title: "S",
        },
        {
          title: "M",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "GRAY",
        },
        {
          title: "BLACK",
        },
        {
          title: "DARK GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/1/p/7969/256/080/2/w/430/7969256080_1_1_1.jpg?ts=1661353194485",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/1/p/7969/256/080/2/w/563/7969256080_2_6_1.jpg?ts=1661353191206",
    },
    {
      title: "SMILEYWORLD ® HAPPY COLLECTION T-SHIRT",
      category: "Kids",
      subcategory: "T-Shitrs",
      description:
        "Round neck T-shirt with long sleeves. SMILEYWORLD ® HAPPY COLLECTION print on the front and back. We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.To assess compliance, we have developed a programme of audits and continuous improvement plans.",
      price: 10,
      star: "4⭐",
      sizes: [
        {
          title: "S",
        },
        {
          title: "M",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "GRAY",
        },
        {
          title: "BLACK",
        },
        {
          title: "DARK GRAY",
        },
      ],
      image:
        "https://static.zara.net/photos///2023/V/0/3/p/3037/601/898/102/w/563/3037601898_1_1_1.jpg?ts=1669970019354",
      imageOne:
        "https://static.zara.net/photos///2023/V/0/3/p/3037/601/898/2/w/563/3037601898_6_1_1.jpg?ts=1669807627029",
    },
    {
      title: "THE ORIGINAL FIT JEANS",
      category: "Kids",
      subcategory: "Jeans",
      description:
        "Original jeans featuring an adjustable inner waistband and front button fastening. Size 6 snap-button fastening. Five pockets.",
      price: 22,
      star: "5⭐",
      sizes: [
        {
          title: "116",
        },
        {
          title: "122",
        },
        {
          title: "128",
        },
        {
          title: "134",
        },
      ],
      colors: [
        {
          title: "GRAY",
        },
        {
          title: "BLUE",
        },
        {
          title: "LIGHT BLUE",
        },
      ],
      image:
        "https://static.zara.net/photos///2022/I/0/3/p/2646/764/407/302/w/750/2646764407_1_1_1.jpg?ts=1669108964394",
      imageOne:
        "https://static.zara.net/photos///2022/I/0/3/p/2646/764/407/2/w/750/2646764407_6_1_1.jpg?ts=1668157318700",
    },
  ],

  category: [
    {
      value: "Men",
      label: "Men",
    },
    {
      value: "Women",
      label: "Women",
    },
    {
      value: "Kids",
      label: "Kids",
    },
  ],

  subcategory: [
    {
      checked: false,
      label: "Jeans",
    },
    {
      checked: false,
      label: "Sweater",
    },
    {
      checked: false,
      label: "T-Shirt",
    },
    {
      checked: false,
      label: "Skirts",
    },
  ],

  rating: [
    {
      value: "1",
      label: "1⭐",
    },
    {
      value: "2",
      label: "2⭐",
    },
    {
      value: "3",
      label: "3⭐",
    },
    {
      value: "4",
      label: "4⭐",
    },
    {
      value: "5",
      label: "5⭐",
    },
  ],
};

export default data;
