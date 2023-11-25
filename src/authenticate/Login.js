import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setError("Email inválido. Por favor, verifica tu dirección de correo.");
            break;
          case "auth/user-disabled":
            setError("Esta cuenta ha sido deshabilitada. Contacta al soporte para obtener ayuda.");
            break;
          case "auth/user-not-found":
          case "auth/wrong-password":
            setError("Credenciales inválidas. Verifica tu email y contraseña.");
            break;
          default:
            setError("Ha ocurrido un error durante el inicio de sesión. Por favor, inténtalo de nuevo.");
            break;
        }
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>

      {}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;

