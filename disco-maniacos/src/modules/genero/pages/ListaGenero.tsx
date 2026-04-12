import { generosMock } from "../mock/genero-mock"
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Box, TextField
} from '@mui/material'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function ListaGenero() {
  const [generos, setGeneros] = useState(generosMock);
  const [filtro, setFiltro] = useState('');
  const [generosFiltrados, setGenerosFiltrados] = useState(generos)

  function excluirGenero(id: number | null) {
    if (id === null) return;
    const generosAtt = generos.filter((g) => {
        return g.id !== id;
    })
    setGeneros(generosAtt);
  }

  useEffect(() => {
    setGenerosFiltrados(
      generos.filter((g) =>
        g.nome.toLowerCase().includes(filtro.toLowerCase())
      )
    )
  }, [filtro, generos])

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Pesquisar por nome"
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
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Gênero Pai</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {generosFiltrados.map((genero) => (
              <TableRow key={genero.id}>
                <TableCell>{genero.id}</TableCell>
                <TableCell>{genero.nome}</TableCell>
                <TableCell>{genero.descricao}</TableCell>
                <TableCell>{genero.GeneroPai ? genero.GeneroPai.nome : '-'}</TableCell>
                <TableCell align="center">
                  <Button to={`editar/${genero.id}`} component={Link} variant="contained" size="small">
                    Editar
                  </Button>
                  <Button onClick={() => excluirGenero(genero.id)} variant="contained" color="error" size="small" sx={{ marginLeft: 1 }}>
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