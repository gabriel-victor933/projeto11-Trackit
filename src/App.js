import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "./style/Reset";
import GlobalStyle from "./style/GlobalStyle";
import PaginaInicial from "./pages/PaginaInicial";
import Cadastro from "./pages/Cadastro";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";



export default function App() {



  return (
      <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PaginaInicial />}/> 
        <Route path="/cadastro" element={<Cadastro/>}/> 
        <Route path="/hoje" element={<Hoje />}/> 
        <Route path="/habitos" element={<Habitos />}/> 
        <Route path="/historico" element={<Historico/>}/> 
      </Routes>
      </BrowserRouter>
  );
}

