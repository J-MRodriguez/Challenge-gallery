import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  galleryReducer,
  imagesReducer,
  sectionReducer,
  sortReducer,
  windowReducer,
  showViralReducer,
} from "./productsReducer";
const reducers = combineReducers({
  gallery: galleryReducer,
  images: imagesReducer,
  section: sectionReducer,
  sort: sortReducer,
  window: windowReducer,
  viral: showViralReducer,

  /////////////////////////////////

  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
