export const alertInfo = (title, icon, confirmText) => {
  return {
    title,
    icon,
    customClass: {
      confirmButton: "btn btn-dark mr-2",
      cancelButton: "btn btn-danger",
    },
    confirmButtonText: confirmText,
    cancelButtonText: "No",
    showCancelButton: true,
    buttonsStyling: false,
  };
};

export const alertSuccess = (title) => {
  return {
    position: "center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  };
};
