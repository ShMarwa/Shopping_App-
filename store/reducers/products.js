import PRODUCTS from "../../data/dummydata";

const initialState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};
export default (state = initialState, action) => {
  return state;
};
