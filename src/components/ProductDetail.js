/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {
  FaRegHandPointUp,
  FaRegHandPointDown,
  FaRegFlag,
} from "react-icons/fa";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);

  const { description, link, type } = product;
  const dispatch = useDispatch();

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
    //   // headers: myHeaders,
    //   // // body: formdata,
    //   // redirect: "follow",
  };

  const fetchProductDetail = async (id) => {
    const response = await fetch(
      `https://api.imgur.com/3/image/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((err) => {
        console.log("Err: ", err);
      });
    const data = await response.data;
    // console.log(data);
    dispatch(selectedProduct(data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  let upvotes = Math.floor(Math.random() * (1000 - 50)) + 50;
  let downvotes = Math.floor(Math.random() * (100 - 10)) + 10;
  let score = Math.floor(Math.random() * (6000 - 100)) + 100;

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                {type === "video/mp4" ? (
                  <video
                    className="ui fluid image"
                    src={link}
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img className="ui fluid image" src={link} alt="imagen" />
                )}
              </div>
              <div className="column rp">
                <h1>{description}</h1>
                <h2>{/* <a className="ui teal tag label">${price}</a> */}</h2>
                <h3 className="ui brown block header">{description}</h3>
                {/* <p>"description"</p> */}
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">Up Votes: {upvotes}</div>
                  <div className="visible content">
                    <FaRegHandPointUp />
                  </div>
                </div>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">Down Votes: {downvotes}</div>
                  <div className="visible content">
                    <FaRegHandPointDown />
                  </div>
                </div>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">Score: {score}</div>
                  <div className="visible content">
                    <FaRegFlag />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
