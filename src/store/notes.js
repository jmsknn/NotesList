// Constants
export const ADD_NOTE = 'NOTES/ADD_NOTE';
export const DEL_NOTE = 'NOTES/DEL_NOTE';


//Actions
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
  delNote
};

const INIT_STATE = {
  notes: [],
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_NOTE: {
      let notes = state.notes.slice();
      notes.push(action.payload);
      return {
        ...state,
        notes,
      };
    }
    case DEL_NOTE: {
      let notes = state.notes.slice();
      notes = notes.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        notes,
      };
    }
    default:
      return state;
  }
}
