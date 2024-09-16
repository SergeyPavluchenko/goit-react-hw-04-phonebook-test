import { useEffect, useState } from 'react';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import initiatContacts from '../data.json';
import { PageStyle } from './PageStyle';

import React from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initiatContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addPhoneNumber = newPhoneNumber => {
    contacts.find(contact => contact.name === newPhoneNumber.name)
      ? Notify.failure(newPhoneNumber.name + 'is already in contact')
      : setContacts(prewContacts => [...prewContacts, newPhoneNumber]);
  };

  const filterNumber = e => {
    const inputValue = e.target.value;
    const normalizeiedInput = inputValue.toLowerCase();
    setFilter(normalizeiedInput);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const deleteNumber = numberId => {
    setContacts(prevContacts => {
      return prevContacts.filter(prevCotact => numberId !== prevCotact.id);
    });
  };

  return (
    <Layout>
      <PageStyle>
        <PhoneForm onSave={addPhoneNumber} />
        <Contacts
          contactsRender={getFilterContact()}
          value={filter}
          onFilter={filterNumber}
          onDelete={deleteNumber}
        />
      </PageStyle>
      <GlobalStyled />
    </Layout>
  );
};
