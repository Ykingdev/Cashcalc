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
          To experience the ux as intended, please use a phone.
        </h1>
        <p className="text-center mt-4 text-5xl font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600"
>€{count}</p>
        <div className="flex justify-center overflow-scroll h-[25vh] my-5">
          <ul className="text-left text-sm mx-10 w-[79vw]">
            {uniqueClickCounts.map((amount, index) => (
              <li className='bg-[#090909] text-[#969696] border-solid border-2 border-purple-400   p-3 flex justify-between rounded-md shadow-lg mb-2 font-medium' key={index}>
                {itemCount(amount)} X €{amount} = €{(amount * itemCount(amount)).toFixed(2)}
                <button className='text-red-600 ' onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid w-screen px-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {incrementValues.map((value, index) => (
            <button
              className=" hover:bg-gradient-to-r hover:from-purple-400 hover:to-yellow-600 hover:text-[#090909] hover:duration-150 duration-150 bg-[#090909] border-solid border-2 border-[#242424] text-[#969696] p-3 sm:p-4 text-xl rounded-lg"
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
    <div className="App bg-[#090909] h-screen flex flex-col justify-center w-screen  text-white">
      <Increment />
      <footer className="text-center text-[#969696] text-sm mt-5">
        <p>Developed by <a href="http://ykingdev.com/" className="text-[#969696] hover:text-[#090909]">YKingDev</a></p>
      </footer> 
    </div>
  );
}

export default App;
