import { Artista } from "./Artista";
import { Formato } from "./Formato";
import { Genero } from "./Genero";

export type Produto = {
    id: number | null;
    nome: string;
    data_lancamento: Date;
    data_redicao: Date | null;
    descricao: string;
    quantidade: number;
    preco: number;
    genero : Genero[];
    formato: Formato;
    artista: Artista;
}
