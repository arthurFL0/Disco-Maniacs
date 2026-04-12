import { produtosMock } from "../mock/produto-mock"
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Box, TextField
} from '@mui/material'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function ListaProduto() {
  const [produtos, setProdutos] = useState(produtosMock);
  const [filtro, setFiltro] = useState('');
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)

  function excluirProduto(id: number | null) {
    if (id === null) return;
    const produtosAtt = produtos.filter((p) => {
        return p.id !== id;
    })
    setProdutos(produtosAtt);
  }

  useEffect(() => {
    setProdutosFiltrados(
      produtos.filter((p) =>
        p.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        p.artista.nome.toLowerCase().includes(filtro.toLowerCase())
      )
    )
  }, [filtro, produtos])

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Pesquisar por nome ou artista"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          size="small"
          fullWidth
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Produto (Nome/Álbum)</TableCell>
              <TableCell>Artista</TableCell>
              <TableCell>Formato</TableCell>
              <TableCell>Gêneros</TableCell>
              <TableCell>Lançamento</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Qtd</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtosFiltrados.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.artista.nome}</TableCell>
                <TableCell>{produto.formato.nome}</TableCell>
                <TableCell>{produto.genero?.map(g => g.nome).join(', ')}</TableCell>
                <TableCell>{new Date(produto.data_lancamento).toLocaleDateString('pt-BR')}</TableCell>
                <TableCell align="right">R$ {Number(produto.preco).toFixed(2)}</TableCell>
                <TableCell align="right">{produto.quantidade}</TableCell>
                <TableCell align="center">
                  <Button to={`editar/${produto.id}`} component={Link} variant="contained" size="small">
                    Editar
                  </Button>
                  <Button onClick={() => excluirProduto(produto.id)} variant="contained" color="error" size="small" sx={{ marginLeft: 1 }}>
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}