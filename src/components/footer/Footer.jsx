import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
