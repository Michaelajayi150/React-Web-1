import React from "react";
import Footer from "./Footer";

export default function Services() {
  return (
    <>
      <h1
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/image/image-7.jpg"
          })`,
          backgroundRepeat: "no-repeat",
        }}
        className="services"
      >
        SERVICES
      </h1>
      <Footer />
    </>
  );
}
