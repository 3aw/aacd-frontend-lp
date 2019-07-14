export function showForm(form) {
  if (form.disabled == true) {
    return {
      type: "SHOW_FORM",
      disabled: false
    };
  } else {
    return {
      type: "TOGGLE_FORM",
      disabled: true
    };
  }
}
