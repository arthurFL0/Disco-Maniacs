import { AppBar, Toolbar, Container, Box } from '@mui/material'
import styles from "./Header.module.css"
import type {ReactNode} from 'react'
import { Link } from 'react-router-dom'

type Props = { children: ReactNode }

export function Header({ children }: Props) {
  return (
    <AppBar position="static" sx={{ px: 4, py: 2 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className={styles.discoFont}>DISCO-MANÍACOS</h1>
          </Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {/* {navItems.map((item) => (
              <NavDropDown key={item} label={item} />
            ))} */}
            {children}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}