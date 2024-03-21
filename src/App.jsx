import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./components/counter/counter";
import { Footer } from "./components/footer/footer";
import { PrimerosPasos } from "./components/generation/primerosPasos";
import { Navbar } from "./components/navbar/navbar";
import { NotFound } from "./components/404/notFound";
import { About } from "./components/about/about";
import { Home } from "./components/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>

          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="about" element={<About />} />
          <Route path="primeros-pasos" element={ <PrimerosPasos /> } />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
