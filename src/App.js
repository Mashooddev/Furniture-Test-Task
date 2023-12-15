import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DesktopOne from "./pages/DesktopOne/DesktopOne";
import DesktopTwo from "./pages/DesktopTwo/DesktopTwo";
import DesktopThree from "./pages/DesktopThree/DesktopThree";
import Provider from "./Provider";

export default function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<DesktopOne />} />
            <Route path="/floor-plan" element={<DesktopTwo />} />
            <Route path="/favourites" element={<DesktopThree />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
