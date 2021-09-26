/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { setImages, setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Menu from "./Menu";

// import * as data from "./../Data/gallery.json";

const ProductPage = () => {
  const dispatch = useDispatch();

  // const myHeaders = new Headers();
  // myHeaders.append("Authorization", "Client-ID c2c79f20f313af8");

  // const formdata = new FormData();

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
      "https://api.imgur.com/3/gallery/hot/viral/day/2?showViral=true&mature=false&album_previews=false",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    const post = await result.data;
    // dispatch(setProducts(post));
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
    dispatch(setProducts(im));
    // dispatch(setImages(img));
    console.log(im);
  };

  useEffect(() => {
    const loadGallery = async () => {
      const response = await fetchGallery();
      dispatch(setImages(response));
    };
    loadGallery();
  }, []);

  // const fetchProducts = async () => {
  //   // const response = await axios
  //   //   .get(
  //   //     "https://api.imgur.com/3/gallery/hot/viral/day/2?showViral=true&mature=false&album_previews=false",
  //   //     requestOptions
  //   //   )
  //   //   .catch((err) => {
  //   //     console.log("Err: ", err);
  //   //   });
  //   // console.log(response.data());
  //   dispatch(setProducts(data.data));
  //   // dispatch(setProducts(response));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div className="ui grid container">
      <Menu />
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
