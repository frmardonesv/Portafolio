import { ThemeProvider } from "styled-components";
import "./app.css";

import {
  Navbar,
  Home,
  About,
  Skills,
  Projects,
  Contacto,
  Footer,
} from "./components";

import { theme } from "./utils/queries";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacto />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
