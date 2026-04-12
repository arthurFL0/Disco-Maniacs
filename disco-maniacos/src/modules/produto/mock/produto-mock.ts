import { Produto } from "../../../types/Produto";
import { artistasMock } from "../../artista/mock/artista-mock";
import { formatosMock } from "../../formato/mock/formato-mock";
import { generosMock } from "../../genero/mock/genero-mock";

export const produtosMock: Produto[] = [
    {
        id: 1,
        nome: 'Adoniran Barbosa',
        data_lancamento: new Date('1974-08-05'),
        data_redicao: null,
        descricao: '℗ 1974 EMI Records Brasil Ltda',
        quantidade: 1,
        preco: 150.00,
        genero: generosMock.filter(g => g.nome === 'Samba'),
        formato: formatosMock[0],
        artista: artistasMock.find(a => a.nome === 'Adoniran Barbosa')!
    },
    {
        id: 2,
        nome: 'Paranoid',
        data_lancamento: new Date('1970-09-18'),
        data_redicao: null,
        descricao: 'Lançamento',
        quantidade: 5,
        preco: 250.00,
        genero: generosMock.filter(g => g.nome === 'Hard Rock' || g.nome === 'Rock'),
        formato: formatosMock[0],
        artista: artistasMock.find(a => a.nome === 'Black Sabbath')!
    },
    {
        id: 3,
        nome: 'Getting Killed',
        data_lancamento: new Date('2025-09-26'),
        data_redicao: null,
        descricao: '',
        quantidade: 5,
        preco: 120.00,
        genero: generosMock.filter(g => g.nome === 'Rock'),
        formato: formatosMock[0],
        artista: artistasMock.find(a => a.nome === 'Geese')!
    }
];