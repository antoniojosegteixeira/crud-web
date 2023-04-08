import React, { useContext, useState } from "react";
import { CrudContext } from "../../context/crudContext";
import StatusRadio from "../StatusRadio";
import DatePickerComponent from "../DatePicker/DatePicker";
import { Box } from "@mui/system";
import { Grid, InputLabel, List, ListItem, Button } from "@mui/material";
import CrudListItem from "../CrudListItem/CrudListItem";

const CrudList = () => {
  const { items } = useContext(CrudContext);

  return (
    <Box className="formWrapper">
      <List>
        {items.map((item) => (
          <CrudListItem item={item} key={item.id} />
        ))}
      </List>
    </Box>
  );
};

export default CrudList;
