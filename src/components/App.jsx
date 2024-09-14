import { Component } from 'react';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import initiatContacts from '../data.json';
import { PageStyle } from './PageStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const getContacts = localStorage.getItem('contacts');
    if (getContacts !== null) {
      const parseContact = JSON.parse(getContacts);
      this.setState({ contacts: parseContact });
      return;
    }
    this.setState({ contacts: initiatContacts });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addPhoneNumber = newPhoneNumber => {
    const { contacts } = this.state;

    contacts.find(contact => contact.name === newPhoneNumber.name)
      ? Notify.failure(newPhoneNumber.name + 'is already in contact')
      : this.setState(prewState => ({
          contacts: [...prewState.contacts, newPhoneNumber],
        }));
  };

  filterNumber = e => {
    const inputValue = e.target.value;
    const normalizeiedInput = inputValue.toLowerCase();
    this.setState({ filter: normalizeiedInput });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteNumber = numberId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => numberId !== contact.id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Layout>
        <PageStyle>
          <PhoneForm onSave={this.addPhoneNumber} />
          <Contacts
            contactsRender={this.getFilterContact()}
            value={filter}
            onFilter={this.filterNumber}
            onDelete={this.deleteNumber}
          />
        </PageStyle>
        <GlobalStyled />
      </Layout>
    );
  }
}
