
import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/categoria/1">chicas</NavLink>
      <NavLink to="/categoria/2">grandes</NavLink>
      <NavLink to="/categoria/3">medianas</NavLink>
    </nav>
  );
};


export default NavBar;