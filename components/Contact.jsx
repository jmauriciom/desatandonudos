"use client"
import { useEffect } from "react";
import emailjs from "emailjs-com";
import { CustomButton, TextInput } from ".";

const Contact = () => {

    useEffect(() => {
        emailjs.init("qlOJPPJOVL2vOLMFL");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target; // Obtener el formulario HTML

        // Establecer el número de contacto aleatorio para el atributo "contact_number"
        form.contact_number.value = Math.random() * 100000 | 0;

        // Estos IDs son los utilizados en el formulario
        emailjs
            .sendForm('service_m5qadcj', 'template_usloxmj', form)
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    // Aquí puedes agregar una lógica para mostrar un mensaje de éxito al usuario
                },
                (error) => {
                    console.log("FAILED...", error);
                    // Aquí puedes agregar una lógica para mostrar un mensaje de error al usuario
                }
            );

        form.reset(); // Resetea el formulario después de enviarlo
    };

    return (
        <div>
            <div className='absolute inset-0 bg-gray-300' style={{ width: '100%', height: '50%', objectFit: 'cover' }}>
                <img
                    src='/tarjeta.png' // Reemplaza con la URL real de tu imagen
                    alt='Mi imagen' // Agrega un texto alternativo para accesibilidad
                    width='100%'
                    height='50%'
                />
            </div>

            <div className='container px-5 py-24 mx-auto flex'>
                <div className='lg:w-1/3 md:w-1/2 w-full bg-white rounded-lg p-12 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10'>
                    <h2 className='text-gray-800 text-lg mb-1 font-medium'>Contactame:</h2>
                    <p className='mb-5 text-gray-600'>
                        Dejame tus dudas y comentarios!
                    </p>

                    <form id="contact-form" onSubmit={handleSubmit}>
                        <input type="hidden" name="contact_number" />
                        <div className="field">
                            <label htmlFor="from_name" ></label>
                            <input type="text" placeholder="Nombre" name="from_name" id="from_name" className='bg-white rounded border border-gray-400 focus:outline-none h-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base p-2 w-full py-2 mb-5 resize-none' />
                        </div>
                        <div className="field">
                            <label htmlFor="email_id"></label>
                            <input type="text" name="email_id" placeholder="Email" id="email_id" className='bg-white rounded border border-gray-400 focus:outline-none h-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base p-2 w-full mb-5 resize-none' />
                        </div>
                        <div className="field">
                            <label htmlFor="message"></label>
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Mensaje"
                                id="message"
                                className='bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base p-2 w-full mb-5 resize-none' />
                        </div>

                        <CustomButton
                            title="Enviar"
                            containerStyles="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            iconRight={null} // Si no deseas un ícono a la derecha, pasa null
                        />
                    </form>
                    <p className='text-xs text-gray-500 mt-4'>
                        Te contestare lo antes posible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;