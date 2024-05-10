import { useEffect } from "react";
import { useSelector } from "react-redux";
import {persistor} from "../../redux /store"
import Contact from "../Contact/Contact";
import "./ContactList.css"
const ContactList = () => {
  useEffect(() => {
    persistor.persist();
  }, []);

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.status);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <ul className="contact-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;