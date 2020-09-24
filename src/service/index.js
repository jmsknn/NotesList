export function setNotesInStorage(userAuth) {
  localStorage.setItem('notes', JSON.stringify(userAuth));
}

export function getNotesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('notes'));
  } catch (err) {
    return null;
  }
}

export function removeNotesInStorage() {
  localStorage.removeItem('notes');
}
