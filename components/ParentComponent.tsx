import React from "react";
import MenuBar from "./MenuBar";
import PostForm from "./PostForm";
import LeftSection from "./LeftSection";

const Parent = () => {
  const menuItems = [
    { label: "Home", href: "/home" },
    { label: "Explore", href: "#" },
    { label: "Notifications", href: "#" },
    { label: "Messages", href: "#" },
    { label: "Profile", href: "#" },
  ];

  return (
    <div className="w-full h-full flex flex-1 flex-row">
      <MenuBar items={menuItems} />
      <LeftSection />
    </div>
  );
};

export default Parent;
