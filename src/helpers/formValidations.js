export const emailValidations = {
  required: {
    value: true,
    message: "Email es requerido.",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Formato de Email inválido.",
  },
};

export const passwordValidations = {
  required: {
      value: true,
      message: "Password es requerida.",
  },
  minLength: {
      value: 2,
      message: "Nombre debe contener al menos 2 caracteres.",
  },
  maxLength: {
      value: 64,
      message: "Tamaño máximo debe ser de 64 caracteres.",
  }
};
