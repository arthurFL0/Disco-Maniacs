import { paisesOrigemMock } from "../mock/pais-origem-mock"
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Box, TextField
} from '@mui/material'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function ListaPaisOrigem() {
  const [paises, setPaises] = useState(paisesOrigemMock);
  const [filtro, setFiltro] = useState('');
  const [paisesFiltrados, setPaisesFiltrados] = useState(paises)

  function excluirPais(id : number){
    const paisesAtt = paises.filter((p)=> {
        return p.id !== id;
    })
    setPaises(paisesAtt);
  }

  useEffect(() => {
    setPaisesFiltrados(
      paises.filter((p) =>
        p.nome.toLowerCase().includes(filtro.toLowerCase())
      )
    )
  }, [filtro, paises])

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
          {paisesFiltrados.map((pais) => (
            <TableRow key={pais.id}>
              <TableCell>{pais.id}</TableCell>
              <TableCell>{pais.nome}</TableCell>
              <TableCell align="center">
                <Button to={`editar/${pais.id}`}  component={Link} variant="contained" size="small">
                  Editar
                </Button>
                <Button onClick={() => pais.id && excluirPais(pais.id)} variant="contained" color="error" size="small" sx={{marginLeft: 1}}>
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