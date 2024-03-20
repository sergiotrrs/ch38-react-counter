import "./App.css";
import { Footer } from "./components/footer/footer";
import { PrimerosPasos } from "./components/generation/primerosPasos";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <PrimerosPasos />

      <Footer />
    </>
  );
}

export default App;
