import { useEffect } from "react";
import { useSelector } from "react-redux";
import { persistor } from "../../redux /store";
import Contact from "../Contact/Contact";

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <ul className="space-y-2">
        {filteredContacts.map((contact) => (
          <li key={contact.id} className="bg-white p-4 rounded shadow">
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
