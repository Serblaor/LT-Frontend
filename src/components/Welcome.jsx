import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:9000/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <div className={styles.welcome}>
      <h3>{name ? `¡Felicitaciones ${name}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
      <h2>
        {name ? "Te pudiste logear correctamente🎉" : "Ahora prueba estas opciones..."}
      </h2>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/Home")}>Home</button>
        <button onClick={() => navigate("/FormularioEmpresas")}>Registrar datos</button>
        <button onClick={() => navigate("/productostable")}>Productos</button>
        
      </div>
    </div>
  );
};

export default Welcome;
