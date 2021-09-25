import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  galleryReducer,
  imagesReducer,
} from "./productsReducer";
const reducers = combineReducers({
  gallery: galleryReducer,
  images: imagesReducer,

  /////////////////////////////////

  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
