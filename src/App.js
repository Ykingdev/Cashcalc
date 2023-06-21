import React from 'react';
import { registerServiceWorker } from './serviceWorkerRegistration';
import { Increment } from "./Increment";
import './App.css';

registerServiceWorker();

function App() {
  return (
    <div className="overflow-clip bg-[#090909] h-screen flex flex-col justify-center w-screen  text-white">
      <Increment />
      <footer className="text-center text-[#969696] text-sm mt-5">
        <p>Developed by <a href="http://ykingdev.com/" className="text-[#969696] hover:text-[#090909]">YKingDev</a></p>
      </footer>
    </div>
  );
}

export default App;
