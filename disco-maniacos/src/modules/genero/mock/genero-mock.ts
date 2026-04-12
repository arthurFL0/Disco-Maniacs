import { Genero } from "../../../types/Genero";

export const generosMock: Genero[] = [
    {
        id: 1,
        nome: 'Rock',
        descricao: 'Gênero musical de ritmo acelerado',
        GeneroPai: null
    },
    {
        id: 2,
        nome: 'Hard Rock',
        descricao: 'Subgênero do Rock',
        GeneroPai: {
            id: 1,
            nome: 'Rock',
            descricao: 'Gênero musical de ritmo acelerado',
            GeneroPai: null
        }
    },
    {
        id: 3,
        nome: 'Samba',
        descricao: 'Gênero musical brasileiro de ritmo animado',
        GeneroPai: null
    }
];
