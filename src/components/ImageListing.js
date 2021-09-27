/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGallery, setImages } from "../redux/actions/productsActions";
import ImageComponent from "./ImageComponent";
import Menu from "./Menu";

const GalleryPage = () => {
  const dispatch = useDispatch();
  const section = useSelector((state) => state.section);
  const sort = useSelector((state) => state.sort);
  const window = useSelector((state) => state.window);
  const viral = useSelector((state) => state.viral);

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
  };

  const fetchGallery = async () => {
    const result = await fetch(
      `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=${viral}&mature=false&album_previews=false`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    const post = await result.data;

    const img = await post.map((i) => {
      const { images } = i;
      const arr = [].concat(images);
      return arr;
    });
    const im = await img.map((i) => {
      const test = i[0];
      const arr = [].concat(test);
      return arr;
    });
    const imagen = await im.map((e) => {
      const test = e[0];
      return test;
    });
    dispatch(setGallery(imagen));
  };

  useEffect(() => {
    const loadGallery = async () => {
      const response = await fetchGallery();
      dispatch(setImages(response));
    };
    loadGallery();
  }, [section, sort, window, viral]);

  return (
    <div className="ui grid container">
      <Menu />
      <ImageComponent />
    </div>
  );
};

export default GalleryPage;
