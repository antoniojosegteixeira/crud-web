import React, { useContext, useState } from "react";
import { CrudContext } from "../../context/crudContext";
import StatusRadio from "../StatusRadio/StatusRadio";
import DatePickerComponent from "../DatePicker/OrderDatePicker";
import { Card, Box } from "@mui/material";

import {
  Grid,
  InputLabel,
  ListItem,
  Button,
  Typography,
  capitalize,
} from "@mui/material";
import useValidation from "../../hooks/useItems";
import OrderDatePicker from "../DatePicker/OrderDatePicker";
import DeliveryDatePicker from "../DatePicker/DeliveryDatePicker";

const CrudListItem = ({ item }) => {
  const {
    handleUpdateItem,
    handleDeleteItem,
    updatingItemId,
    setUpdatingItemId,
  } = useContext(CrudContext);

  const {
    checkFieldValidations,
    clientNameValidation,
    setClientNameValidation,
    orderDateValidation,
    setOrderDateValidation,
    deliveryDateValidation,
    setDeliveryDateValidation,
  } = useValidation();

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
        // Check input validation
        const isValid = checkFieldValidations(
          clientNameEdit,
          orderDateEdit,
          deliveryDateEdit
        );

        if (isValid) {
          handleUpdateItem({
            id: id,
            clientName: clientNameEdit,
            orderDate: new Date(orderDateEdit),
            deliveryDate: new Date(deliveryDateEdit),
            status: selectedStatusOptionEdit,
          });
        }
      }
    }
  };

  const handleStatusOptionEditChange = (event) => {
    setStatusSelectedOptionEdit(event.target.value);
  };

  // Reset validation and set new value for client name
  const handleNameChange = (value) => {
    setClientNameValidation("");
    setClientNameEdit(value);
  };

  console.log(item.orderDate, item.deliveryDate);
  return (
    <ListItem
      key={item.id}
      sx={{
        borderRadius: "4px",
        mb: 0.5,
        py: 1,
        px: 2,
        justifyContent: "space-between",
        backgroundColor: "#fbfbfb",
        boxShadow: "rgba(149, 157, 165, 0.15) 0px 3px 6px 0px",
      }}
    >
      {updatingItemId !== item.id && (
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold", pt: 1 }}>
              {item.clientName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Id: {item.id}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Data do pedido:{" "}
              {item.orderDate && new Date(item.orderDate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Data de entrega:{" "}
              {item.deliveryDate &&
                new Date(item.deliveryDate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Status: {capitalize(item.status)}
            </Typography>
          </Grid>
        </Grid>
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
                onChange={(e) => handleNameChange(e.target.value)}
                className="custom-input"
                placeholder="Nome do cliente"
              />
              <Typography variant="caption" sx={{ color: "red" }}>
                {clientNameValidation?.error}
              </Typography>
            </Grid>

            <Box sx={{ pb: 1 }}>
              <InputLabel>Data do pedido</InputLabel>
              <Box onClick={() => setOrderDateValidation("")}>
                <OrderDatePicker
                  date={orderDateEdit}
                  setDate={setOrderDateEdit}
                />
              </Box>
              <Typography variant="caption" sx={{ color: "red" }}>
                {orderDateValidation?.error}
              </Typography>
            </Box>

            <Box sx={{ pb: 1 }}>
              <InputLabel>Data da entrega</InputLabel>
              <Box onClick={() => setDeliveryDateValidation("")}>
                <DeliveryDatePicker
                  date={deliveryDateEdit}
                  setDate={setDeliveryDateEdit}
                  startingDate={orderDateEdit}
                />
              </Box>
              <Typography variant="caption" sx={{ color: "red" }}>
                {deliveryDateValidation?.error}
              </Typography>
            </Box>

            <Box sx={{ pb: 1 }}>
              <InputLabel>Status</InputLabel>
              <StatusRadio
                selectedStatusOption={selectedStatusOptionEdit}
                handleStatusOptionChange={handleStatusOptionEditChange}
              />
            </Box>
            {updatingItemId === item.id && (
              <Box>
                <Button onClick={() => handleUpdateRequest(item.id)}>
                  Salvar
                </Button>
                <Button onClick={() => handleDeleteItem(item.id)}>
                  Deletar
                </Button>
              </Box>
            )}
          </form>
        </Box>
      )}

      {updatingItemId !== item.id && (
        <Box>
          <Button onClick={() => handleUpdateRequest(item.id)}>Editar</Button>
          <Button onClick={() => handleDeleteItem(item.id)}>Deletar</Button>
        </Box>
      )}
    </ListItem>
  );
};

export default CrudListItem;
