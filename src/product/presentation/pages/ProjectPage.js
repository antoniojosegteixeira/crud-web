import React from "react";
import { CrudContextProvider } from "../context/crudContext";
import CrudForm from "../components/CrudForm/CrudForm";
import { Grid, Box } from "@mui/material";
import CrudList from "../components/CrudList/CrudList";
import logo from "../../../assets/images/sf.png";

const ProjectPage = () => {
  return (
    <CrudContextProvider>
      <Box>
        <img src={logo} style={{ width: "200px", height: "100px" }} />
      </Box>

      <Grid container columnSpacing={2} rowSpacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={6}>
          <CrudForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <CrudList />
        </Grid>
      </Grid>
    </CrudContextProvider>
  );
};

export default ProjectPage;
