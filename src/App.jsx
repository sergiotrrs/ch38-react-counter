import "./App.css";
import { Counter } from "./components/counter/counter";
import { Footer } from "./components/footer/footer";
import { PrimerosPasos } from "./components/generation/primerosPasos";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />

      <Counter />
      <PrimerosPasos />

      <Footer />
    </>
  );
}

export default App;
