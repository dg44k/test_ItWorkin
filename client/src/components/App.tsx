import "./base.scss";
import { Counter } from "./shared/Counter";
import { Container } from "./shared/Container";
import { Clicker } from "./shared/Clicker";
import { EnergyBar } from "./shared/EnergyBar";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    
  })
  return (
    <Container>
      <Counter />
      <Clicker />
      <EnergyBar />
    </Container>
  );
}

export default App;
