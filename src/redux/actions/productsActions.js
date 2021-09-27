import { ActionTypes } from "../constants/action-types";

export const setGallery = (gallery) => {
  return {
    type: ActionTypes.SET_GALLERY,
    payload: gallery,
  };
};

export const setImages = (images) => {
  return {
    type: ActionTypes.SET_IMAGE,
    payload: images,
  };
};
export const selectedImage = (product) => {
  return {
    type: ActionTypes.SELECTED_IMAGE,
    payload: product,
  };
};

export const changeViral = (viral) => {
  switch (viral) {
    case "on":
      return { type: ActionTypes.CHANGE_SHOWVIRALON };
    case "off":
      return { type: ActionTypes.CHANGE_SHOWVIRALOFF };
    default:
      break;
  }
};

export const changeSection = (section) => {
  switch (section) {
    case "hot":
      return { type: ActionTypes.CHANGE_HOT };
    case "top":
      return { type: ActionTypes.CHANGE_TOP };
    case "user":
      return { type: ActionTypes.CHANGE_USER };
    default:
      break;
  }
};
export const changeSort = (sort) => {
  switch (sort) {
    case "viral":
      return { type: ActionTypes.CHANGE_VIRAL };
    case "top":
      return { type: ActionTypes.CHANGE_TOP };
    case "time":
      return { type: ActionTypes.CHANGE_TIME };
    default:
      break;
  }
};
export const changeWindow = (window) => {
  switch (window) {
    case "day":
      return { type: ActionTypes.CHANGE_DAY };
    case "week":
      return { type: ActionTypes.CHANGE_WEEK };
    case "month":
      return { type: ActionTypes.CHANGE_MONTH };
    case "year":
      return { type: ActionTypes.CHANGE_YEAR };
    case "all":
      return { type: ActionTypes.CHANGE_ALL };
    default:
      break;
  }
};
