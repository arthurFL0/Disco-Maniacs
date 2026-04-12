import { Routes, Route } from "react-router-dom";
import { ListaFormato } from "./pages/ListaFormato";
import { AdicionarFormato } from "./pages/AdicionarFormato";

export function FormatoRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaFormato />} />
            <Route path="adicionar" element={<AdicionarFormato />} />
            <Route path="editar/:id" element={<AdicionarFormato />} />
        </Routes>
    )
}
