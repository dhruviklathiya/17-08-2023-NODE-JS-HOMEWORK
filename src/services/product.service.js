const { Product } = require("../models");

/**
 * Get product by product_name
 * @param {string} product_name
 * @returns {Promise<Product>}
 */
const get_product_by_name = async(product_name) => {
    return Product.findOne({product_name});
}

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const create_product = async(reqBody) => {
    return Product.create(reqBody);
};

/**
 * Get Product list
 * @returns {Promise<Product>}
 */
const get_product_list = async() => {
    return Product.find();
}

module.exports = {
    create_product,
    get_product_by_name,
    get_product_list
}