import React, { useState } from "react";
import UserButton from "./UserButton";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuBarProps {
  items: MenuItem[];
}

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {
  return (
    <nav className="w-[30vw] h-[100vh] overflow-y-auto p-10">
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          {/* Your logo or branding */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="relative fill-current w-[27px] h-[24px]"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <div key={index}>
                <li className="w-full h-[50.25px] flex flex-row">
                  <a
                    href={item.href}
                    className="w-fit text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-full font-bold text-xl"
                  >
                    {item.label}
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <button className="bg-sky-500 w-4/5 h-[52px] rounded-3xl mt-6 font-bold text-xl">
            Post
          </button>
        </div>

        {/* User on bottom */}
        <UserButton />
      </div>
    </nav>
  );
};

export default MenuBar;
