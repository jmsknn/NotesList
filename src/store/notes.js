import { getNotesFromStorage, removeNotesInStorage, setNotesInStorage } from '../service'; 

// Constants
export const GET_NOTES = 'NOTES/GET_NOTES';
export const ADD_NOTE = 'NOTES/ADD_NOTE';
export const DEL_NOTE = 'NOTES/DEL_NOTE';


//Actions
const getNotes = () => ({
  type: GET_NOTES,
});

const addNote = (payload) => ({
  type: ADD_NOTE,
  payload,
});

const delNote = (payload) => ({
  type: DEL_NOTE,
  payload,
});

export const actions = {
  addNote,
  delNote,
  getNotes
};

const INIT_STATE = {
  notes: [],
};

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
      removeNotesInStorage();
      let notes = state.notes.slice();
      notes.push(action.payload);
      setNotesInStorage(notes);
      return {
        ...state,
        notes,
      };
    }
    case DEL_NOTE: {
      removeNotesInStorage();
      let notes = state.notes.slice();
      notes = notes.filter((item) => item.time !== action.payload.time);
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
