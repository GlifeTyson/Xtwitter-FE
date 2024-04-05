import { useAuth } from "@/context/UserProvider";
import { fetchMe, logout } from "@/services/user";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const UserButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [mee, setMe] = useState<any>({});
  const { me } = useAuth();

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={togglePopover}
      className="rounded-xl relative w-4/5 h-[52px] hover:bg-slate-600 flex flex-row justify-between items-center gap-2 p-2"
    >
      {isOpen && (
        <div className="absolute bottom-16 right-5 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            type="button"
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {
              console.log("asdadadadadadadadada");
              logout();
            }}
          >
            Log Out
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full border-[1px] border-gray-500"
          src={"/favicon.ico"}
          alt="icon"
          width={40}
          height={40}
        ></Image>
        <div className="flex flex-col">
          <p className="text-white">{me?.displayName}</p>
          <p className="text-slate-700 text-sm">@{me?.email}</p>
        </div>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default UserButton;
