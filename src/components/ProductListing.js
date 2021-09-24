/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Menu from "./Menu";

// import * as data from "./../Data/gallery.json";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
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
    const response = await fetch(
      "https://api.imgur.com/3/gallery/hot/viral/day/2?showViral=true&mature=false&album_previews=false",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(response);
    // console.log(data.data);
    // dispatch(setProducts(data.data));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get(
  //       "https://api.imgur.com/3/gallery/hot/viral/day/2?showViral=true&mature=false&album_previews=false",
  //       requestOptions
  //     )
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   console.log(response);
  //   // dispatch(setProducts(response.data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <Menu />
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
