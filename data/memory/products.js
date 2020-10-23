// Create a JSON data array
// Store data
let data = [
  { id: 1, name: "Product_1", description: "description_1", price: 100, weight: 10, category: 1, imageUrl: "prod1.jpg" },
  { id: 2, name: "Product_2", description: "description_2", price: 200, weight: 20, category: 2, imageUrl: "prod2.jpg" },
  { id: 3, name: "Product_3", description: "description_3", price: 300, weight: 30, category: 3, imageUrl: "prod3.jpg" },
  { id: 4, name: "Product_4", description: "description_4", price: 400, weight: 40, category: 3, imageUrl: "prod4.jpg" },
  { id: 5, name: "Product_5", description: "description_5", price: 500, weight: 50, category: 3, imageUrl: "prod5.jpg" },
];

// Retrieve data
const getProducts = async () => { return data; };
// eslint-disable-next-line no-undef
module.exports = getProducts;
