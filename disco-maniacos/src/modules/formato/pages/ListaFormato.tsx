import { formatosMock } from "../mock/formato-mock"
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Box, TextField
} from '@mui/material'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function ListaFormato() {
  const [formatos, setFormatos] = useState(formatosMock);
  const [filtro, setFiltro] = useState('');
  const [formatosFiltrados, setFormatosFiltrados] = useState(formatos)

  function excluirFormato(id: number | null) {
    if (id === null) return;
    const formatosAtt = formatos.filter((f) => {
        return f.id !== id;
    })
    setFormatos(formatosAtt);
  }

  useEffect(() => {
    setFormatosFiltrados(
      formatos.filter((f) =>
        f.nome.toLowerCase().includes(filtro.toLowerCase())
      )
    )
  }, [filtro, formatos])

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
            {formatosFiltrados.map((formato) => (
              <TableRow key={formato.id}>
                <TableCell>{formato.id}</TableCell>
                <TableCell>{formato.nome}</TableCell>
                <TableCell align="center">
                  <Button to={`editar/${formato.id}`} component={Link} variant="contained" size="small">
                    Editar
                  </Button>
                  <Button onClick={() => formato.id && excluirFormato(formato.id)} variant="contained" color="error" size="small" sx={{ marginLeft: 1 }}>
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
