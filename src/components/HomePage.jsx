import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const nav = useNavigate();

  return (
    <>
      <div>HomePage</div>
      <button
        onClick={() => {
          nav("/form");
        }}
      >
        create your resume
      </button>
    </>
  );
};
