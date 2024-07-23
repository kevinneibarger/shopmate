import { Link, NavLink} from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";

export const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={Logo} className="mr-2 h-8 sm:h-9" alt="Shopmate Logo"/>
                <span
                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping Cart </span>
            </Link>
            <nav className="navigation">
                <NavLink to="/" className="link" end>Home</NavLink>
                <NavLink to="/cart" className="link">Cart</NavLink>
            </nav>

            <Link to="/cart" className="items">
                <span>Cart:2</span>
            </Link>
        </header>
    )
}