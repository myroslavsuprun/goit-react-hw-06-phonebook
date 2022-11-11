import React from 'react';
import PropTypes from 'prop-types';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import {
  ContactsListStyled,
  ContactsItem,
  ContactsButton,
} from './ContactsList.styled';

const ContactsList = ({ contactsList }) => {
  const dispatch = useDispatch();

  const onDeleteBtnClick = id => {
    dispatch(removeContact(id));
  };

  const mapCallback = ({ name, number, id }) => (
    <ContactsItem key={id}>
      {name} {number}
      <ContactsButton onClick={() => onDeleteBtnClick(id)}>
        Delete
      </ContactsButton>
    </ContactsItem>
  );

  return (
    <ContactsListStyled>{contactsList.map(mapCallback)}</ContactsListStyled>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.array.isRequired,
};

export default ContactsList;
