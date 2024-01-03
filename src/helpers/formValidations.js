export const fullNameValidations = {
  required: {
    value: true,
    message: "Nombre Completo es requerido.",
  },
  minLength: {
    value: 2,
    message: "Nombre Completo debe contener al menos 2 caracteres.",
  },
  maxLength: {
    value: 64,
    message: "Nombre Completo debe contener menos de 64 caracteres.",
  },
  pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: "Nombre Completo inválido.",
  },
};

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

export const passwordValidations = (field = "Password") => {
  return {
    required: {
      value: true,
      message: `${field} es requerida.`,
    },
    minLength: {
      value: 8,
      message: `${field} debe contener al menos 8 caracteres.`,
    },
  };
};

export const titleValidations = {
  required: {
    value: true,
    message: "Título de la Review es requerida.",
  },
  minLength: {
    value: 2,
    message: "Título de la Review debe contener al menos 2 caracteres.",
  },
  maxLength: {
    value: 20,
    message: "Título de la Review debe contener menos de 20 caracteres.",
  },
};

export const reviewValidations = {
  required: {
    value: true,
    message: "Review es requerida.",
  },
  minLength: {
    value: 2,
    message: "Review debe contener al menos 2 caracteres.",
  },
  maxLength: {
    value: 100,
    message: "Review debe contener menos de 100 caracteres.",
  },
};
