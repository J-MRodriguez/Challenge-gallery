/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
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
                {<img className="ui fluid image" src={link} alt="imagen" />}
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
                <h3 className="ui brown block header">"header"</h3>
                <p>"description"</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
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
