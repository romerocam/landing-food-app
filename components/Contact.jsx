import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("maykprjn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
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
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            className="border shadow-lg p-3"
            name="email"
            type="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          name="subject"
          type="text"
          placeholder="Asunto"
        />
        <ValidationError
          prefix="Subjectl"
          field="subject"
          errors={state.errors}
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          name="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="border shadow-lg p-3 w-full mt-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
