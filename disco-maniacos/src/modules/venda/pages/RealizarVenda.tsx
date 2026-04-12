import { useState } from 'react'
import { 
  Box, TextField, Button, Typography, Paper, 
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, 
} from '@mui/material'
import { produtosMock } from '../../produto/mock/produto-mock'
import { Produto } from '../../../types/Produto'

type ItemCarrinho = {
    produto: Produto;
    quantidade: number;
}

export function RealizarVenda() {
  const [produtoIdBusca, setProdutoIdBusca] = useState<number | ''>('')
  const [produtoEncontrado, setProdutoEncontrado] = useState<Produto | null>(null)
  const [quantidadeDesejada, setQuantidadeDesejada] = useState<number | ''>('')
  
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])

  function buscarProduto() {
    const produto = produtosMock.find(p => p.id === Number(produtoIdBusca))
    if (produto) {
      setProdutoEncontrado(produto)
      setQuantidadeDesejada(1)
    } else {
      setProdutoEncontrado(null)
      alert("Produto não encontrado!")
    }
  }

  function adicionarAoCarrinho() {
    if (produtoEncontrado && quantidadeDesejada) {
      const q = Number(quantidadeDesejada);
      if (q <= 0) return;

      const itemExistente = carrinho.find(item => item.produto.id === produtoEncontrado.id)
      
      if (itemExistente) {
        setCarrinho(carrinho.map(item => 
          item.produto.id === produtoEncontrado.id 
          ? { ...item, quantidade: item.quantidade + q } 
          : item
        ))
      } else {
        setCarrinho([...carrinho, { produto: produtoEncontrado, quantidade: q }])
      }

      setProdutoIdBusca('')
      setProdutoEncontrado(null)
      setQuantidadeDesejada('')
    }
  }

  function removerDoCarrinho(produtoId: number | null) {
      setCarrinho(carrinho.filter(item => item.produto.id !== produtoId))
  }

  const totalVenda = carrinho.reduce((acc, item) => acc + (item.produto.preco * item.quantidade), 0)

  function finalizarVenda() {
      if (carrinho.length === 0) return;
      
      // Montar a estrutura final de venda para visualização
      const produtosParaVenda = carrinho.flatMap(item => {
          return Array(item.quantidade).fill(item.produto)
      })

      const novaVenda = {
          produtos: produtosParaVenda,
          data_venda: new Date(),
          valor_total: totalVenda
      }

      console.log('Venda Realizada com Sucesso!', novaVenda)
      alert('Venda Realizada com Sucesso!')
      setCarrinho([])
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 800, margin: '0 auto' }}>
        <Paper sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Pesquisar Produto</Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
            <TextField
                label="Código do Produto (ID)"
                type="number"
                value={produtoIdBusca}
                onChange={(e) => setProdutoIdBusca(e.target.value ? Number(e.target.value) : '')}
                size="small"
            />
            <Button variant="contained" onClick={buscarProduto} disabled={!produtoIdBusca}>
                Buscar
            </Button>
        </Box>

        {produtoEncontrado && (
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6">{produtoEncontrado.nome}</Typography>
                <Typography variant="body2">Artista: {produtoEncontrado.artista.nome}</Typography>
                <Typography variant="body2">Formato: {produtoEncontrado.formato.nome}</Typography>
                <Typography variant="body2">Preço: R$ {produtoEncontrado.preco.toFixed(2)}</Typography>
                <Typography variant="body2">Estoque: {produtoEncontrado.quantidade}</Typography>
                
                <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'center' }}>
                    <TextField
                        label="Quantidade"
                        type="number"
                        value={quantidadeDesejada}
                        onChange={(e) => setQuantidadeDesejada(e.target.value ? Number(e.target.value) : '')}
                        size="small"
                    />
                    <Button variant="contained" color="success" onClick={adicionarAoCarrinho} disabled={!quantidadeDesejada || Number(quantidadeDesejada) <= 0}>
                        Adicionar à Lista
                    </Button>
                </Box>
            </Box>
        )}
        </Paper>

        <Paper sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Carrinho de Vendas</Typography>
            
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Produto</TableCell>
                            <TableCell align="right">Qtd</TableCell>
                            <TableCell align="right">Preço Unit.</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="center">Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {carrinho.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.produto.nome} ({item.produto.formato.nome})</TableCell>
                                <TableCell align="right">{item.quantidade}</TableCell>
                                <TableCell align="right">R$ {item.produto.preco.toFixed(2)}</TableCell>
                                <TableCell align="right">R$ {(item.produto.preco * item.quantidade).toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <Button color="error" size="small" onClick={() => removerDoCarrinho(item.produto.id)}>
                                        Remover
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {carrinho.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} align="center">Nenhum produto adicionado</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Total a pagar: R$ {totalVenda.toFixed(2)}</Typography>
                
                <Button variant="contained" size="large" color="primary" onClick={finalizarVenda} disabled={carrinho.length === 0}>
                    Confirmar Venda
                </Button>
            </Box>
        </Paper>
    </Box>
  )
}