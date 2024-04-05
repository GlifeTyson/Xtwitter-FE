import Link from "next/link";
import React from "react";

const HomeSection = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-3/5 h-full flex justify-center items-center p-8">
        {/* X icon on the left side  */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="relative fill-current h-1/2"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>
      <div className="w-2/5 h-[90vh] flex flex-col justify-center">
        <span className="font-bold text-[64px] my-12">Happening Now</span>
        <span className="font-bold text-3xl">Join today.</span>

        {/* button create account and sign in */}

        <div className="flex flex-col mt-10 gap-3">
          <Link href={"/register"}>
            <button className="bg-sky-500 w-80 h-10 rounded-full hover:bg-sky-600">
              <p className="font-semibold">Register</p>
            </button>
          </Link>

          <p className="text-left font-semibold">Already have account ?</p>
          <Link href={"/login"}>
            <button className="w-80 h-10 bg-white rounded-full hover:bg-slate-200">
              <p className="text-sky-500 font-semibold">Sign In</p>
            </button>
          </Link>
        </div>
        {/* Login module on the right side */}
      </div>
    </div>
  );
};

export default HomeSection;
