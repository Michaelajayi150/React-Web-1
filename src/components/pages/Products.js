import React from "react";
import Footer from "./Footer";

export default function Products() {
  return (
    <>
      <h1
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/image/image-7.jpg"
          })`,
          backgroundRepeat: "no-repeat",
        }}
        className="products"
      >
        PRODUCTS
      </h1>
      <Footer />
    </>
  );
}
