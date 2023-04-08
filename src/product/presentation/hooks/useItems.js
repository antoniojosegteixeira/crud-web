import { useState, useEffect } from "react";
import { dateValidation, nameValidation } from "../utils/validations";

function useValidation() {
  const [clientNameValidation, setClientNameValidation] = useState("");
  const [orderDateValidation, setOrderDateValidation] = useState("");
  const [deliveryDateValidation, setDeliveryDateValidation] = useState("");

  const checkFieldValidations = (clientName, orderDate, deliveryDate) => {
    const currentNameValidation = nameValidation(clientName);
    const currentOrderDateValidation = dateValidation(orderDate);
    const currentDeliveryDateValidation = dateValidation(deliveryDate);

    setClientNameValidation(currentNameValidation);
    setOrderDateValidation(currentOrderDateValidation);
    setDeliveryDateValidation(currentDeliveryDateValidation);

    if (
      currentNameValidation === true &&
      currentOrderDateValidation === true &&
      currentDeliveryDateValidation === true
    ) {
      return true;
    }
  };

  return {
    checkFieldValidations,
    clientNameValidation,
    setClientNameValidation,
    orderDateValidation,
    setOrderDateValidation,
    deliveryDateValidation,
    setDeliveryDateValidation,
  };
}

export default useValidation;
