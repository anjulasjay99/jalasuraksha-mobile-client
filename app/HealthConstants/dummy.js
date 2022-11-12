import assets from "./assets";

const NFTData = [
  {
    id: "TIP-01",
    name: "Green Coins",
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "NFT coins race",
    creator: "Elisabeth aho",
    price: 95.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Abstracto soulful art",
    creator: "Victor de la Cruz",
    price: 18.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    image: assets.nft07,
    bids: [],
  },

  {
    id: "TIP-10",
    userEmail: "praveenpeiris@gmail.com",
    postId: "w1668123084345",
    title: "Best sanitation tips for better health",
    content:
      "There are several better sanitation tips that can be used in our day to day Life, in order to keep our personal health good. Those are abcdef / acbdesf and etc..",
    postCreatedAt: "December 27, 2019 at 1:50 PM",
    feedbacks: [
      {
        id: "BID-32",
        name: "Angela",
        message: "Ok broo calm down we will look into this",
        dateOfFeedback: "December 27, 2019 at 1:50 PM",
      },
      {
        name: "Anjula",
        message: "hako",
        dateOfFeedback: { $date: { $numberLong: "1667805616934" } },
        _id: { $oid: "6368b1b00ec5036d36001a79" },
      },
      {
        name: "",
        message: "mmm oc oc blnnm",
        dateOfFeedback: { $date: { $numberLong: "1667917322413" } },
        _id: { $oid: "636a660ac4815e2e94636e09" },
      },
      {
        name: "",
        message: "mm mk",
        dateOfFeedback: { $date: { $numberLong: "1668002761952" } },
        _id: { $oid: "636bb3c920f1dc873ad30b8e" },
      },
      {
        name: "Anjula",
        message: "kakka daala heduwe nadda ithn dawas 3k",
        dateOfFeedback: { $date: { $numberLong: "1668100504001" } },
        _id: { $oid: "636d31989726a3b5f0260bf5" },
      },
      {
        name: "Anjula",
        message: "ei ahanne awith hodannada????",
        dateOfFeedback: { $date: { $numberLong: "1668101165735" } },
        _id: { $oid: "636d342d9726a3b5f0260c30" },
      },
      {
        name: "Anjula",
        message: "na awilla lewakanna welichcha kakka kaali tika",
        dateOfFeedback: { $date: { $numberLong: "1668101485674" } },
        _id: { $oid: "636d356d9726a3b5f0260c59" },
      },
      {
        name: "Anjula",
        message: "hako",
        dateOfFeedback: { $date: { $numberLong: "1668139360069" } },
        _id: { $oid: "636dc9606940f3974550b9da" },
      },
    ],
  },
];

export { NFTData };
