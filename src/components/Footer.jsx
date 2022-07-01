import React from "react";

const Footer = () => {
  return (
    <footer className="fixed p-4 bottom-0 left-0 text-sm sm:text-lg text-center w-full ">
      <div>
        <span dangerouslySetInnerHTML={{ __html: "&copy; 2022, Babayeju" }} />
      </div>
    </footer>
  );
};

export default Footer;
