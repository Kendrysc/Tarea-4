import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contactos</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {`${contact.nombre} ${contact.apellido} - ${contact.telefono}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
