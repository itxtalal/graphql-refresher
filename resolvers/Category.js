// const { products } = require("../db");

//? For Non Scalar Fields, we have to define their resolvers separately, out of Query Resolvers Object
exports.Category = {
  //   parent of this child resolver (products) is Category
  // Use Object Destructing directly in the function parameters, instead of doing in the function body.
  //* const { products } = context  OR (parent, args, { products })
  products: ({ id: categoryId }, { filter }, { db }) => {
    // console.log(parent);
    // console.log(args);
    // console.log(context);

    // const { products } = context;
    // const categoryId = parent.id;

    const categoricalProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );

    let filteredProducts = categoricalProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if (filter.onSale === false) {
        filteredProducts = filteredProducts.filter(
          (product) => product.onSale === false
        );
      }
    }
    return filteredProducts;
  },
};
