import React from "react";
import { FaArrowLeft, FaBookmark } from "react-icons/fa";
import Button from "./Button";

const Header = (props) => {
  return (
    <div className="flex justify-between ">
      <Button className="block text-2xl" text={<FaArrowLeft />} />
      <Button className="block text-2xl" text={<FaBookmark />} />
    </div>
  );
};

export default Header;
