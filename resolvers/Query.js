// const { products, categories } = require("../db");

//* Scalar Types: String, Int, Float, Boolean, ID!
//? String - can return String or null
//? String! - can only return String

//* Array
//? [String!] - Array cannot contain a null value
//? [String]! - Should return an Array, cannot be null
//? [String!]! - Should always return an array, having non null values

exports.Query = {
  hello: (parent, args, context) => {
    return "World";
  },
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, { id }, { products }) => {
    // console.log(parent);
    // console.log(args);
    // console.log(context);

    // const { id } = args;

    const product = products.find((product) => product.id === id);
    if (!product) {
      return null;
    }
    return product;
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, context) => {
    // const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
