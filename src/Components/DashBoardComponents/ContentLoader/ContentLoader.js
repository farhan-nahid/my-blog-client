import React from "react";
import Loader from "react-content-loader";

const ContentLoader = (props) => {
  const random = Math.random() * (1 - 0.7) + 0.7;
  return (
    <Loader
      height={40}
      width={1060}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="5" rx="4" ry="4" width="6" height="6.4" />
      <rect x="64" y="13" rx="6" ry="6" width={200 * random} height="12" />
      <rect x="643" y="13" rx="6" ry="6" width={29 * random} height="12" />
    </Loader>
  );
};

export default ContentLoader;
