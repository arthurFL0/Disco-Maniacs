import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, TextField, Button, Typography, Paper } from '@mui/material'
import { paisesOrigemMock } from '../mock/pais-origem-mock'

export function AdicionarPaisOrigem() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (isEdit) {
      const pais = paisesOrigemMock.find((p) => p.id === Number(id))
      if (pais) {
        setNome(pais.nome)
      }
    } 

    return () => {
    setNome('') 
    }
  }, [id])

  function handleSubmit() {
    if (isEdit) {
      console.log('Editando país de origem', { id: Number(id), nome })
    } else {
      console.log('Adicionando país de origem', { nome })
    }
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 500 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {isEdit ? 'Editar País de Origem' : 'Adicionar País de Origem'}
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