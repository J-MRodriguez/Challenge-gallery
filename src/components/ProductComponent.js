/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  // const gallery = useSelector((state) => state.allProducts.products);
  const images = useSelector((state) => state.images.images);

  const renderList = images.map((obj) => {
    // const {  } = product;

    // let img = images[0].link;
    // let description = images[0].description;
    // let id = images[0].id;

    // setTimeout(() => {
    //   console.log(images[0].link);
    //   let img = images[0].link;
    //   let description = images[0].description;
    // }, 0.1);

    return (
      <div className="four wide column" key={obj.id}>
        <Link to={`/product/${obj.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={obj.link} alt={obj.description} />
              </div>
              <div className="content">
                <div className="header">{obj.description}</div>
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
