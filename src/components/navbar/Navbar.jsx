import "./navbar.css";
import logo from "../../assets/images/airbnb-logo.png";
export const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="Airbnb logo" className="logo-img" />
      </nav>
    </>
  );
};
