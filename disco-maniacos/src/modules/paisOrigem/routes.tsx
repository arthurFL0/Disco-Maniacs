import { Routes, Route } from "react-router-dom";
import { ListaPaisOrigem } from "./pages/ListaPaisOrigem";
import { AdicionarPaisOrigem } from "./pages/AdicionarPaisOrigem";

export function PaisOrigemRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaPaisOrigem />} />
            <Route path="adicionar" element={<AdicionarPaisOrigem />} />
            <Route path="editar/:id" element={<AdicionarPaisOrigem />} />
        </Routes>
    )
}