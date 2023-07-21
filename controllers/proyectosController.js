
const admin = (req, res) => {
    res.render('proyectos/admin', {
        pagina: 'Mis proyectos',
        barra: true
    })
}

// Formulario para crear una nueva propiedad
const crear = (req, res) =>{
    res.render('proyectos/crear', {
        pagina: 'Crear Proyectos',
        barra: true
    })
}

export {
    admin,
    crear
}