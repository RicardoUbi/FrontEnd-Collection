import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchProvider from "./components/SearchProvider";
import ContainerLayout from "./components/ContainerLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Sidebar />
        <Header />

        <Routes>
          <Route element={<ContainerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/song/:id" element={<Song />} />
          </Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
