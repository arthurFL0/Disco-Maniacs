import { Routes, Route } from "react-router-dom";
import { ListaVenda } from "./pages/ListaVenda";
import { RealizarVenda } from "./pages/RealizarVenda";

export function VendaRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaVenda />} />
            <Route path="realizar" element={<RealizarVenda />} />
        </Routes>
    )
}