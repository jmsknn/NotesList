import { getNotesFromStorage, setNotesInStorage } from "../service";

// Constants
export const GET_NOTES = "NOTES/GET_NOTES";
export const ADD_NOTE = "NOTES/ADD_NOTE";
export const EDIT_NOTE = "NOTES/EDIT_NOTE";
export const DEL_NOTE = "NOTES/DEL_NOTE";

// Actions
const getNotes = () => ({
  type: GET_NOTES,
});

const addNote = (payload) => ({
  type: ADD_NOTE,
  payload,
});

const editNote = (payload) => ({
  type: EDIT_NOTE,
  payload,
});

const delNote = (id) => ({
  type: DEL_NOTE,
  id,
});

export const actions = {
  addNote,
  editNote,
  delNote,
  getNotes,
};

const INIT_STATE = {
  notes: [],
};

// Reducers
export default function notesReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_NOTES: {
      const notes = getNotesFromStorage() || [];

      return {
        ...state,
        notes,
      };
    }
    case ADD_NOTE: {
      const notes = [...state.notes, action.payload];
      setNotesInStorage(notes);

      return {
        ...state,
        notes,
      };
    }
    case EDIT_NOTE: {
      const notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      setNotesInStorage(notes);

      return {
        ...state,
        notes,
      };
    }
    case DEL_NOTE: {
      const notes = state.notes.filter((note) => note.id !== action.id);
      setNotesInStorage(notes);

      return {
        ...state,
        notes,
      };
    }
    default:
      return state;
  }
}
