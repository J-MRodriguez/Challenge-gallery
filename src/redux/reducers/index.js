import { combineReducers } from "redux";
import {
  selectedImageReducer,
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
  image: selectedImageReducer,
});
export default reducers;
