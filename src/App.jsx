import "./App.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.js";
import Products from "./components/Products";

function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Products />
    </MantineProvider>
  );
}
export default App;
