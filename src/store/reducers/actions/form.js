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

export function formSubmit() {
  return {
    type: "SHOW_CONFIRMATION"
  };
}

export function toggleAll() {
  return { type: "TOGGLE_ALL" };
}
