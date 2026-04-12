import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, TextField, Button, Typography, Paper, FormControl, InputLabel, Select, MenuItem, OutlinedInput, SelectChangeEvent, Chip } from '@mui/material'
import { produtosMock } from '../mock/produto-mock'
import { artistasMock } from '../../artista/mock/artista-mock'
import { formatosMock } from '../../formato/mock/formato-mock'
import { generosMock } from '../../genero/mock/genero-mock'

export function AdicionarProduto() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  
  const [nome, setNome] = useState('')
  const [dataLancamento, setDataLancamento] = useState('')
  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState<number | ''>('')
  const [preco, setPreco] = useState<number | ''>('')
  const [artistaId, setArtistaId] = useState<number | ''>('')
  const [formatoId, setFormatoId] = useState<number | ''>('')
  const [generosIds, setGenerosIds] = useState<number[]>([])

  useEffect(() => {
    if (isEdit) {
      const produto = produtosMock.find((p) => p.id === Number(id))
      if (produto) {
        setNome(produto.nome)
        setDataLancamento(produto.data_lancamento.toISOString().split('T')[0])
        setDescricao(produto.descricao)
        setQuantidade(produto.quantidade)
        setPreco(produto.preco)
        if (produto.artista) setArtistaId(produto.artista.id as number)
        if (produto.formato) setFormatoId(produto.formato.id as number)
        if (produto.genero) setGenerosIds(produto.genero.map(g => g.id as number))
      }
    } 

    return () => {
      setNome('')
      setDataLancamento('')
      setDescricao('')
      setQuantidade('')
      setPreco('')
      setArtistaId('')
      setFormatoId('')
      setGenerosIds([])
    }
  }, [id])

  const handleGenerosChange = (event: SelectChangeEvent<typeof generosIds>) => {
    const {
      target: { value },
    } = event;
    setGenerosIds(
      typeof value === 'string' ? value.split(',').map(Number) : value,
    );
  };

  function handleSubmit() {
    console.log(isEdit ? 'Editando produto' : 'Adicionando produto', { 
        id: isEdit ? Number(id) : undefined, 
        nome, 
        dataLancamento, 
        descricao, 
        quantidade, 
        preco, 
        artistaId, 
        formatoId, 
        generosIds 
    })
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 600 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {isEdit ? 'Editar Produto' : 'Adicionar Produto'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
        />
        
        <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="artista-label">Artista</InputLabel>
                <Select
                    labelId="artista-label"
                    value={artistaId}
                    label="Artista"
                    onChange={(e) => setArtistaId(e.target.value as number)}
                >
                    {artistasMock.map((a) => (
                    <MenuItem key={a.id} value={a.id as number}>
                        {a.nome}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="formato-label">Formato</InputLabel>
                <Select
                    labelId="formato-label"
                    value={formatoId}
                    label="Formato"
                    onChange={(e) => setFormatoId(e.target.value as number)}
                >
                    {formatosMock.map((f) => (
                    <MenuItem key={f.id} value={f.id as number}>
                        {f.nome}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>

        <FormControl fullWidth>
            <InputLabel id="generos-label">Gêneros</InputLabel>
            <Select<number[]>
                labelId="generos-label"
                multiple
                value={generosIds}
                onChange={handleGenerosChange}
                input={<OutlinedInput label="Gêneros" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => {
                            const genero = generosMock.find(g => g.id === value);
                            return <Chip key={value} label={genero ? genero.nome : value} />;
                        })}
                    </Box>
                )}
            >
                {generosMock.map((g) => (
                <MenuItem key={g.id} value={g.id as number}>
                    {g.nome}
                </MenuItem>
                ))}
            </Select>
        </FormControl>

        <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
                label="Data de Lançamento"
                type="date"
                value={dataLancamento}
                onChange={(e) => setDataLancamento(e.target.value)}
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
            />
            
            <TextField
                label="Quantidade"
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value ? Number(e.target.value) : '')}
                fullWidth
            />
            
            <TextField
                label="Preço"
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value ? Number(e.target.value) : '')}
                fullWidth
            />
        </Box>

        <TextField
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          fullWidth
          multiline
          rows={3}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!nome || !artistaId || !formatoId}
        >
          {isEdit ? 'Salvar Alterações' : 'Adicionar'}
        </Button>
      </Box>
    </Paper>
  )
}