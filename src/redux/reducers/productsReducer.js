import { ActionTypes } from "../constants/action-types";

const initialStateGall = {
  gallery: [],
};

const initialStateImg = {
  images: [],
};

export const galleryReducer = (state = initialStateGall, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_GALLERY:
      return { ...state, gallery: payload };
    default:
      return state;
  }
};

export const imagesReducer = (state = initialStateImg, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IMAGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
/////////////////////////////////////

const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
