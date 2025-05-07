
import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800">
      <h3 className="text-2xl text-center text-white">Contato</h3>
      <p className="mt-4 text-lg text-center text-gray-400">Você pode me contatar por e-mail ou via WhatsApp.</p>
      <div className="text-center mt-4">
        <a href="mailto:servicosdavirafael@gmail.com" className="text-blue-500">Email</a> | 
        <a href="tel:+5511962755581" className="text-blue-500"> WhatsApp</a>
      </div>
    </section>
  );
};

export default Contact;
