import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  // selectContacts,
  // selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

import {
  ContactsList,
  ListItem,
  ContactName,
  ContactPhone,
  DeleteButton,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filtered = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  // const filteredContacts = () => {
  //   const normalizedFilter = filtered.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  // let rendered = filtered === '' ? contacts : filteredContacts();

  return (
    <ContactsList>
      {filteredContacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          <ContactName>{name} </ContactName>
          <ContactPhone>{number}</ContactPhone>

          {isLoading ? (
            <DeleteButton
              onClick={() => deleteContacts(id)}
              aria-label="delete contact"
              disabled
            >
              Delete
            </DeleteButton>
          ) : (
            <DeleteButton
              onClick={() => deleteContacts(id)}
              aria-label="delete contact"
            >
              Delete
            </DeleteButton>
          )}
        </ListItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
