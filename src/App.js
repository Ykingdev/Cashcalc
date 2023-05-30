import React, { useState } from 'react';
import './App.css';

function Increment() {
  const [count, setCount] = useState(0);
  const [clickCounts, setClickCounts] = useState({});

  const addToCount = (amount) => {
    const result = count + amount;
    setCount(Number(result.toFixed(2)));

    // Update clickCounts object
    setClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [amount]: (prevClickCounts[amount] || 0) + 1,
    }));
  };

  // Sort the clickCounts object by key in ascending order
  const sortedClickCounts = Object.entries(clickCounts).sort((a, b) => a[0] - b[0]);


  return (
    <div className="flex justify-center w-screen">
      <div className="calculator p-4">
        <h1 className="text-center text-3xl hidden md:flex justify-center  font-bold mb-4">I have been developed for use on phones!</h1>
        <p className="text-center mt-4 text-5xl font-bold ">€{count}</p>
        <div className="mt-4 justify-start flex mb-10 h-[16vh] overflow-scroll  pl-10">
          <ul className='text-left text-sm '>
            {sortedClickCounts.map(([amount, count]) => (
              <li key={amount}>
                {count} x €{amount} = €{(amount * count).toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid w-screen px-10  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(0.05)}
          >
            5 cent
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(0.10)}
          >
            10 cent
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(0.20)}
          >
            20 cent
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(0.50)}
          >
            50 cent
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(1)}
          >
            1 euro
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(2)}
          >
            2 euro
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(5)}
          >
            5 euro
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(10)}
          >
            10 euro
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(20)}
          >
            20 euro
          </button>
          <button
            className="button bg-green-800 p-3 sm:p-4 text-xl rounded-lg "
            onClick={() => addToCount(50)}
          >
            50 euro
          </button>
        </div>
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="App bg-slate-900 h-screen flex justify-center w-screen  text-white">
        <Increment />
    </div>
  );
}

export default App;
