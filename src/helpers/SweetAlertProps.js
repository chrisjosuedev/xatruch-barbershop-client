export const alertInfo = (title, icon, confirmText, cancel = 'No') => {
  return {
    title,
    icon,
    customClass: {
      confirmButton: 'btn btn-dark mr-2',
      cancelButton: 'btn btn-danger',
    },
    confirmButtonText: confirmText,
    cancelButtonText: cancel,
    showCancelButton: true,
    buttonsStyling: false,
  }
}

export const alertSuccess = (title, icon = 'success', timer = 2500) => {
  return {
    position: 'center',
    icon,
    title,
    showConfirmButton: false,
    timer,
  }
}
