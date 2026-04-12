import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, TextField, Button, Typography, Paper } from '@mui/material'
import { artistasMock } from '../mock/artista-mock'

export function AdicionarArtista() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const [nome, setNome] = useState('')



  useEffect(() => {
    if (isEdit) {
      const artista = artistasMock.find((a) => a.id === Number(id))
      if (artista) {
        setNome(artista.nome)
      }
    } 

    return () => {
    setNome('') 
    }
  }, [id])

  function handleSubmit() {
    if (isEdit) {
      console.log('Editando artista', { id: Number(id), nome })
    } else {
      console.log('Adicionando artista', { nome })
    }
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 500 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {isEdit ? 'Editar Artista' : 'Adicionar Artista'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!nome}
        >
          {isEdit ? 'Salvar Alterações' : 'Adicionar'}
        </Button>
      </Box>
    </Paper>
  )
}