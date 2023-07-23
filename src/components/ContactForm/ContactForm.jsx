import PropTypes from 'prop-types';
import { FormWrapper, FormInput, FormButton } from './ContactForm.styled';
import { useEffect, useState } from 'react';

export function ContactForm({ onStorageContact, firstLoad }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const user = { name, number };

    if (firstLoad && window.localStorage.getItem('user')) {
      setName(JSON.parse(window.localStorage.getItem('user')).name ?? '');
      setNumber(JSON.parse(window.localStorage.getItem('user')).number ?? '');
    }
    if (!firstLoad) window.localStorage.setItem('user', JSON.stringify(user));
  }, [firstLoad, name, number]);

  const onFormSubmit = e => {
    e.preventDefault();
    const userName = e.currentTarget.elements.name.value;
    const userNumber = e.currentTarget.elements.number.value;
    setName(userName);
    setNumber(userNumber);
    onStorageContact(userName, userNumber);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormWrapper>
        <label htmlFor="formName">Name</label>
        <FormInput
          id="formName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="phone">Number</label>
        <FormInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </FormWrapper>
    </form>
  );
}

ContactForm.propTypes = {
  onStorageContact: PropTypes.func.isRequired,
  firstLoad: PropTypes.bool.isRequired,
};
