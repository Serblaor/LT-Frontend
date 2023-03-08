import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import "../css/formulario.css"




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Formulario() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [direccion, setDireccion] = useState('');
  const [phone, setPhone] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crea un objeto con los datos del formulario
    const formData = {
      name: name,
      nit: nit,
      direccion: direccion,
      phone: phone
    };

    // Envía una solicitud POST para crear una nueva compañía
    axios.post('http://localhost:9000/api/company', formData)
    .then(response => {
      console.log(response.data);
      setOpenSnackbar(true);
      setSnackbarMessage('¡Empresa registrada con éxito!');
      navigate('/home'); // Reemplaza 'nueva-ruta' con la ruta deseada
    })
    .catch(error => {
      console.log(error);
    });
}

  return (
    <>
    <h1> Formulario para empresas </h1>
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField id="name" label="Nombre" required value={name} onChange={(event) => setName(event.target.value)} />
      <TextField id="nit" label="NIT" required value={nit} onChange={(event) => setNit(event.target.value)} />
      <TextField id="direccion" label="Dirección" required value={direccion} onChange={(event) => setDireccion(event.target.value)} />
      <TextField id="phone" label="Teléfono" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(event) => setPhone(event.target.value)} />
      <Button variant="contained" color="primary" className={classes.button} type="submit">
        Enviar
      </Button>
    </form>
    <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)} message={snackbarMessage} />
    </>
  );
}

export default Formulario;