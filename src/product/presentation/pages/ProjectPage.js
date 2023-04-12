import React, { useContext } from "react";
import CrudForm from "../components/CrudForm/CrudForm";
import { Grid, Box, Snackbar } from "@mui/material";
import CrudList from "../components/CrudList/CrudList";
import logo from "../../../assets/images/sf.png";
import { SnackContext } from "../context/snackContext";

const ProjectPage = () => {
  const { open, message, handleClose } = useContext(SnackContext);
  return (
    <>
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
};

export default ProjectPage;
