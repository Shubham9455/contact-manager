import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState,useEffect } from 'react';
import { v4 as uuid } from 'uuid';





function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {...contact, id: uuid()}]);
  };
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(contacts) setContacts(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !==id;
      
    })
    setContacts(newContactList);
  }

  return (
    <div className="App">
      
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
