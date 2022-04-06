const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };

    db.categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, image, price, onSale, quantity, description, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      description,
      quantity,
      onSale,
      categoryId,
    };

    db.products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    db.reviews.push(newReview);
    return newReview;
  },

  //? Delete a category and make the categoryID=null of each product linked with that category

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id) {
        return {
          ...product,
          categoryId: null,
        };
      } else {
        return product;
      }
    });
    return true;
    //! If ID not found return false
  },

  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    //? Delete Reviews related to that product
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
    //! If ID not found return false
  },

  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
    //! If ID not found return false
  },

  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    // console.log("🚀 ~ file: Mutation.js ~ line 85 ~ index", index);
    if (index === -1) return null;

    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },

  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);
    // console.log("🚀 ~ file: Mutation.js ~ line 85 ~ index", index);
    if (index === -1) return null;

    db.products[index] = {
      ...db.products[index],
      ...input,
    };
    return db.products[index];
  },

  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);
    // console.log("🚀 ~ file: Mutation.js ~ line 85 ~ index", index);
    if (index === -1) return null;

    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };
    return db.reviews[index];
  },
};
