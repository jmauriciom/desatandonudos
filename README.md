# Desatando Nudos - Consultora de Coaching Laboral y Counsellor Personal

Bienvenido al repositorio de la página web de "Desatando Nudos", una consultora de coaching laboral y counsellor personal. Esta página web ha sido desarrollada utilizando Next.js, Tailwind CSS y EmailJS, y está desplegada en Vercel para una fácil visualización y acceso en línea.

## Descripción

"Desatando Nudos" es una consultora especializada en brindar servicios de coaching laboral y counselling personalizado. La página web ha sido creada con el objetivo de proporcionar información sobre los servicios ofrecidos, así como permitir a los visitantes ponerse en contacto con la consultora a través de un formulario de contacto.

## Tecnologías Utilizadas

- Next.js: Next.js es un framework de React que facilita el desarrollo de aplicaciones web y páginas estáticas, proporcionando una experiencia de desarrollo rápida y eficiente.

- Tailwind CSS: Tailwind CSS es una librería de utilidades CSS que permite crear diseños y estilos de forma rápida y sencilla mediante clases utilitarias.

- EmailJS: EmailJS es una plataforma que facilita el envío de correos electrónicos desde aplicaciones web, lo que permite implementar un formulario de contacto funcional.

- Vercel: Vercel es una plataforma de despliegue y hosting que permite desplegar proyectos web de forma sencilla y rápida.

## Funcionalidades Principales

1. Información de Servicios: La página web muestra información detallada sobre los servicios de coaching laboral y counselling ofrecidos por la consultora.

2. Formulario de Contacto: Los visitantes pueden enviar mensajes y consultas a la consultora a través de un formulario de contacto. El formulario utiliza EmailJS para enviar los mensajes por correo electrónico.

3. Diseño Responsivo: La página web ha sido diseñada para ser totalmente responsive, lo que garantiza una experiencia óptima en dispositivos móviles y de escritorio.

## Enlace de Vercel

La página web de "Desatando Nudos" está desplegada en Vercel y puedes acceder a ella a través del siguiente enlace: [desatando-nudos.vercel.app](https://desatando-nudos.vercel.app/).

## Instrucciones de Uso (Desarrollo Local)

1. Clona el repositorio a tu computadora local:

```bash
git clone https://github.com/tu-usuario/desatando-nudos.git
```

2. Instala las dependencias:

```bash
cd desatando-nudos
npm install
```

3. Configuración de EmailJS:

   - Crea una cuenta en [EmailJS](https://www.emailjs.com/) y obtén tu ID de usuario.

   - En el archivo `Contact.js`, reemplaza `'YOUR_EMAILJS_USER_ID'` con tu ID de usuario en la llamada a `emailjs.init`.

   - En el mismo archivo, asegúrate de configurar correctamente el servicio (`'YOUR_EMAILJS_SERVICE_ID'`) y la plantilla (`'YOUR_EMAILJS_TEMPLATE_ID'`) para el envío del formulario.

4. Ejecuta la aplicación en modo de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o mejoras posibles, no dudes en abrir un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o consulta relacionada con este proyecto, puedes ponerte en contacto con nosotros a través de [correo electrónico](mailto:contacto@desatandonudos.com) o en nuestro sitio web [desatandonudos.com](https://www.desatandonudos.com).

---

Espero que esta guía te sea útil para presentar y explicar tu proyecto en GitHub y Vercel. Si tienes alguna otra pregunta o necesitas más información, no dudes en preguntar. ¡Buena suerte con tu consultora "Desatando Nudos"!
