import { Routes, Route } from "react-router-dom";
import { ListaGenero } from "./pages/ListaGenero";
import { AdicionarGenero } from "./pages/AdicionarGenero";

export function GeneroRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaGenero />} />
            <Route path="adicionar" element={<AdicionarGenero />} />
            <Route path="editar/:id" element={<AdicionarGenero />} />
        </Routes>
    )
}