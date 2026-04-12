import { Venda } from "../../../types/Venda";
import { produtosMock } from "../../produto/mock/produto-mock";

export const vendasMock: Venda[] = [
    {
        id: 1,
        produtos: [produtosMock[0], produtosMock[1]],
        data_venda: new Date('2026-04-10T14:30:00'),
        valor_total: 400.00
    }
];