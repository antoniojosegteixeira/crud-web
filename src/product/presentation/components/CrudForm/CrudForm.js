import React, { useContext, useState } from "react";
import DatePickerComponent from "../DatePicker/DatePicker";
import { CrudContext } from "../../context/crudContext";
import {
  Grid,
  Button,
  InputLabel,
  Box,
  Form,
  Input,
  Typography,
} from "@mui/material";
import StatusRadio from "../StatusRadio/StatusRadio";
import { dateValidation, nameValidation } from "../../utils/validations";
import useValidation from "../../hooks/useItems";

const CrudForm = () => {
  const { handleAddNewItem } = useContext(CrudContext);
  const {
    checkFieldValidations,
    clientNameValidation,
    setClientNameValidation,
    orderDateValidation,
    setOrderDateValidation,
    deliveryDateValidation,
    setDeliveryDateValidation,
  } = useValidation();

  // Item creation form variables
  const [clientName, setClientName] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [selectedStatusOption, setStatusSelectedOption] = useState("pendente");

  // Status option changes
  const handleStatusOptionChange = (event) => {
    setStatusSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const isValid = checkFieldValidations(clientName, orderDate, deliveryDate);

    if (isValid) {
      handleAddNewItem({
        clientName,
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        status: selectedStatusOption,
      });
    }
  };

  // Reset validation and set new value for client name
  const handleNameChange = (value) => {
    setClientNameValidation("");
    setClientName(value);
  };

  return (
    <Box className="formWrapper">
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" sx={{ pb: 1 }}>
          <InputLabel className="formInputLabel">Nome do cliente</InputLabel>
          <input
            type="text"
            value={clientName}
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
            <DatePickerComponent date={orderDate} setDate={setOrderDate} />
          </Box>

          <Typography variant="caption" sx={{ color: "red" }}>
            {orderDateValidation?.error}
          </Typography>
        </Box>

        <Box sx={{ pb: 1 }}>
          <InputLabel>Data da entrega</InputLabel>
          <Box onClick={() => setDeliveryDateValidation("")}>
            <DatePickerComponent
              date={deliveryDate}
              setDate={setDeliveryDate}
            />
          </Box>

          <Typography variant="caption" sx={{ color: "red" }}>
            {deliveryDateValidation?.error}
          </Typography>
        </Box>

        <Box sx={{ pb: 1 }}>
          <InputLabel>Status</InputLabel>
          <StatusRadio
            selectedStatusOption={selectedStatusOption}
            handleStatusOptionChange={handleStatusOptionChange}
          />
        </Box>

        <Button type="submit" variant="contained">
          Adicionar produto
        </Button>
      </form>
    </Box>
  );
};

export default CrudForm;
