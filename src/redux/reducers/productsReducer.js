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
//////////////////////////////////////
export const sectionReducer = (state = "hot", { type }) => {
  switch (type) {
    case ActionTypes.CHANGE_HOT:
      return "hot";
    case ActionTypes.CHANGE_TOP:
      return "top";
    case ActionTypes.CHANGE_USER:
      return "user";
    default:
      return state;
  }
};
export const sortReducer = (state = "viral", { type }) => {
  switch (type) {
    case ActionTypes.CHANGE_VIRAL:
      return "viral";
    case ActionTypes.CHANGE_TOP:
      return "top";
    case ActionTypes.CHANGE_TIME:
      return "time";
    default:
      return state;
  }
};

export const windowReducer = (state = "day", { type }) => {
  switch (type) {
    case ActionTypes.CHANGE_DAY:
      return "day";
    case ActionTypes.CHANGE_WEEK:
      return "week";
    case ActionTypes.CHANGE_MONTH:
      return "month";
    case ActionTypes.CHANGE_YEAR:
      return "year";
    case ActionTypes.CHANGE_ALL:
      return "all";
    default:
      return state;
  }
};

export const showViralReducer = (state = true, { type }) => {
  switch (type) {
    case ActionTypes.CHANGE_SHOWVIRALON:
      return true;
    case ActionTypes.CHANGE_SHOWVIRALOFF:
      return false;
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
