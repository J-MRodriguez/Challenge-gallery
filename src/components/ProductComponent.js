import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const gallery = useSelector((state) => state.allProducts.products);

  // console.log(gallery);

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
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    } else {
      const { id, link, description, type } = product;

      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  {type === "video/mp4" ? (
                    <video src={link} autoPlay muted loop />
                  ) : (
                    <img src={link} alt={description} />
                  )}
                </div>
                <div className="content">
                  {description === null ? (
                    <div className="header">Check this post</div>
                  ) : (
                    <div className="header">{description}</div>
                  )}
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
