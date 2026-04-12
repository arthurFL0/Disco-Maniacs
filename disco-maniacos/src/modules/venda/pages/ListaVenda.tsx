import { vendasMock } from "../mock/venda-mock"
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Box, Button
} from '@mui/material'
import { useState } from "react";
import { Link } from "react-router-dom";

export function ListaVenda() {
  const [vendas] = useState(vendasMock);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Histórico de Vendas</Typography>
        <Button component={Link} to="realizar" variant="contained" color="primary">
          Nova Venda
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID da Venda</TableCell>
              <TableCell>Data/Hora</TableCell>
              <TableCell align="right">Qtd de Itens</TableCell>
              <TableCell align="right">Valor Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendas.map((venda) => (
              <TableRow key={venda.id}>
                <TableCell>#{venda.id}</TableCell>
                <TableCell>{new Date(venda.data_venda).toLocaleString('pt-BR')}</TableCell>
                <TableCell align="right">{venda.produtos.length}</TableCell>
                <TableCell align="right">R$ {venda.valor_total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            {vendas.length === 0 && (
              <TableRow>
                  <TableCell colSpan={4} align="center">Nenhuma venda registrada</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}