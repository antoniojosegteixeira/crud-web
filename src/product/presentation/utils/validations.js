export const nameValidation = (name) => {
  if (name && name.length >= 2) {
    return true;
  }

  if (!name) {
    return { error: "Essa informação é obrigatória" };
  }

  if (name && name.length <= 1) {
    return { error: "Insira um nome válido" };
  }
};

export const dateValidation = (date) => {
  if (date) {
    return true;
  }

  if (!date) {
    return { error: "Essa informação é obrigatória" };
  }
};
