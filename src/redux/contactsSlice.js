import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contactsList: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // Accepts a payload with contact name and number
    // We add an id in prepare function;
    // Then we reduce our state with the new contact.
    addContact: {
      reducer(state, action) {
        const { contactsList } = state;
        const { name } = action.payload;

        const foundContact = contactsList.find(contactFromState => {
          const contactNameFromState = contactFromState.name.toLowerCase();
          return contactNameFromState === name.toLowerCase();
        });

        if (foundContact) {
          return alert(`${name} is already in contacts`);
        }

        contactsList.push(action.payload);
      },

      prepare(payload) {
        return {
          payload: {
            ...payload,
            id: nanoid(),
          },
        };
      },
    },

    // Accepts a payload with contact id
    // Checks whether the id from action matches the id in our ContactList
    // Returns a new list wtihout matched id.
    removeContact: (state, action) => {
      const { contactsList } = state;
      const { payload } = action;

      const filteredContacts = contactsList.filter(({ id }) => {
        return id !== payload;
      });

      state.contactsList = [...filteredContacts];
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
