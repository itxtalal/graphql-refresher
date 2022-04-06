// const { categories } = require("../db");

//? For Non Scalar Fields, we have to define their resolvers separately, out of Query Resolvers Object
exports.Product = {
  //   parent of this child resolver (category) is Product
  category: ({ categoryId }, args, { db }) => {
    // console.log("🚀 ~ parent", parent);
    // const categoryId = parent.categoryId;
    return db.categories.find((category) => category.id === categoryId);
  },

  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
