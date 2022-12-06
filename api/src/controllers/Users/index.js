const { UsersModel } = require('../../models/ModelsDB.js');

const listUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

module.exports = {
    listUsers
}