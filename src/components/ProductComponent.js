/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const gallery = useSelector((state) => state.allProducts.products);
  const imagenes = useSelector((state) => state.images.images);

  console.log(gallery);

  const renderList = gallery.map((product, i) => {
    const { link, description } = product[i][0];

    return (
      <div className="four wide column" key={description}>
        <Link to={`/product/${description}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={link} alt={description} />
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
  });

  return <>{renderList}</>;
};

export default ProductComponent;
