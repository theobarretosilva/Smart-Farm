import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { Router } from './router/Routes'
import { muiTheme } from './styles/mui-theme'

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
