import React, { useContext } from "react";
import { CrudContext } from "../../context/crudContext";
import { Box } from "@mui/system";
import { List } from "@mui/material";
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
