import React from "react";
import Footer from "./Footer";
import Video from "../../video/video.mp4";

export default function Services() {
  return (
    <>
      <video src={Video} muted loop autoPlay={true} controls=""></video>
      <h1
        // style={{
        //   backgroundImage: `url(${
        //     process.env.PUBLIC_URL + "/image/image-7.jpg"
        //   })`,
        //   backgroundRepeat: "no-repeat",
        // }}
        className="services"
      >
        SERVICES
      </h1>
      <Footer />
    </>
  );
}
