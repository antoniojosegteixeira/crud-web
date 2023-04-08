import React, { useContext } from "react";
import { CrudContext } from "../../context/crudContext";
import { Box } from "@mui/system";
import { List, Typography } from "@mui/material";
import CrudListItem from "../CrudListItem/CrudListItem";

const CrudList = () => {
  const { items } = useContext(CrudContext);

  return (
    <Box className="formWrapper">
      <List sx={{ padding: 0 }}>
        <Typography variant="h6" align="center" color="#4e4e4e">
          Lista de produtos
        </Typography>
        {items.map((item) => (
          <CrudListItem item={item} key={item.id} />
        ))}
      </List>
    </Box>
  );
};

export default CrudList;
