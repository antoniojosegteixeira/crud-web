import React, { createContext, useState } from "react";

export const SnackContext = createContext();

export const SnackContextProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const handleOpen = (message) => {
    setOpen(true);
    setMessage(message);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackContext.Provider
      value={{
        handleOpen,
        handleClose,
        open,
        message,
      }}
    >
      {props.children}
    </SnackContext.Provider>
  );
};
