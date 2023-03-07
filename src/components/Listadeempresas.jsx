
import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@material-ui/core";
import NavBar from "./Navbar";
import "../css/css.mu.css";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/company")
      .then((response) => setCompanies(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="pry2">
    <div className="nav">
    <NavBar/>
    </div>
    <>
    </>
    <div className="list">
      <h1>Empresas</h1>
    <List>
      {companies.map((company) => (
        <ListItem key={company.id}>
          <ListItemText primary={company.name} secondary={company.direccion} />
        </ListItem>
      ))}
    </List>
    </div>
    </div>
    </>
  );
}


export default CompanyList;