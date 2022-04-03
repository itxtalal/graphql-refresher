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
  products: (parent, { filter }, { products, reviews }) => {
    // const {filter} = args;
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      //* OnSale FILTERING
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if (filter.onSale === false) {
        filteredProducts = filteredProducts.filter(
          (product) => product.onSale === false
        );
      }

      //* avgRating FILTERING

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating = sumRating + review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          console.log(
            "🚀 ~  avgRating - productName",
            avgProductRating,
            product.name
          );
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
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
  category: (parent, { id }, { categories }) => {
    // const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
