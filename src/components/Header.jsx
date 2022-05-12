import React from "react";
import { FaArrowLeft, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between ">
      <Button
        className="block text-2xl"
        text={<FaArrowLeft />}
        onClick={() => navigate(-1)}
      />
      <Button className="block text-2xl" text={<FaBookmark />} />
    </div>
  );
};

export default Header;
