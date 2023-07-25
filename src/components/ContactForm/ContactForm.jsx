import PropTypes from 'prop-types';
import { FormWrapper, FormInput, FormButton } from './ContactForm.styled';
import { useLocalStorage } from 'components/hooks/useLocalStorage';

export function ContactForm({ onStorageContact }) {
  const [user, setUser] = useLocalStorage('user', { name: '', number: '' });

  const onFormSubmit = e => {
    e.preventDefault();
    const userName = e.currentTarget.elements.name.value;
    const userNumber = e.currentTarget.elements.number.value;
    if (user) {
      setUser({ name: userName, number: userNumber });
    }

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
};
