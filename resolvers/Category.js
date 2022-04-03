// const { products } = require("../db");

//? For Non Scalar Fields, we have to define their resolvers separately, out of Query Resolvers Object
exports.Category = {
  //   parent of this child resolver (products) is Category
  // Use Object Destructing directly in the function parameters, instead of doing in the function body.
  //* const { products } = context  OR (parent, args, { products })
  products: ({ id: categoryId }, args, { products }) => {
    // console.log(parent);
    // console.log(args);
    // console.log(context);

    // const { products } = context;
    // const categoryId = parent.id;

    return products.filter((product) => product.categoryId === categoryId);
  },
};
