import { useState } from "react";
import Link from "../Link/Link";
import {CgMenuLeftAlt} from "react-icons/cg";
import {GrClose } from "react-icons/Gr";

const NavBar = () => {
  
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products/:id", name: "ProductDetails" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  
  return (
    <nav>
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {
          open === true ? <GrClose></GrClose> : <CgMenuLeftAlt></CgMenuLeftAlt>
        }
      </div>
      <ul className={`md:flex 
      ${open ? '' : 'hidden'}
      absolute md:static py-8 gap-3 text-2xl bg-red-400`}>
        {
          routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
