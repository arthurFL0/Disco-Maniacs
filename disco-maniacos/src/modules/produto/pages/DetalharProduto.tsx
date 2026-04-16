import { useParams, Link } from 'react-router-dom'
import { 
  Box, Typography, Paper, Grid, 
  Button, Divider, Chip
} from '@mui/material'
import { produtosMock } from '../mock/produto-mock'

export function DetalharProduto() {
  const { id } = useParams()
  const produto = produtosMock.find((p) => p.id === Number(id))

  if (!produto) {
    return (
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5">Produto não encontrado.</Typography>
        <Button component={Link} to="/produtos" variant="contained" sx={{ mt: 2 }}>
          Voltar para Lista
        </Button>
      </Box>
    )
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 800, margin: '0 auto', mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          {produto.nome}
        </Typography>
        <Typography variant="h5" color="primary">
          R$ {Number(produto.preco).toFixed(2)}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="subtitle1" color="text.secondary">Artista</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{produto.artista.nome}</Typography>
          
          <Typography variant="subtitle1" color="text.secondary">Formato</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{produto.formato.nome}</Typography>

          <Typography variant="subtitle1" color="text.secondary">Data de Lançamento</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {new Date(produto.data_lancamento).toLocaleDateString('pt-BR')}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="subtitle1" color="text.secondary">Gêneros</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {produto.genero?.map((g) => (
              <Chip key={g.id} label={g.nome} size="small" />
            ))}
          </Box>

          <Typography variant="subtitle1" color="text.secondary">País de Origem</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {produto.pais_origem ? produto.pais_origem.nome : 'Não informado'}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">Quantidade em Estoque</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{produto.quantidade} unidades</Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle1" color="text.secondary">Descrição</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {produto.descricao || 'Nenhuma descrição fornecida.'}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button component={Link} to="/produtos" variant="outlined">
          Voltar
        </Button>
        <Button component={Link} to={`/produtos/editar/${produto.id}`} variant="contained">
          Editar
        </Button>
      </Box>
    </Paper>
  )
}