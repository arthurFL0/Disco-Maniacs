import { artistasMock } from "../mock/artista-mock"
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Box, TextField
} from '@mui/material'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function ListaArtista() {
  const [artistas, setArtistas] = useState(artistasMock);
  const [filtro, setFiltro] = useState('');
  const [artistasFiltrados, setArtistasFiltrados] = useState(artistas)

  // useEffect(() => {
  //   setArtistas(artistasMock)
  // }, [])

  function excluirArtista(id : number){
    const artistasAtt = artistas.filter((a)=> {
        return a.id !== id;
    })
    setArtistas(artistasAtt);
  }

  useEffect(() => {
    setArtistasFiltrados(
      artistas.filter((a) =>
        a.nome.toLowerCase().includes(filtro.toLowerCase())
      )
    )
  }, [filtro, artistas])

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
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artistasFiltrados.map((artista) => (
            <TableRow key={artista.id}>
              <TableCell>{artista.id}</TableCell>
              <TableCell>{artista.nome}</TableCell>
              <TableCell align="center">
                <Button to={`editar/${artista.id}`}  component={Link} variant="contained" size="small">
                  Editar
                </Button>
                <Button onClick={() => excluirArtista(artista.id)} variant="contained" color="error" size="small" sx={{marginLeft: 1}}>
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