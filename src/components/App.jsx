import * as services from 'services/notify';
import { nanoid } from 'nanoid';
import {
  AddContactWrapper,
  ContactsWrapper,
  Container,
  HeaderApp,
  HeaderContacts,
} from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';
import { useState, useMemo } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const CONTACT_KEY = 'contacts';
const defaultState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useLocalStorage(CONTACT_KEY, defaultState);
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState('az');

  const onStorageContact = (contactName, contactNumber) => {
    if (contacts.find(user => user.name === contactName)) {
      return services.Notify.warning(`${contactName} is already in contacts`);
    }
    if (contacts.find(user => user.number === contactNumber)) {
      return services.Notify.warning(
        `This number: ${contactNumber} is already in contacts`
      );
    }
    const user = {
      name: contactName,
      number: contactNumber,
      id: nanoid(),
    };

    setContacts(contacts => [...contacts, user]);
    setFilter('');
  };

  const onFilterContact = e => {
    const filter = e.target.value.toLowerCase();
    setFilter(filter);
  };

  const getFilteredContacts = useMemo(() => {
    const filtered = contacts.filter(el =>
      el.name.toLowerCase().includes(filter)
    );
    if (order === 'az') {
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'za') {
      return filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  }, [contacts, filter, order]);

  const onSortContacts = order => {
    setOrder(order);
  };

  const onDeleteContact = user => {
    services.Confirm.show(
      `Delete contact`,
      `Are you sure you want to delete contact ${user.name}?`,
      'Yes',
      'No',
      () => {
        services.Notify.info(`Contact ${user.name} was deleted`);
        return setContacts(prevContacts =>
          prevContacts.filter(contact => contact.id !== user.id)
        );
      }
    );
  };

  return (
    <Container>
      <AddContactWrapper>
        <HeaderApp>Phonebook</HeaderApp>
        <ContactForm onStorageContact={onStorageContact} />
      </AddContactWrapper>
      <ContactsWrapper>
        <Filter onFilterContact={onFilterContact} filter={filter} />
        <HeaderContacts>Contacts</HeaderContacts>
        <ContactList
          contactList={getFilteredContacts}
          onSortContacts={onSortContacts}
          onDeleteContact={onDeleteContact}
          hasContacts={contacts.length > 0}
        />
      </ContactsWrapper>
    </Container>
  );
}
