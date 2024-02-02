'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    // Aquí puedes manejar la lógica para enviar la información del formulario
    console.log(data);
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={...register('Campo obligatorio', { required: true })}
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            ref={...register('Campo obligatorio', { required: true })}
          />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={...register( 'email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Dirección de correo inválida'})}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            ref={...register('Campo obligatorio', { required: true })}
          />
          {errors.description && <p className="error">{errors.description.message}</p>}
        </div>

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;