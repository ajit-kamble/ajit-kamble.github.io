import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./components/layout";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: "4px",
          padding: "4px",
        },
      },
    },
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
