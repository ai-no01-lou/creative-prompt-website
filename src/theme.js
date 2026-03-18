import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#8a63ff' },
    text: { primary: '#2e2340', secondary: '#665a7a' }
  },
  typography: {
    fontFamily: '"Nunito", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    h3: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 700,
      letterSpacing: 0.2
    }
  },
  shape: {
    borderRadius: 16
  }
});

export default theme;
