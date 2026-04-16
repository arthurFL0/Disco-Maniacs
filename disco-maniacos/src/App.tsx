import './App.css'
import { AppRoutes } from './routes'
import { Header } from './components/header/Header'
import {Container, Box} from '@mui/material'
import {NavDropDown} from './components/navDrop/NavDropDown'

function App() {

  return (
    <>
      <Header>
        <NavDropDown label={'Catálago'} info = {[{descricao: 'Cadastrar', url: '/produtos/adicionar'}, {descricao:'Listar', url: '/produtos'}]}/>
        <NavDropDown label={'Artista'}  info = {[{descricao: 'Cadastrar', url: '/artistas/adicionar'}, {descricao:'Listar', url: '/artistas'}]}/>
        <NavDropDown label={'Gêneros'}  info = {[{descricao: 'Cadastrar', url: '/generos/adicionar'},  {descricao:'Listar', url: '/generos'}]}/>
        <NavDropDown label={'Formatos'} info = {[{descricao: 'Cadastrar', url: '/formatos/adicionar'}, {descricao:'Listar', url: '/formatos'}]}/>
        <NavDropDown label={'País Origem'} info = {[{descricao: 'Cadastrar', url: '/paises-origem/adicionar'}, {descricao:'Listar', url: '/paises-origem'}]}/>
        <NavDropDown label={'Vendas'}   info = {[{descricao: 'Realizar Venda', url: '/vendas/realizar'}, {descricao:'Listar', url: '/vendas'}]}/>
      </Header>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
             <AppRoutes/>
        </Box>
      </Container>
     
    </>
  )
}

export default App
