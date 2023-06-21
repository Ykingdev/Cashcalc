import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";

export function ClickCountsDisplay({ clickCounts, removeItem }) {
  return (
    <div className="flex justify-center overflow-scroll h-[25vh] my-5">
      <AttentionSeeker effect="pulse" triggerOnce>
        <ul className="text-left text-sm mx-10 w-[79vw]">
          {Array.from(clickCounts.entries()).map(([amount, count], index) => (
            <li className='bg-[#090909] text-[#969696] border-solid border-2 border-purple-400 p-3 flex justify-between rounded-md shadow-lg mb-2 font-medium' key={index}>
              {count} X €{amount} = €{(amount * count).toFixed(2)}
              <button className='text-red-600 ' onClick={() => removeItem(amount)}>Remove</button>
            </li>
          ))}
        </ul>
      </AttentionSeeker>
    </div>
  );
}
