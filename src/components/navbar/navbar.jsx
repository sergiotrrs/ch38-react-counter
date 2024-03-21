import { Outlet } from "react-router-dom";

const pages = [
  {id: 1, name: "Home"  , url: "/" },
  {id: 2, name: "Counter", url: "/counter"},
  {id: 3, name: "Primeros Pasos", url: "/primeros-pasos"},
  {id: 4, name: "About Us", url: "/about"}
];
/*
 Cuando se renderiza una lista de elementos, es importante
 proporcionar una prop "key" única a cada elemento de la lista.
 Esto permite a React realizar una actualización eficiente
 y optimizada de la interfaz de usuario cuando cambia el
 contenido de la lista.

*/
export const Navbar = () => {
  console.log("Soy el componente Navbar y me renderizo");
  return (
    <>
      <h2>Empresa</h2>
      <nav>
        <ul>
          {/* <li><a href="url"> Nombre Link </a></li> */}
          {  pages.map( (page)=> <li key={page.id}><a href={page.url} >{page.name}</a></li> ) }

        </ul>
      </nav>

      <Outlet />

    </>
  );
};
