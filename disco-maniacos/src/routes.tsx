import { Routes, Route } from "react-router-dom";
import { ArtistasRoutes } from "./modules/artista/routes";
import { FormatoRoutes } from "./modules/formato/routes";
import { GeneroRoutes } from "./modules/genero/routes";
import { ProdutoRoutes } from "./modules/produto/routes";
import { VendaRoutes } from "./modules/venda/routes";
import { PaisOrigemRoutes } from "./modules/paisOrigem/routes";
import {HomePage} from "./modules/home/homepage"
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/artistas/*" element={<ArtistasRoutes/>}/>
      <Route path="/formatos/*" element={<FormatoRoutes/>}/>
      <Route path="/generos/*" element={<GeneroRoutes/>}/>
      <Route path="/produtos/*" element={<ProdutoRoutes/>}/>
      <Route path="/vendas/*" element={<VendaRoutes/>}/>
      <Route path="/paises-origem/*" element={<PaisOrigemRoutes/>}/>
    </Routes>
  );
}