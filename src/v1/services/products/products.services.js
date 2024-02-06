const ProductModel = require("../../models/Products");
const getPaginatedProducts = async (limit, skip) => {
  try {
    const aggregationResult = await ProductModel.aggregate([
      {
        $facet: {
          products: [{ $skip: skip }, { $limit: limit }],
          totalCount: [{ $count: "value" }],
        },
      },
    ]);

    return {
      products: aggregationResult[0].products,
      totalCount: aggregationResult[0].totalCount,
    };
  } catch (error) {
    console.error("Error fetching paginated products:", error);
    throw error;
  }
};

module.exports = { getPaginatedProducts };
