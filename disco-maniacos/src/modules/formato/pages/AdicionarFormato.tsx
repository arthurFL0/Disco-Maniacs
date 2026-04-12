import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, TextField, Button, Typography, Paper } from '@mui/material'
import { formatosMock } from '../mock/formato-mock'

export function AdicionarFormato() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (isEdit) {
      const formato = formatosMock.find((f) => f.id === Number(id))
      if (formato) {
        setNome(formato.nome)
      }
    } 

    return () => {
      setNome('') 
    }
  }, [id])

  function handleSubmit() {
    if (isEdit) {
      console.log('Editando formato', { id: Number(id), nome })
    } else {
      console.log('Adicionando formato', { nome })
    }
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 500 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {isEdit ? 'Editar Formato' : 'Adicionar Formato'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome do Formato"
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
