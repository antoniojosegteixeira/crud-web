import { ListItem, ListItemText, Divider, Grid, Button } from "@mui/material";
import React from "react";

const ListComponent = (props) => {
  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginTop: "0px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ListItemText
              primary={props.clientName}
              sx={{ "& span": { fontWeight: "bold" } }}
            />
            <ListItemText primary={props.date} />
            <ListItemText primary={props.deliveryDate} />
            <ListItemText primary={props.status} />
          </Grid>
          <Grid item xs={2}>
            <Button>Apagar</Button>
            <Button>Editar</Button>
          </Grid>
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ListComponent;
