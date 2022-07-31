import { Container } from "@mui/material";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Routes />
      </Container>
    </div>
  );
}

export default App;
