const { products } = require("../db");

//? For Non Scalar Fields, we have to define their resolvers separately, out of Query Resolvers Object
exports.Category = {
  //   parent of this child resolver (products) is Category
  products: (parent, args, context) => {
    console.log(parent);
    console.log(args);
    console.log(context);

    const categoryId = parent.id;

    return products.filter((product) => product.categoryId === categoryId);
  },
};
