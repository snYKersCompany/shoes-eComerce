// Archivo de creación de roles que se crea cuando se levanta el servidor, ver ./app.js
const { Roles } = require('../models/ModelsDB');

const createRoles = async () => {
    try {
        const count = await Roles.estimatedDocumentCount();
        if (count > 0) {
            return;
        }
        const values = await Promise.all([
            new Roles({ name: 'user' }).save(),
            new Roles({ name: 'admin' }).save()
        ])        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createRoles
}