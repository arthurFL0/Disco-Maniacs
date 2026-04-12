import { Routes, Route } from "react-router-dom";
import { ListaArtista } from "./pages/ListaArtista";
import { AdicionarArtista } from "./pages/AdicionarArtista";


export function ArtistasRoutes() {
    return(
        <Routes>
            <Route path="/" element={<ListaArtista />} />
            <Route path="adicionar" element={<AdicionarArtista />} />
            <Route path="editar/:id" element={<AdicionarArtista />} />
        </Routes>
    )

}
