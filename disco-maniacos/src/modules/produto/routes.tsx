import { Routes, Route } from "react-router-dom";
import { ListaProduto } from "./pages/ListaProduto";
import { AdicionarProduto } from "./pages/AdicionarProduto";
import { DetalharProduto } from "./pages/DetalharProduto";

export function ProdutoRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaProduto />} />
            <Route path="adicionar" element={<AdicionarProduto />} />
            <Route path="editar/:id" element={<AdicionarProduto />} />
            <Route path="detalhar/:id" element={<DetalharProduto />} />
        </Routes>
    )
}