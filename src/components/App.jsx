import React from 'react';
import { useSelector } from 'react-redux';

import AddContactForm from './AddContactForm/AddContactForm';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import { getContactsList, getFilter } from 'redux/selectors';

function getContactsIfFiltered(contactsList, filter) {
  if (filter === '') {
    return contactsList;
  }

  return contactsList.filter(contact => {
    const contactName = contact.name.toLowerCase();
    return contactName.includes(filter.toLowerCase());
  });
}

function App() {
  let { contactsList } = useSelector(getContactsList);
  const filter = useSelector(getFilter);

  contactsList = getContactsIfFiltered(contactsList, filter);

  return (
    <>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <ContactsFilter />
        <ContactsList contactsList={contactsList} />
      </Section>
    </>
  );
}

export default App;
