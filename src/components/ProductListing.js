/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  // setGallery,
  setImages,
  setProducts,
} from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Menu from "./Menu";

// import * as data from "./../Data/gallery.json";

const ProductPage = () => {
  const dispatch = useDispatch();
  const section = useSelector((state) => state.section);
  const sort = useSelector((state) => state.sort);
  const window = useSelector((state) => state.window);
  const viral = useSelector((state) => state.viral);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Client-ID c2c79f20f313af8",
    },
    params: {
      showViral: "true",
      mature: "false",
      album_previews: "false",
    },
    // headers: myHeaders,
    // // body: formdata,
    // redirect: "follow",
  };

  const fetchGallery = async () => {
    const result = await fetch(
      `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=${viral}&mature=false&album_previews=false`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    const post = await result.data;
    // dispatch(setGallery(post));
    // console.log(post);
    const img = await post.map((i) => {
      const { images } = i;
      const arr = [].concat(images);
      return arr;
    });
    const im = await img.map((i) => {
      const test = i[0];
      const arr = [].concat(test);
      return arr;
    });
    const imagen = await im.map((e) => {
      const test = e[0];
      return test;
    });
    dispatch(setProducts(imagen));
    // dispatch(setImages(img));
    // console.log(imagen);
  };

  useEffect(() => {
    const loadGallery = async () => {
      const response = await fetchGallery();
      dispatch(setImages(response));
    };
    loadGallery();
  }, [section, sort, window, viral]);

  return (
    <div className="ui grid container">
      <Menu />
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
