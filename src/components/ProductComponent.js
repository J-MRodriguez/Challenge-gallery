import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const gallery = useSelector((state) => state.allProducts.products);
  const renderList = gallery.map((product) => {
    const { id, title, images, link } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                {!images[0].link ? (
                  <img src={link} alt={title} />
                ) : (
                  <img src={images[0].link} alt={title} />
                )}
              </div>
              <div className="content">
                <div className="header">{title}</div>
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
