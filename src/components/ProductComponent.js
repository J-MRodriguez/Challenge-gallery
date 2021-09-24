/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const gallery = useSelector((state) => state.allProducts.products);
  let images = {};
  let description = "";
  const [img, setImg] = useState(images);
  const [des, setDes] = useState(description);

  const renderList = gallery.map((product) => {
    const { id, title, images } = product;
    setImg(images);
    setDes(title);

    setTimeout(() => {
      setImg(images[0].link);
      setDes(images[0].description);
      console.log(images[0].link);
    }, 0.1);

    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                {img ? (
                  <img src={img} alt={title} />
                ) : (
                  <img src={images} alt={title} />
                )}
              </div>
              <div className="content">
                <div className="header">{des}</div>
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
