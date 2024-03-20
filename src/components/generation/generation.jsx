
/**
 *  El nombre del componente debe 
 *  respetar la convención UpperCamelCase
 */
const Generation = ( props ) =>{

    return (
    <div>
      <p style={ props.style  } > Generation1 </p>
      <p style={{color: props.style.color, fontSize: props.style.fontSize}}>Generation2</p>
    
    </div>
    );
}

// Para recibir las propiedades, en el componente
// las vamos a recibir en el primer parámetro de la función
// se reciben como un objeto { key: value, prop1: valu1, prop2, valu2 }
const Greeting = ( props   ) => {
  const nombre = "Miguel";

 /*
  Los estilos en jsx se agregan como objetos de javaScript
 */

  return (
    <div>
      { /* Mi comentario */  }
      <p  style= { {color: props.styleColor , fontSize:"3rem"} } >Hola { props.name } </p>
    </div>
  );
};

// exportación nombrada
// export { Generation };
export { Greeting };

// exporrtación por default
export default Generation;