import React, { useState } from 'react';

const AddContact = ({ onAddContact }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    };
    onAddContact(newContact);
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <div>
      <h2>Agregar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Apellido"
          required
        />
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddContact;
