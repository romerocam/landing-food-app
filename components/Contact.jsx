import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">Tu consulta aquí</h1>
      <form
        className="max-w-[600px] m-auto"
        action="https://formspree.io/f/maykprjn"
        method="POST"
      >
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            name="name"
            type="text"
            placeholder="Nombre"
            required="true"
          />

          <input
            className="border shadow-lg p-3"
            name="email"
            type="email"
            placeholder="Email"
            required="true"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          name="subject"
          type="text"
          placeholder="Asunto"
          required="true"
        />

        <textarea
          className="border shadow-lg p-3 w-full"
          name="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
          required="true"
        ></textarea>

        <button type="submit" className="border shadow-lg p-3 w-full mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
