import React from "react";

export const IconProvider = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "#696B6D",
  stroke,
  children,
  className,
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    className={className}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);
