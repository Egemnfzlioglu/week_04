import { NavLink ,Link,Outlet} from "react-router-dom";
import { useActions } from "../../hooks";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import { Products } from './../products/products';
import "../../index.css";

export function Header() {
  const { getCartCount, toogleCart } = useActions();

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top" >
      
      <div className="container-fluid " >
        <Link className="navbar-brand " to="/" style={{ fontSize: "1.3rem", fontWeight:"500"}}>
          React Bootcamp Restaurant Menu
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"
          style={{
            fontWeight:"500",
            fontSize: "1.2rem"
          }}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link mx-4">
              Home
              </NavLink>
            </li>
            <li className="nav-item"> 
              <NavLink to="/about" className="nav-link mx-4">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link mx-4">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button onClick={toogleCart} className="btn btn-outline-success">
              Sepetim {`(${getCartCount()})`}
            </button>
          </div>
        </div>
      </div>
     
    </nav>
  );
}
