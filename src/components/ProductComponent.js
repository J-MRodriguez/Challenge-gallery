/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ConstructionOutlined } from "@mui/icons-material";

const ProductComponent = () => {
  const gallery = useSelector((state) => state.allProducts.products);
  const imagenes = useSelector((state) => state.images.images);

  console.log(gallery);

  const renderList = gallery.map((product) => {
    if (product === undefined) {
      return (
        <div className="four wide column">
          <Link to={`/product/`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img
                    src="https://image.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg"
                    alt="imagen"
                  />
                </div>
                <div className="content">
                  <div className="header"></div>
                  {/* <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    } else {
      const { id, link, description, type } = product;
      // console.log(id);

      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  {type === "video/mp4" ? (
                    <video
                      src={link}
                      autoPlay
                      muted
                      loop
                      width="640"
                      height="480"
                    />
                  ) : (
                    <img src={link} alt={description} />
                  )}
                </div>
                <div className="content">
                  <div className="header">{description}</div>
                  {/* <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    }
  });

  return <>{renderList}</>;
};

export default ProductComponent;
