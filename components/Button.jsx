import Link from "next/link";
import React from "react";

const Button = ({
  title = "explore",
  color = "bg-primary",
  radius = "rounded-none",
  link = "/",
}) => {
  return (
    <Link
      href={link}
      className={`${color} ${radius} py-1 px-4 sm:px-6 md:px-8 btn-shadow text-md sm:text-lg md:text-xl lg:text-2xl hover:bg-secondary 
      `}
    >
      {title}
    </Link>
  );
};

export default Button;
