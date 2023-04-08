import React, { useContext, useState } from "react";
import { CrudContext } from "../../context/crudContext";
import StatusRadio from "../StatusRadio/StatusRadio";
import DatePickerComponent from "../DatePicker/DatePicker";
import { Box } from "@mui/system";
import { Grid, InputLabel, ListItem, Button, Typography } from "@mui/material";

const CrudListItem = ({ item }) => {
  const {
    handleUpdateItem,
    handleDeleteItem,
    updatingItemId,
    setUpdatingItemId,
  } = useContext(CrudContext);

  // Variables used to hold editing data
  const [clientNameEdit, setClientNameEdit] = useState(item.clientName);
  const [orderDateEdit, setOrderDateEdit] = useState(
    Date.parse(item.orderDate)
  );
  const [deliveryDateEdit, setDeliveryDateEdit] = useState(
    Date.parse(item.deliveryDate)
  );
  const [selectedStatusOptionEdit, setStatusSelectedOptionEdit] = useState(
    item.status
  );

  const handleUpdateRequest = (id) => {
    if (updatingItemId !== id) {
      setUpdatingItemId(id);
      return;
    } else {
      if (id) {
        handleUpdateItem({
          id: id,
          clientName: clientNameEdit,
          orderDate: orderDateEdit,
          deliveryDate: deliveryDateEdit,
          status: selectedStatusOptionEdit,
        });
      }
    }
  };

  const handleStatusOptionEditChange = (event) => {
    setStatusSelectedOptionEdit(event.target.value);
  };

  return (
    <ListItem
      key={item.id}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        mb: 0.5,
        justifyContent: "space-between",
      }}
    >
      {updatingItemId !== item.id && (
        <Box>
          <Typography>{item.clientName}</Typography>
        </Box>
      )}

      {updatingItemId === item.id && (
        <Box>
          <form>
            <Grid container direction="column" sx={{ pb: 1 }}>
              {updatingItemId === item.id && (
                <Box>
                  <Typography variant="h6">{`Editando - ${item.clientName}`}</Typography>
                </Box>
              )}
              <InputLabel className="formInputLabel">
                Nome do cliente
              </InputLabel>
              <input
                type="text"
                value={clientNameEdit}
                onChange={(e) => setClientNameEdit(e.target.value)}
                className="custom-input"
                placeholder="Nome do cliente"
              />
            </Grid>

            <Box sx={{ pb: 1 }}>
              <InputLabel>Data do pedido</InputLabel>
              <DatePickerComponent
                date={orderDateEdit}
                setDate={setOrderDateEdit}
              />
            </Box>

            <Box sx={{ pb: 1 }}>
              <InputLabel>Data da entrega</InputLabel>
              <DatePickerComponent
                date={deliveryDateEdit}
                setDate={setDeliveryDateEdit}
              />
            </Box>

            <Box sx={{ pb: 1 }}>
              <InputLabel>Status</InputLabel>
              <StatusRadio
                selectedStatusOption={selectedStatusOptionEdit}
                handleStatusOptionChange={handleStatusOptionEditChange}
              />
            </Box>
          </form>
        </Box>
      )}

      <Box>
        {updatingItemId === item.id ? (
          <Button onClick={() => handleUpdateRequest(item.id)}>Salvar</Button>
        ) : (
          <Button onClick={() => handleUpdateRequest(item.id)}>Editar</Button>
        )}

        <Button onClick={() => handleDeleteItem(item.id)}>Deletar</Button>
      </Box>
    </ListItem>
  );
};

export default CrudListItem;
