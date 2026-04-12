import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import { artistasMock } from '../artista/mock/artista-mock'

const mockCards = [
  { label: 'Formatos', valor: 3 },
  { label: 'Gêneros', valor: 3 },
  { label: 'Artistas', valor: artistasMock.length },
  { label: 'Produtos', valor: 3 },
  { label: 'Vendas Realizadas', valor: 1 },
]

export function HomePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Bem-vindo! 
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Aqui está um resumo do seu sistema.
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {mockCards.map((card) => (
          <Grid key={card.label} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                  {card.valor}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {card.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}