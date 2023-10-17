import React, { useState } from "react";
import { ParallaxWrapper } from "./styled";
import dog from "../../images/dog.png";

export const Parallax = () => {
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
  };

  return (
    <>
      <ParallaxWrapper onMouseMove={handleMouseMove}>
        <Parallax
          src={dog}
          style={{
            transform: `translateX(${(mouseX - window.innerWidth / 2) / 30}px)`,
          }}
        />
      </ParallaxWrapper>
      ;
    </>
  );
};
