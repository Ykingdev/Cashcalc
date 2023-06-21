import React from "react";

export function IncrementButton({ value, addToCount }) {
  return (
    <button
      className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-yellow-600 hover:text-[#090909] hover:duration-150 duration-150 bg-[#090909] border-solid border-2 border-[#242424] text-[#969696] p-3 sm:p-4 text-xl rounded-lg"
      onClick={() => addToCount(value)}
    >
      {value < 1 ? `${value * 100} cent` : `${value} euro`}
    </button>
  );
}
