const { categories } = require("../db");

//? For Non Scalar Fields, we have to define their resolvers separately, out of Query Resolvers Object
exports.Product = {
  //   parent of this child resolver (category) is Product
  category: (parent, args, context) => {
    console.log("🚀 ~ parent", parent);
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
