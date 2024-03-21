import { Outlet } from "react-router-dom";


export const Navbar = () => {
  console.log("Soy el componente Navbar y me renderizo");
  return (
    <>
      <nav>
        Navegación
      </nav>

      <Outlet />

    </>
  );
};
