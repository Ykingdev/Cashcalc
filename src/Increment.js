import React, { useState } from 'react';
import { CounterDisplay } from "./CounterDisplay";
import { ClickCountsDisplay } from "./ClickCountsDisplay";
import { IncrementButton } from "./IncrementButton";
import { Fade } from "react-awesome-reveal";

export function Increment() {
  const [count, setCount] = useState(0);
  const [clickCounts, setClickCounts] = useState(new Map());
  const incrementValues = [0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50];

  const addToCount = (amount) => {
    const newCount = count + amount;
    setCount(parseFloat(newCount.toFixed(2)));
    setClickCounts((prevClickCounts) => {
      const newClickCounts = new Map(prevClickCounts);
      const count = newClickCounts.get(amount) || 0;
      newClickCounts.set(amount, count + 1);
      return newClickCounts;
    });
  };

  const removeItem = (amount) => {
    setClickCounts((prevClickCounts) => {
      const newClickCounts = new Map(prevClickCounts);
      let count = newClickCounts.get(amount);
      if (count !== undefined) {
        if (count === 1) {
          newClickCounts.delete(amount);
        } else {
          newClickCounts.set(amount, count - 1);
        }
      }
      return newClickCounts;
    });
    const newCount = count - amount;
    setCount(parseFloat(newCount.toFixed(2)));
  };

  return (
    <div className="flex justify-center w-screen">
      <div className="calculator p-4">
        <h1 className="text-center text-3xl hidden md:flex justify-center font-bold mb-4">
          I have been developed for use on phones!
          To experience the ux as intended, please use a phone.
        </h1>
        <CounterDisplay count={count} />
        <ClickCountsDisplay clickCounts={clickCounts} removeItem={removeItem} />
        <Fade cascade>
          <div className="grid w-screen px-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {incrementValues.map((value, index) => (
              <IncrementButton value={value} addToCount={addToCount} key={index} />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
