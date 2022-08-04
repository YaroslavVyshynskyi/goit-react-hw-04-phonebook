import { useState } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";


const App = () => {
// class App extends Component {
//   state = {
//     contacts: [
//       // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//     ],
//     filter: '',
//     name: '',
//     number: '',
//     id: ''
//   };
  
  const[contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);
  const[filter, setFilter] = useState("");
  const[name, setName] = useState("");
  const[number, setNumber] = useState("");
  const[id, setId] = useState("");

  const handleAddContact = data => {
    // const existingContactsNames = this.state.contacts.map(({ name }) => name.toLowerCase());
    const existingContactsNames = contacts.map(({ name }) => name.toLowerCase());
    if (existingContactsNames.includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`)
      return
    }
    
    const contact = {
      name: data.name,
      number: data.number,
      id: nanoid()
    };
    
    // this.setState(({ contacts }) => ({
    setContacts(( contacts ) => 
      [contact, ...contacts]
    );
  };

  const changeFilter = e => {
    // this.setState({ filter: e.currentTarget.value });
    setFilter(e.currentTarget.value);
  };
  
  const getVisibleContacts = () => { 
    // const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
  }

  const deleteContact = (deleteId) => {
    // this.setState(({ contacts }) => ({
    setContacts(( contacts ) => 
      contacts.filter((contact) => {return contact.id !== deleteId}),
    );
  };
  
  
  const visibleContacts = getVisibleContacts();
  const containerStyles = {
      display: "block",
      margin: "0 auto",
      width: "400px",
  }

    const contactsLength = contacts.length;

    return (
      <div style={containerStyles}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />

        <h2>Contacts</h2>
        {contactsLength > 0
          ? <>
            {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}
            <Filter value={filter} onChange={changeFilter} />
            <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
          </>
          : "no contacts"}
      </div>  
    )
  };

export default App;

