import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2c2c58', // cor do AppBar
      contrastText: '#ffffff', // cor do texto
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid #333',
        },
      },
    },
  },
})