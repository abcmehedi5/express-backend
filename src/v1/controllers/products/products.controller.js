const {
  getPaginatedProducts,
} = require("../../services/products/products.services");
const { response } = require("../../util/constant");

// get all products data
const controller = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { products, totalCount } = await getPaginatedProducts(limit, skip);
    const data = {
      message: response.SUCCESS.CONTENT,
      status_code: response.SUCCESS.STATUS,
      page: page,
      limit: limit,
      totalItems: totalCount[0].value,
      currentItems: products.length,
      data: products,
    };

    res.status(200).json(data);
  } catch (error) {
    console.log("error");
    next(error);
  }
};

module.exports = { controller };
