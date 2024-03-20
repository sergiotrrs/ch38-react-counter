
import Gene from '../generation/generation';
// import { Greeting as Gree } from './components/generation/generation';
import { Greeting } from '../generation/generation';

export const PrimerosPasos = () => {
  return (
    <>
      <Gene style={{ color: "purple", fontSize: "2rem" }}></Gene>
      <Gene style={{ color: "cyan", fontSize: "4rem" }} />
      <a href="url">My url</a>
      <p href="url">My paragraph</p>
      <Greeting name="Uli" styleColor="blue" />
      <Greeting name="Jetzel" styleColor="red" />
    </>
  );
};
