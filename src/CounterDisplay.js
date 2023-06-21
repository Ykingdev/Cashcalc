import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";

export function CounterDisplay({ count }) {
  return (
    <AttentionSeeker effect="pulse">
      <p className="text-center mt-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600">
        €{count}
      </p>
    </AttentionSeeker>
  );
}
