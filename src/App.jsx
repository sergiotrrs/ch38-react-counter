
import './App.css'
import Gene from './components/generation/generation';
// import { Greeting as Gree } from './components/generation/generation';
import { Greeting } from './components/generation/generation';
  
function App() {
  return (
        <div>
          <Gene style={ {color:"purple", fontSize:"2rem" } }   ></Gene>
          <Gene style={ {color:"cyan"  , fontSize:"4rem" } } />
          <a href="url" >My url</a>
          <p href="url" >My paragraph</p>
          <Greeting name="Uli" styleColor="blue" />
          <Greeting name="Jetzel" styleColor="red" />
        </div> 
  )}

export default App;
