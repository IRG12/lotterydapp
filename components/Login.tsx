import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetaMask = useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          src="https://i.pinimg.com/474x/d6/7b/17/d67b178ec4cbc830f5e1d7d4275784c3.jpg"
          alt="Dice"
        />
        <h1 className="text-6xl text-white font-bold">LOTTERY DRAWING!!!</h1>
        <h2 className="text-white">
          Get Started By Logging in with your MetaMask{" "}
        </h2>
        <button
          onClick={connectWithMetaMask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
}

export default Login;
