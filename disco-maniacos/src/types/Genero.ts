

export type Genero = {
    id : number | null;
    nome : string;
    descricao: string;
    GeneroPai : Genero | null;
}