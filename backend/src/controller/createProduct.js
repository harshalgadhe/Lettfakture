import Product from "../models/product.js";

export async function createProduct(product, in_price, price, stock, description ){
    await Product.create({
        product: product,
        in_price: in_price,
        price: price,
        stock: stock,
        description: description
    });
};