import { useState } from "react";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
