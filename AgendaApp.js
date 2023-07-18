import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';

const AgendaApp = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log('Error:', error));
  }, []);

  const handleAddContact = (newContact) => {
    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => setContacts([...contacts, data]))
      .catch((error) => console.log('Error:', error));
  };

  return (
    <div>
      <h1>Agenda Web</h1>
      <ContactList contacts={contacts} />
      <AddContact onAddContact={handleAddContact} />
    </div>
  );
};

export default AgendaApp;
