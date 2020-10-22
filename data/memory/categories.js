// Create a JSON data array
// Store data
let data = [
  { id: 1, name: "Category_1", description: "description_1" },
  { id: 2, name: "Category_2", description: "description_2" },
  { id: 3, name: "Category_3", description: "description_3" },
  { id: 4, name: "Category_4", description: "description_4" },
  { id: 5, name: "Category_5", description: "description_5" },
];

// Retrieve data
const getCategories = async () => { return data; };
// eslint-disable-next-line no-undef
module.exports = getCategories;
