import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { Button } from '@material-ui/core';
import html2canvas from 'html2canvas';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '2rem 0',
    textAlign: 'center',
    alignContent: 'center',
    textShadow: '2px 2px #006494',
  },
  table: {
    backgroundColor: '#fff',
    color: '#fff',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    maxWidth: '80%',
  },
}));

function ProductosTable() {
  const [productos, setProductos] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const classes = useStyles();

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/product')
      .then((response) => setProductos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleOpen = (imgURL) => {
    setSelectedImg(imgURL);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const downloadPDF = () => {
    const input = document.getElementById('productos-table');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 180, 240);
      pdf.save('productos.pdf');
    });
  };

  return (
    <>
    <TableContainer id="productos-table">
      <Typography variant="h1" className={classes.title}>
        Productos
      </Typography>
      <Grid container spacing={2}>
        {productos.map((producto) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={producto.name}>
            <Paper className={classes.table}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Categoría</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Imagen</TableCell>
                      <TableCell>Empresa</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{producto.name}</TableCell>
                      <TableCell>{producto.category}</TableCell>
                      <TableCell>{producto.price}</TableCell>
                      <TableCell>
                        <img
                          src={producto.imgURL}
                          alt={producto.name}
                          className={classes.img}
                          onClick={() => handleOpen(producto.imgURL)}
                        />
                      </TableCell>
                      <TableCell>{producto.company}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <img src={selectedImg} alt="" className={classes.img} cursor="pointer" />
            </div>
          </Fade>
        </Modal>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={downloadPDF}>
        Descargar PDF
        </Button>
      
    </>
  );
}
      
      
      export default ProductosTable;