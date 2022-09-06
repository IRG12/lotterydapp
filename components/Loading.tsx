import React from "react";
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-20"
          src="https://i.pinimg.com/474x/d6/7b/17/d67b178ec4cbc830f5e1d7d4275784c3.jpg"
          alt="Dice"
        />
        <h1 className="text-lg text-white font-bold">GET READY TO PLAY!!!</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;
