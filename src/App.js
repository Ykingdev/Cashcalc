import React, { useState } from 'react';
import './App.css';

function Increment() {
  const [count, setCount] = useState(0);
  const [clickCounts, setClickCounts] = useState([]);
  const incrementValues = [0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50];

  const addToCount = (amount) => {
    const newCount = count + amount;
    setCount(parseFloat(newCount.toFixed(2)));
    setClickCounts((prevClickCounts) => [...prevClickCounts, amount]);
  };

  const removeItem = (index) => {
    const removedAmount = clickCounts[index];
    setClickCounts((prevClickCounts) =>
      prevClickCounts.filter((_, i) => i !== index)
    );
    const newCount = count - removedAmount;
    setCount(parseFloat(newCount.toFixed(2)));
  };

  const uniqueClickCounts = Array.from(new Set(clickCounts));
  const itemCount = (amount) => clickCounts.filter((item) => item === amount).length;

  return (
    <div className="flex justify-center w-screen">
      <div className="calculator p-4">
        <h1 className="text-center text-3xl hidden md:flex justify-center font-bold mb-4">
          I have been developed for use on phones!
        </h1>
        <p className="text-center mt-4 text-5xl font-bold">€{count}</p>
        <div className="flex justify-center overflow-scroll h-[25vh] my-5">
          <ul className="text-left text-sm mx-10 w-[79vw]">
            {uniqueClickCounts.map((amount, index) => (
              <li className='bg-white p-2 flex justify-between rounded-sm shadow-lg mb-2 text-black' key={index}>
                {itemCount(amount)} X €{amount} = €{(amount * itemCount(amount)).toFixed(2)}
                <button onClick={() => removeItem(index)}>Remove 🗑️</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid w-screen px-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {incrementValues.map((value, index) => (
            <button
              className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg"
              onClick={() => addToCount(value)}
              key={index}
            >
              {value < 1 ? `${value * 100} cent` : `${value} euro`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App bg-slate-900 h-screen flex justify-center w-screen text-white">
      <Increment />
    </div>
  );
}

export default App;
