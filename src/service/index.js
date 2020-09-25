export function setNotesInStorage(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function getNotesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("notes"));
  } catch (err) {
    return null;
  }
}
