import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, TextField, Button, Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { generosMock } from '../mock/genero-mock'

export function AdicionarGenero() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [generoPaiId, setGeneroPaiId] = useState<number | ''>('')

  useEffect(() => {
    if (isEdit) {
      const genero = generosMock.find((g) => g.id === Number(id))
      if (genero) {
        setNome(genero.nome)
        setDescricao(genero.descricao)
        if (genero.GeneroPai && genero.GeneroPai.id) {
          setGeneroPaiId(genero.GeneroPai.id)
        }
      }
    } 

    return () => {
      setNome('')
      setDescricao('')
      setGeneroPaiId('')
    }
  }, [id])

  function handleSubmit() {
    if (isEdit) {
      console.log('Editando gênero', { id: Number(id), nome, descricao, generoPaiId })
    } else {
      console.log('Adicionando gênero', { nome, descricao, generoPaiId })
    }
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 500 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {isEdit ? 'Editar Gênero' : 'Adicionar Gênero'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome do Gênero"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
        />
        
        <TextField
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          fullWidth
          multiline
          rows={3}
        />

        <FormControl fullWidth>
          <InputLabel id="genero-pai-label">Gênero Pai</InputLabel>
          <Select
            labelId="genero-pai-label"
            value={generoPaiId}
            label="Gênero Pai"
            onChange={(e) => setGeneroPaiId(e.target.value as number | '')}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {generosMock.map((g) => (
              g.id !== Number(id) && (
                <MenuItem key={g.id} value={g.id as number}>
                  {g.nome}
                </MenuItem>
              )
            ))}
          </Select>
        </FormControl>

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