import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";

const login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default login;
