import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./components/layout";

const theme = createTheme({
  typography: {
    fontFamily: `"Roboto Slab", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
