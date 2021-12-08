import React from "react";
import Video from "../../video/video-1.mp4";
import Footer from "./Footer";

export default function Products() {
  return (
    <>
      <video src={Video} muted loop autoPlay={true} controls=""></video>
      <h1 className="products">PRODUCTS</h1>
      <Footer />
    </>
  );
}
