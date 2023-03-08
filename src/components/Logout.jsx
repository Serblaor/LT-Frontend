import React, { useState } from "react";
import { Link} from "react-router-dom";

function LogoutButton() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    React.auth().signOut()
      .then(() => {
        // El usuario ha cerrado sesión correctamente
        setIsLoggedOut(true);
      })
      .catch((error) => {
        // Hubo un error al cerrar la sesión
      });
  };

  const handleLogin = () => {
    setIsLoggedOut(false);
  }

  if (isLoggedOut) {
    return <Link to="/login" onClick={handleLogin} />;
  }

  return (
    <button onClick={handleLogout}>
    </button>
  );
}

export default LogoutButton;