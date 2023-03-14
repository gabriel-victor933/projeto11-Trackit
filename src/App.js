import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Reset from "./constant/Reset";
import GlobalStyle from "./constant/GlobalStyle";
import styled from "styled-components";

export default function App() {
  return (
      <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PaginaInicial />}/> 
      </Routes>
      </BrowserRouter>
  );
}

