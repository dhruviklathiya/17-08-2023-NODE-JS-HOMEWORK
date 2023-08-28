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

/**
 * Get product by id
 * @param {object} product_id
 * @returns {Promise<Product>}
 */
const get_product_by_id = async(product_id) => {
    return Product.findById(product_id);
}

/**
 * Delete product by id
 * @param {object} product_id
 * @returns {Promise<Product>}
 */
const delete_product = async(product_id) => {
    return Product.findByIdAndDelete(product_id);
}
/**
 * Update product by id
 * @param {object} product_id
 * @returns {Promise<Product>}
 */
const update_product = async(product_id,reqbody) => {
    return Product.findByIdAndUpdate(product_id,{$set:reqbody});
}

module.exports = {
    create_product,
    get_product_by_name,
    get_product_list,
    get_product_by_id,
    delete_product,
    update_product
}