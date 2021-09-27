import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ImageComponent = () => {
  const gallery = useSelector((state) => state.gallery.gallery);
  const renderList = gallery.map((image) => {
    if (image === undefined || image.description === null) {
      return console.log("undefine");
    } else {
      const { id, link, description, type } = image;

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
                  <div className="header">{description}</div>
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

export default ImageComponent;
