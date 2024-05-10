import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css"

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="search-box-contact-form">
      <ContactForm />
      <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;