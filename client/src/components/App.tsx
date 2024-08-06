import "./base.scss";
import { Counter } from "./shared/Counter";
import { Container } from "./shared/Container";
import { Clicker } from "./shared/Clicker";
import { EnergyBar } from "./shared/EnergyBar";

function App() {
  return (
    <Container>
      <Counter />
      <Clicker />
      <EnergyBar />
    </Container>
  );
}

export default App;
