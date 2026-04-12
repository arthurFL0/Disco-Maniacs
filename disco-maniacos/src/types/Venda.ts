import { Produto } from "./Produto";

export type Venda = {
  id: number | null;
  produtos : Produto[];
  data_venda : Date;
  valor_total: number;
}