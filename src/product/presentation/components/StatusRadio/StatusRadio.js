import React from "react";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";

function StatusRadio({ selectedStatusOption, handleStatusOptionChange }) {
  return (
    <Box>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="pendente"
          name="radio-buttons-group"
          value={selectedStatusOption}
          onChange={handleStatusOptionChange}
        >
          <FormControlLabel
            value="pendente"
            control={<Radio />}
            label="Pendente"
          />
          <FormControlLabel
            value="entregue"
            control={<Radio />}
            label="Entregue"
          />
          <FormControlLabel
            value="cancelado"
            control={<Radio />}
            label="Cancelado"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default StatusRadio;
