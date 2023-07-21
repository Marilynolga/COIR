import nodemailer from "nodemailer"

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    const {email, nombre, token } = datos;

    console.log(token)

    //Enviar el email
    await transport.sendMail({
        from: "coir.com",
        to: email,
        subject: "Confirma tu cuenta en coir.com",
        text: 'Confirma tu cuenta en coir.com',
        html:`
            <p>Hola ${nombre}, comprueba tu cuenta en coir.com</p>
                    
            <p>Tu cuenta ya está lista, solo debes confirmarla en el siguiente enlace: 
            
            <a href="${process.env.BACKEND_URL}:${
                process.env.PORT ?? 3000
              }/auth/confirmar/${token}">Confirmar Cuenta</a></p>

            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `,
        
            

    });
}


export {
    emailRegistro
}