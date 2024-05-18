import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import Contador from './pages/Contador';
import Exchange from './pages/Exchange';

function App() {
  const [contador, setContador] = useState(true)

  return (
    <>


      <Box sx={{ width: 500, textAlign: 'center' }}>
        <h1>{
          contador ? 'Contador' : "Conversor de moedas"
        }</h1>
        <BottomNavigation sx={{ backgroundColor: 'transparent', marginBottom: '1rem' }}>
          <BottomNavigationAction onClick={() => {
            setContador(true)
          }} label="Favorites" icon={<PlusOneIcon sx={{ color: 'white' }} />} />
          <BottomNavigationAction onClick={() => {
            setContador(false)
          }} label="Recents" icon={<AccountBalanceIcon sx={{ color: 'white' }} />} />
        </BottomNavigation>
        {
          contador ? <Contador /> : <Exchange />
        }
      </Box>
    </>
  )
}

export default App
