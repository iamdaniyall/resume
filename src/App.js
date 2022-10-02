import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlueResume } from "./components/BlueResume";
import ResumeForm from "./components/ResumeForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeForm />} />
          <Route path="/result" element={<BlueResume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
