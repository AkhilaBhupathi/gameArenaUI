import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-10 py-4 gap-3 animate-pulse">
      <div className="bg-gray-300 rounded-full w-24 h-24 mb-2"></div>
      <div>
        <p className="font-semibold text-xl bg-gray-300 w-24 h-4 mb-1"></p>
        <p className="text-xs bg-gray-300 w-20 h-3"></p>
      </div>
      <div className="flex text-xs gap-1 items-center">
        <div className="bg-gray-300 w-4 h-4 rounded-full"></div>
        <p className="bg-gray-300 w-16 h-3"></p>
      </div>
      <div className="bg-gray-300 w-48 h-6 rounded-lg mb-2"></div>
      <div className="flex w-48 justify-center border cursor-not-allowed border-gray-300 rounded-lg p-2 text-sm font-normal text-gray-50 items-center bg-gray-500 text-center mt-3 gap-2">
        <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Skeleton;
