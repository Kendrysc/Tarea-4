import React, { useState, useEffect } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h2>Contactos</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddContactForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono
    };

    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Contacto agregado:', data);

        // Limpiar los campos del formulario
        setNombre('');
        setApellido('');
        setTelefono('');
      })
      .catch(error => console.log('Error:', error));
  };

  return (
    <div>
      <h2>Agregar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={event => setNombre(event.target.value)}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          value={apellido}
          onChange={event => setApellido(event.target.value)}
          placeholder="Apellido"
          required
        />
        <input
          type="tel"
          value={telefono}
          onChange={event => setTelefono(event.target.value)}
          placeholder="Teléfono"
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

function AgendaApp() {
  return (
    <div>
      <h1>Agenda Web</h1>
      <ContactList />
      <AddContactForm />
    </div>
  );
}

export default AgendaApp;
