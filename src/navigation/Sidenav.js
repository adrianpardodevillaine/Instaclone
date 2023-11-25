import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const username = localStorage.getItem('username');
  const navigate = useNavigate(); // Hook para navegación

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth).then(() => {
      // Redirige al usuario después de cerrar sesión
      navigate('/');
    });
  };

  // Verificación de nulidad para user
  if (!user) {
    return null; // O puedes renderizar algo diferente si el usuario no está autenticado
  }

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

      <div className="sidenav__buttons">
        <Link to="/" className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/about" className="sidenav__button">
          <HelpOutlineIcon />
          <span>About us</span>
        </Link>
        <Link to="/contacts" className="sidenav__button">
          <MailOutlineIcon />
          <span>Contacts</span>
        </Link>
        <div className="sidenav__button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            <button onClick={handleLogout} className="logout__button">
              Logout
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;



