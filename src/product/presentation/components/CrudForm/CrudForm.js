import React, { useContext, useState } from "react";
import DatePickerComponent from "../DatePicker/DatePicker";
import { CrudContext } from "../../context/crudContext";
import { Grid, Button, InputLabel, Box, Form, Input } from "@mui/material";
import StatusRadio from "../StatusRadio/StatusRadio";

const CrudForm = () => {
  const { handleAddNewItem } = useContext(CrudContext);

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

    handleAddNewItem({
      clientName,
      orderDate: orderDate,
      deliveryDate: deliveryDate,
      status: selectedStatusOption,
    });
  };

  return (
    <Box className="formWrapper">
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" sx={{ pb: 1 }}>
          <InputLabel className="formInputLabel">Nome do cliente</InputLabel>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="custom-input"
            placeholder="Nome do cliente"
          />
        </Grid>

        <Box sx={{ pb: 1 }}>
          <InputLabel>Data do pedido</InputLabel>
          <DatePickerComponent date={orderDate} setDate={setOrderDate} />
        </Box>

        <Box sx={{ pb: 1 }}>
          <InputLabel>Data da entrega</InputLabel>
          <DatePickerComponent date={deliveryDate} setDate={setDeliveryDate} />
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
