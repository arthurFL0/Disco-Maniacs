import { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'

interface linksInfo  {
    url : string,
    descricao : string
}

export function NavDropDown({ label, info }: { label: string, info: linksInfo[] }) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const open = Boolean(anchor)

  return (
    <>
      <Button
        sx={{ color: 'white' }}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={(e) => setAnchor(e.currentTarget)}
      >
        {label}
      </Button>

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {
          info.map((info)=>{
              return <MenuItem key={info.url}  to={info.url}  component={Link} onClick={() => setAnchor(null)}>{info.descricao}</MenuItem>
          })
        }
      </Menu>
    </>
  )
}